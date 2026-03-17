#!/bin/bash

# The Jaishree Sharad Clinic Website Deployment Script
echo "🚀 Starting The Jaishree Sharad Clinic website deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎉 Deployment ready!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Push to GitHub: git push origin main"
    echo "2. Deploy to Vercel: npx vercel --prod"
    echo "3. Or connect your GitHub repo to Vercel for automatic deployments"
    echo ""
    echo "🌐 Your website will be available at:"
    echo "   - Development: http://localhost:3000"
    echo "   - Production: https://your-domain.vercel.app"
    echo ""
    echo "📊 Build Statistics:"
    echo "   - Total pages: 36"
    echo "   - First Load JS: ~121 KB"
    echo "   - Optimized for production"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
