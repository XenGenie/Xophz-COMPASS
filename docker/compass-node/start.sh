#!/bin/bash

echo "Starting compass-node-service (Vite Dev Server)..."

# Create a checksum of package files AND vite config to detect changes
CURRENT_CHECKSUM=$(cat package.json pnpm-lock.yaml vite.config.js 2>/dev/null | md5sum | cut -d' ' -f1)
SAVED_CHECKSUM=""

# Read the previously saved checksum if it exists
if [ -f "node_modules/.package-checksum" ]; then
  SAVED_CHECKSUM=$(cat node_modules/.package-checksum)
fi

# Install dependencies if node_modules is empty OR package/config files have changed
if [ ! -d "node_modules" ] || [ ! -f "node_modules/.bin/vite" ] || [ -z "$(ls -A "node_modules")" ] || [ "$CURRENT_CHECKSUM" != "$SAVED_CHECKSUM" ]; then
  echo "Dependencies or Vite config have changed, running pnpm install..."
  CI=true pnpm install
  # Clear Vite cache to pick up config changes
  rm -rf node_modules/.vite
  echo "Cleared Vite cache."
  # Save the new checksum
  echo "$CURRENT_CHECKSUM" >node_modules/.package-checksum
fi

# Run vite dev server with host flag to listen on all interfaces
pnpm run dev -- --host
