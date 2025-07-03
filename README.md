# Prince Dabre - Portfolio Website

A modern, animated portfolio website built with React and featuring 3D elements, smooth animations, and a professional design.

## 🚀 Features

- **Modern Design**: Clean, professional, and visually appealing
- **3D Elements**: Interactive 3D animations using Three.js and React Three Fiber
- **Smooth Animations**: Framer Motion for buttery smooth transitions
- **Responsive Design**: Works perfectly on all devices
- **Interactive Particles**: Dynamic particle background
- **Custom Cursor**: Animated custom cursor for desktop
- **Glass Morphism**: Modern glass-like UI elements
- **Gradient Effects**: Beautiful gradient text and backgrounds
- **Contact Form**: Functional contact form with EmailJS integration
- **Performance Optimized**: Fast loading and smooth performance

## 🛠️ Complete Tech Stack

### 🎯 **Core Frontend Framework**
- **React 18** - Modern component-based architecture with hooks
- **Create React App** - Zero-config build setup and development server

### 🎨 **Animation & Visual Libraries**
- **Framer Motion** - Professional-grade animations and transitions
- **AOS (Animate On Scroll)** - Scroll-triggered animations for elements
- **Typed.js** - Realistic typing animations for the hero section

### 🎭 **UI & Icons**
- **React Icons** - Comprehensive icon library (FontAwesome, Material Design, etc.)
- **Custom CSS3** - Advanced animations, glassmorphism, gradients, and effects

### ✨ **Visual Effects & Styling**
- **CSS3 Advanced Features:**
  - Glassmorphism (backdrop-filter, blur effects)
  - CSS Grid & Flexbox for responsive layouts
  - Custom animations (@keyframes)
  - CSS Variables for theming
  - Transform3D for hardware acceleration
- **Canvas API** - Custom particle animations and interactive sphere
- **Custom Cursor** - Interactive mouse tracking effects

### 🎪 **Design Techniques**
- **Glassmorphic Design** - Modern translucent card effects
- **Gradient Overlays** - Dynamic color transitions
- **Neon Effects** - Glowing borders and text
- **Floating Animations** - Smooth continuous movements
- **Parallax Scrolling** - Depth and immersion
- **Responsive Design** - Mobile-first approach

### 🛠️ **Development Tools**
- **ES6+ JavaScript** - Modern syntax (arrow functions, destructuring, async/await)
- **CSS Modules** - Component-scoped styling
- **Webpack** - Module bundling (via Create React App)
- **Babel** - JavaScript transpilation

### 📦 **Package Management & Build**
- **npm** - Package management with legacy peer deps handling
- **React Scripts** - Build, test, and development scripts

### 🎯 **Performance Optimizations**
- **React.memo** - Component memoization
- **Lazy Loading** - Code splitting for better performance
- **CSS Transitions** - Hardware-accelerated animations
- **Optimized Images** - SVG icons and optimized assets

### 🌟 **Key Architectural Decisions**
1. **Component-Based Architecture** - Modular, reusable components
2. **Custom Canvas Animations** - Avoided heavy 3D libraries for better compatibility
3. **CSS-First Approach** - Leveraged native CSS for animations over JS libraries
4. **Mobile-First Responsive** - Ensured great experience across all devices
5. **Accessibility Focused** - Semantic HTML and proper navigation

### 🎨 **Visual Design Elements**
- **Color Palette** - Dark theme with accent colors (purple, cyan, orange)
- **Typography** - Modern font stacks with proper hierarchy
- **Micro-interactions** - Hover effects, button animations, form feedback
- **Visual Hierarchy** - Clear information architecture

### 💡 **Why This Stack?**
This combination creates a **professional, modern, and highly animated portfolio** that showcases both technical skills and design aesthetics. The stack is specifically chosen to be:
- ⚡ **Fast** - Optimized performance
- 🎯 **Modern** - Latest web technologies
- 📱 **Responsive** - Works on all devices
- ✨ **Impressive** - Eye-catching animations and effects
- 🛠️ **Maintainable** - Clean, modular code structure

## 🎨 Design Features

- **Custom Cursor**: Interactive cursor that follows mouse movement
- **Particle Background**: Dynamic floating particles
- **3D Sphere**: Animated 3D sphere in hero section
- **Floating Elements**: Animated floating tech stack elements
- **Glass Morphism**: Translucent glass-like components
- **Gradient Text**: Beautiful gradient text effects
- **Hover Effects**: Interactive hover animations
- **Scroll Animations**: Elements animate as you scroll

## 📁 Project Structure

```
src/
├── components/
│   ├── About/
│   ├── Contact/
│   ├── Cursor/
│   ├── Experience/
│   ├── Footer/
│   ├── Hero/
│   ├── Loader/
│   ├── Navbar/
│   ├── ParticlesBackground/
│   ├── Projects/
│   └── Skills/
├── App.js
├── App.css
├── index.js
└── index.css
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/prince-dabre/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS (Optional)**
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Get your service ID, template ID, and public key
   - Update the EmailJS configuration in `src/components/Contact/Contact.js`

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Sections

1. **Hero** - Introduction with animated 3D sphere and typing effect
2. **About** - Personal information and statistics
3. **Skills** - Technical skills with animated progress bars
4. **Experience** - Professional work experience timeline
5. **Projects** - Featured projects with detailed modals
6. **Contact** - Contact form and social links

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Customization

You can easily customize the portfolio by:

1. **Colors**: Update the CSS custom properties in `src/index.css`
2. **Content**: Modify the content in each component
3. **Animations**: Adjust Framer Motion animations
4. **3D Elements**: Customize Three.js components
5. **Particles**: Configure particle settings

## 📧 Contact Form Setup

To enable the contact form:

1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the configuration in `Contact.js`:
   ```javascript
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     formData,
     'YOUR_PUBLIC_KEY'
   );
   ```

## 🚀 Deployment

The portfolio can be deployed to:
- **Netlify** - Drag and drop the build folder
- **Vercel** - Connect your GitHub repository
- **GitHub Pages** - Use `gh-pages` package
- **Heroku** - Deploy using Heroku CLI

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: prince.dabre@email.com
- **LinkedIn**: [linkedin.com/in/prince-dabre](https://linkedin.com/in/prince-dabre)
- **GitHub**: [github.com/prince-dabre](https://github.com/prince-dabre)
- **Twitter**: [@prince_dabre](https://twitter.com/prince_dabre)

---

Made with ❤️ and lots of ☕ by Prince Dabre
