# Stage 1: install deps and build
FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production

# copy package files first and install (cache)
COPY package*.json pnpm-lock.yaml* ./
# if you use npm/yarn adapt the commands
RUN npm ci --silent

# copy app and build
COPY . .
RUN npm run build

# Stage 2: runtime image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# If you use next start which requires next & react packages
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
ENV PORT=3000

CMD ["node", "node_modules/next/dist/bin/next", "start", "-p", "3000"]