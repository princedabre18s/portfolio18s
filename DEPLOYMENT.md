# Portfolio Deployment Guide

## 🚀 Quick Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Local Development
1. Clone the repository
2. Install dependencies: `npm install --legacy-peer-deps`
3. Start development server: `npm start`
4. Open http://localhost:3000

### 📦 Installation Commands

```bash
# Install all dependencies
npm install --legacy-peer-deps

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 🌐 Render Deployment

### Auto-Deploy Setup
1. Connect your GitHub repository to Render
2. Create a new **Static Site** on Render
3. Use these settings:
   - **Build Command**: `npm install --legacy-peer-deps && npm run build`
   - **Publish Directory**: `build`
   - **Node Version**: `18` (or latest LTS)

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `build` folder contents to your hosting platform

### Environment Variables (if needed)
- `NODE_VERSION`: `18`
- `NPM_CONFIG_LEGACY_PEER_DEPS`: `true`

## 🔧 Build Configuration

The project uses Create React App with:
- **React 18**
- **Modern JavaScript (ES6+)**
- **CSS3 with animations**
- **Framer Motion** for smooth animations
- **Canvas-based** animations (no WebGL dependencies)

## ⚡ Performance Features
- Optimized CSS animations for mobile compatibility
- Canvas-based effects instead of heavy 3D libraries
- Lazy loading and code splitting
- Responsive design for all devices

## 📱 Cross-Platform Compatibility
This portfolio is built with cross-platform compatibility in mind:
- ✅ **iOS Safari**: Full animation support
- ✅ **Android Chrome**: Full animation support  
- ✅ **Desktop browsers**: Full animation support
- ✅ **Mobile devices**: Optimized performance

## 🐛 Troubleshooting
- If animations don't work on mobile, check browser developer tools
- For slow performance, check network connection
- All animations use CSS3 and Canvas (no WebGL required)

## 📞 Support
Contact Prince Dabre: prince.dabre.dev@gmail.com
