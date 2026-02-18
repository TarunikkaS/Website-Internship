#!/bin/bash
# ASECO Deploy Script - Run this after Node.js is installed
set -e

# Add Homebrew to PATH (in case Node was installed via brew)
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

echo "=== ASECO Deployment ==="

# Check Node.js
if ! command -v node &> /dev/null; then
  echo "ERROR: Node.js is not installed."
  echo ""
  echo "Install it first:"
  echo "  1. Download from https://nodejs.org (LTS) and run the installer, OR"
  echo "  2. Run: brew install node"
  echo ""
  echo "Then restart your terminal and run: ./deploy.sh"
  exit 1
fi

echo "Node: $(node -v)"
echo "npm:  $(npm -v)"
echo ""

cd "$(dirname "$0")"

# Install dependencies (includes firebase-tools)
echo "Installing dependencies..."
npm install

# Build
echo ""
echo "Building production app..."
npm run build

# Firebase deploy (will prompt for login if needed)
echo ""
echo "Deploying to Firebase Hosting..."
npx firebase deploy

echo ""
echo "Done! Your site should be live."
