# 🚀 3D Interactive Portfolio Website

A stunning, modern portfolio website built with React, Three.js, and cutting-edge web technologies. Features immersive 3D graphics, smooth animations, and a responsive design that works perfectly on all devices.

![Portfolio Preview](https://via.placeholder.com/800x400/0ea5e9/ffffff?text=3D+Portfolio+Preview)

## ✨ Features

### 🎨 Design & User Experience
- **Modern Dark Theme** with optional light mode toggle
- **Responsive Design** that works on desktop, tablet, and mobile
- **Smooth Animations** powered by Framer Motion
- **Glass Morphism Effects** for a modern aesthetic
- **Neon Glow Accents** and gradient text effects

### 🎮 3D Graphics & Interactions
- **Interactive 3D Scenes** in every section using Three.js
- **Floating Geometric Shapes** that respond to user interactions
- **3D Project Showcase** with interactive project cards
- **Animated Timeline** with 3D elements
- **Dynamic Skill Visualizations** with interactive spheres

### 📱 Sections & Content
- **Hero Section**: Animated 3D scene with floating elements
- **About Section**: Personal introduction with 3D cubes and stats
- **Skills Section**: Interactive 3D skill spheres with proficiency levels
- **Projects Section**: 3D project cards with detailed modals
- **Experience Section**: 3D timeline with work history and education
- **Contact Section**: Functional contact form with 3D background elements
- **Footer**: Social links and quick navigation

### 🔧 Technical Features
- **Fast Loading** with lazy-loaded components
- **SEO Optimized** with proper meta tags and semantic HTML
- **Accessible** with ARIA labels and keyboard navigation
- **Email Integration** using EmailJS for contact form
- **Form Validation** with real-time error checking
- **Smooth Scrolling** navigation between sections
- **Performance Optimized** 3D graphics

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server

### 3D Graphics & Animation
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers and abstractions

### Styling & Design
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Custom CSS** - Glass morphism and neon effects

### Additional Libraries
- **EmailJS** - Send emails directly from frontend
- **React Icons** - Popular icon library
- **Lucide React** - Beautiful & consistent icons
- **React Intersection Observer** - Trigger animations on scroll

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

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

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📧 Email Setup (EmailJS)

To enable the contact form functionality:

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com/)

2. **Create a new service** (Gmail, Outlook, etc.)

3. **Create an email template** with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_email}}` - Your email address

4. **Get your credentials**:
   - Service ID
   - Template ID
   - Public Key

5. **Update your environment variables** in `.env` file

## 🎨 Customization Guide

### Personal Information
Edit `src/data/portfolioData.js` to update:
- Personal details (name, title, bio, location)
- Social media links
- Skills and proficiency levels
- Project information
- Work experience and education
- Certifications

### Styling & Theme
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Animations**: Adjust timing and effects in component files
- **3D Elements**: Customize 3D objects in component files

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Import and add to `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── sections/        # Main sections (Hero, About, etc.)
│   ├── 3d/             # 3D components and scenes
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   ├── LoadingScreen.jsx # Loading animation
│   └── ThemeProvider.jsx # Theme context
├── data/               # Portfolio data and content
│   └── portfolioData.js # Main data file
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── assets/             # Static assets
├── App.jsx             # Main App component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔧 Development Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🚀 Deployment

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure environment variables in Netlify dashboard

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## 🎯 Performance Optimizations

- **Lazy Loading**: Components are loaded on demand
- **Code Splitting**: Automatic code splitting with Vite
- **3D Optimization**: Efficient 3D rendering with LOD and culling
- **Image Optimization**: WebP format with fallbacks
- **Caching**: Proper cache headers for static assets

## 🐛 Troubleshooting

### Common Issues

**3D scenes not loading:**
- Check browser WebGL support
- Update graphics drivers
- Try in a different browser

**Contact form not working:**
- Verify EmailJS credentials in `.env`
- Check console for error messages
- Ensure EmailJS service is active

**Slow performance:**
- Reduce 3D complexity in component files
- Enable hardware acceleration in browser
- Close unnecessary browser tabs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js Community** for amazing 3D graphics capabilities
- **React Three Fiber** team for excellent React integration
- **Tailwind CSS** for utility-first styling approach
- **Framer Motion** for smooth animations
- **Open Source Community** for inspiration and resources

## 📞 Support

If you have any questions or need help with setup:

- 📧 Email: alex@example.com
- 💬 GitHub Issues: [Create an issue](https://github.com/yourusername/3d-portfolio/issues)
- 🐦 Twitter: [@alexdev](https://twitter.com/alexdev)

---

Made with ❤️ and lots of ☕ by [Alex Developer](https://github.com/yourusername)+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
