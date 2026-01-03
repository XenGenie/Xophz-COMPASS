FROM node:20-alpine

# Install build dependencies if needed (for node-sass or similar)
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    git \
    bash

# Enable corepack and install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /var/www/html

# Copy package files first (including workspace config for overrides)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install dependencies using pnpm with frozen lockfile for reproducibility
RUN pnpm install --frozen-lockfile

# Copy start script
COPY ./docker/compass-node/start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh

# The entrypoint will be the start script
ENTRYPOINT ["/usr/local/bin/start.sh"]
