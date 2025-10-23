# Docker Build Inspection Report

This report outlines potential problems and areas for improvement in the Docker build process for the `wiktor-nowak.online` project.

## 1. Security Vulnerabilities

### High-Risk

*   **`wiktornowak.env` file is copied into the Docker image.**
    *   **Problem:** The `Dockerfile` contains the instruction `COPY wiktornowak.env ./`, which copies a file containing the `SMTP_PASSWORD` directly into the image. This is a major security risk, as anyone with access to the image can retrieve the password.
    *   **Recommendation:**
        1.  Remove the `COPY wiktornowak.env ./` line from the `Dockerfile`.
        2.  Pass the `SMTP_PASSWORD` to the Docker container as an environment variable at runtime. This can be done using a `.env` file on the host machine and the `docker run --env-file` option, or by passing the variable directly with `docker run -e SMTP_PASSWORD=...`.
        3.  Ensure that the `.dockerignore` file includes `wiktornowak.env` and other `.env*` files to prevent them from being copied accidentally.

## 2. Dockerfile Inefficiencies and Best Practices

*   **Not a multi-stage build.**
    *   **Problem:** The `Dockerfile` uses a single stage to build and run the application. This results in a final image that contains all the `devDependencies`, build tools, and intermediate build artifacts, making the image significantly larger than necessary.
    *   **Recommendation:** Use a multi-stage build. The first stage (the "builder" stage) would install all dependencies, build the Next.js application, and create the standalone output. The second stage would then copy only the standalone output from the builder stage into a clean, minimal base image (like `node:18-alpine`).

*   **Granular `COPY` instructions.**
    *   **Problem:** The `Dockerfile` has multiple `COPY` instructions for individual files and directories. This is verbose and prone to errors if new files are added to the project.
    *   **Recommendation:** Use a single `COPY . .` instruction to copy the entire project context into the Docker image. Then, use a `.dockerignore` file to exclude files and directories that are not needed for the build, such as `node_modules`, `.git`, and `.env` files.

*   **Use of `npm install` instead of `npm ci`.**
    *   **Problem:** `npm install` can lead to non-reproducible builds because it can install different versions of dependencies if the `package-lock.json` file is not up-to-date.
    *   **Recommendation:** Use `npm ci` in the `Dockerfile`. `npm ci` installs dependencies directly from the `package-lock.json` file, ensuring that every build uses the exact same dependency tree.

*   **Unnecessary `ENV BUILD_STANDALONE=true`.**
    *   **Problem:** The `Dockerfile` sets the environment variable `BUILD_STANDALONE=true`, but this variable is not used in any of the `package.json` scripts. The `output: "standalone"` option in `next.config.ts` is what actually enables the standalone build.
    *   **Recommendation:** Remove the `ENV BUILD_STANDALONE=true` line from the `Dockerfile`.

*   **Wildcard in `COPY package-lock.json*`**
    *   **Problem:** The `Dockerfile` uses `COPY package-lock.json* ./`. While this may work, it's not precise and could potentially copy other files if they exist.
    *   **Recommendation:** Change this to `COPY package-lock.json ./`.

## 3. Recommended `Dockerfile`

Here is an example of an improved `Dockerfile` that incorporates the recommendations above:

```dockerfile
# Stage 1: Builder
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Runner
FROM node:18-alpine

WORKDIR /app

# Copy the standalone output from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public

# Expose the port the app runs on
EXPOSE 3000

# Set the command to start the server
CMD ["node", "server.js"]
```

## 4. `.dockerignore`

Create a `.dockerignore` file in the root of the project with the following content to prevent unnecessary files from being copied into the Docker image:

```
.git
.next
node_modules
.env*
wiktornowak.env
README.md
```
