#!/bin/sh

echo "Running compass-node-container's entrypoint file..."

echo "Modifying user (hack for mac)..."
usermod -u 1000 www-data #a hack for macs

# npm install webpack-cli
# npm run watch-poll
echo "compass-node-container is ready!"
