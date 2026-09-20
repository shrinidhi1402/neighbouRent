#!/bin/bash
set -e

echo "=== [NeighbouRent] Running prebuild dependency installation ==="

cd /var/app/staging

# Install dependencies using exact package-lock.json
echo "Installing dependencies with npm ci..."
npm ci --omit=dev --no-audit --no-fund

# Generate Prisma client
echo "Generating Prisma client..."
npx prisma generate

echo "=== [NeighbouRent] Prebuild finished successfully ==="
