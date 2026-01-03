#!/bin/bash

echo "Starting compass-node-service (Vite Dev Server)..."

# Ensure node_modules is populated if volume is empty
if [ ! -d "node_modules" ] || [ -z "$(ls -A node_modules)" ]; then
  echo "node_modules is empty, running pnpm install..."
  pnpm install
fi

# Run vite dev server with host flag to listen on all interfaces
pnpm run dev -- --host
