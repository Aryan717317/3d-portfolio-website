# 🌟 3D Interactive Portfolio

> A stunning, modern portfolio website built with React, Three.js, and cutting-edge web technologies featuring immersive 3D graphics and smooth animations.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-19-blue)
![Three.js](https://img.shields.io/badge/Three.js-Latest-orange)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-4.x-cyan)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)

## 🚀 Live Demo

🔗 **[View Live Portfolio](https://your-portfolio-url.vercel.app)** *(Update with your actual URL after deployment)*

## ✨ Features

### 🎮 Interactive 3D Graphics
- **Hero Section**: Floating geometric shapes that respond to mouse movement
- **Skills Visualization**: Interactive 3D spheres showing proficiency levels
- **Project Showcase**: 3D cards with hover effects and detailed modals
- **Timeline**: Animated 3D timeline for experience and education
- **Contact Section**: Particle effects and floating elements

### 🎨 Modern Design
- **Dark Theme** with neon accents and glass morphism effects
- **Responsive Design** optimized for all devices
- **Smooth Animations** powered by Framer Motion
- **Professional UI/UX** with attention to detail

### ⚡ Performance
- **Lazy Loading** for optimal performance
- **Code Splitting** for faster load times
- **Optimized 3D Rendering** for smooth interactions
- **Mobile Responsive** with touch-friendly controls

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, Vite, TypeScript |
| **3D Graphics** | Three.js, React Three Fiber, @react-three/drei |
| **Styling** | Tailwind CSS, Framer Motion |
| **Forms** | EmailJS for contact functionality |
| **Icons** | Lucide React, React Icons |
| **Deployment** | Vercel, Netlify |

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/3d-portfolio.git
   cd 3d-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:5173
   ```

## 🎯 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag dist folder to netlify.com
```

### GitHub Pages
```bash
npm run deploy
```

## 📧 Contact Form Setup

1. Create account at [EmailJS](https://emailjs.com)
2. Set up email service and template
3. Create `.env` file:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🎨 Customization

### Personal Information
Edit `src/data/portfolioData.js` to update:
- Personal details (name, title, bio)
- Skills and proficiency levels
- Project information with descriptions
- Work experience and education
- Social media links

### Styling
- **Colors**: Modify `tailwind.config.js`
- **Animations**: Adjust in component files
- **3D Elements**: Customize in `src/components/sections/`

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/          # Main page sections
│   │   ├── Hero.jsx      # 3D hero with floating shapes
│   │   ├── About.jsx     # About with 3D elements
│   │   ├── Skills.jsx    # Interactive skill spheres
│   │   ├── Projects.jsx  # 3D project showcase
│   │   ├── Experience.jsx # 3D timeline
│   │   └── Contact.jsx   # Contact form with 3D bg
│   ├── Navbar.jsx        # Navigation component
│   ├── Footer.jsx        # Footer component
│   ├── LoadingScreen.jsx # 3D loading animation
│   └── ThemeProvider.jsx # Theme management
├── data/
│   └── portfolioData.js  # All portfolio content
├── App.jsx               # Main application
└── index.css            # Global styles
```

## 🎮 3D Interactions

- **Mouse Movement**: Floating shapes respond to cursor
- **Click Interactions**: Skill spheres and project cards
- **Scroll Animations**: Triggered as sections come into view
- **Touch Support**: Mobile-friendly 3D interactions

## 📱 Responsive Design

- **Desktop**: Full 3D experience with all interactions
- **Tablet**: Optimized touch controls and performance
- **Mobile**: Simplified 3D effects for better performance

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js** for amazing 3D capabilities
- **React Three Fiber** for React integration
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **Vercel** for seamless deployment

## 📞 Contact

**Alex Developer**
- Portfolio: [Live Demo](https://your-portfolio-url.vercel.app)
- Email: alex@example.com
- LinkedIn: [linkedin.com/in/alexdev](https://linkedin.com/in/alexdev)
- GitHub: [github.com/alexdev](https://github.com/alexdev)

---

⭐ **Star this repository if it helped you!**

Made with ❤️ and lots of ☕
