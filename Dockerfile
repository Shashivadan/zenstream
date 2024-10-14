FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

COPY prisma ./prisma

RUN npm install -g pnpm

COPY . .

RUN pnpm install

RUN pnpm exec prisma generate

EXPOSE 3000

CMD ["pnpm", "dev"]

# ENV NEXT_TELEMETRY_DISABLED 1
# ENV NODE_ENV production
# ENV PORT 3000