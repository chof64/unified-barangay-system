FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

COPY prisma ./

COPY package.json package-lock.json* ./

RUN \
    if [ -f package-lock.json ]; then npm ci --omit=dev; \
    else echo "Lockfile not found." && exit 1; \
    fi


FROM node:20-alpine AS builder
ARG DATABASE_URL

ARG NEXT_PUBLIC_BASE_URL

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# ENV NEXT_TELEMETRY_DISABLED 1

RUN \
    if [ -f package-lock.json ]; then SKIP_ENV_VALIDATION=1 npm run build; \
    else echo "Lockfile not found." && exit 1; \
    fi


FROM gcr.io/distroless/nodejs20-debian12 AS runner
WORKDIR /app

ENV NODE_ENV production

# ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["server.js"]
