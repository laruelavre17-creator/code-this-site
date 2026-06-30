# ── Stage 1: build ────────────────────────────────────────────────────────────
FROM node:lts-alpine AS builder

WORKDIR /app

# Install dependencies first (layer-cached unless lockfiles change)
COPY package.json package-lock.json* ./

# Fall back to a plain npm install when there is no package-lock.json
# (the repo uses bun.lock, so we generate one on the fly)
RUN npm install

# Copy the rest of the source
COPY . .

# Build with the node-server Nitro preset so the output is a plain Node.js
# server at .output/server/index.mjs (overrides the cloudflare default in
# @lovable.dev/vite-tanstack-config).
RUN NITRO_PRESET=node-server npm run build

# ── Stage 2: production image ──────────────────────────────────────────────────
FROM node:lts-alpine AS runner

WORKDIR /app

# Only copy the self-contained Nitro output — no node_modules needed at runtime
COPY --from=builder /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
