FROM node:18-alpine

WORKDIR /docker-app

COPY package.json package-lock.json* ./
COPY src ./src
COPY public ./public
COPY .eslintrc.json ./
COPY next-env.d.ts ./
COPY next.config.ts ./
COPY tsconfig.json ./

ENV NEXT_TELEMETRY_DISABLED=1
ENV BUILD_STANDALONE=true

RUN npm install && npm run build

CMD ["npm", "start"]
