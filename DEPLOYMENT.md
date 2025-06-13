# Deployment Instructions for 3D Portfolio

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy this React application:

### Option 1: Deploy via Vercel CLI
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. In your project directory, run:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Link to existing project: No
   - Project name: 3d-portfolio (or your preferred name)
   - Directory: ./ (default)
   - Build command: npm run build
   - Output directory: dist

4. Your site will be deployed and you'll get a live URL!

### Option 2: Deploy via Vercel Website
1. Visit [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

## 🌐 Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Visit [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder to deploy
4. Or connect your GitHub repository for automatic deployments

## 📧 Configure Email Functionality

To enable the contact form:

1. Go to [EmailJS](https://www.emailjs.com/)
2. Create an account and set up a service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Create a `.env` file in your project root:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🛠️ Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:5173

## 🎨 Customization

Edit these files to personalize your portfolio:

- `src/data/portfolioData.js` - All your personal information
- `src/components/sections/` - Individual sections
- `tailwind.config.js` - Colors and theme
- `index.html` - Meta tags and title

## 🐛 Troubleshooting

### Build Issues
- Make sure all dependencies are installed: `npm install`
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version (recommended: 16+)

### 3D Elements Not Loading
- Check browser WebGL support
- Update graphics drivers
- Try in Chrome/Firefox

### Performance Issues
- Reduce 3D complexity in component files
- Enable hardware acceleration in browser
- Close unnecessary applications

## 📱 Mobile Optimization

The portfolio is fully responsive, but for best mobile performance:
- Test on actual devices
- Use Chrome DevTools mobile simulation
- Check loading times on slower connections

## 🔒 Security

- Never commit `.env` files with real API keys
- Use environment variables for sensitive data
- Enable HTTPS on your deployed site

## 📈 Analytics (Optional)

Add Google Analytics:
1. Get GA4 tracking ID
2. Add to `.env`: `VITE_GA_TRACKING_ID=G-XXXXXXXX`
3. Add tracking code to `index.html`

---

Your 3D portfolio is ready for deployment! 🎉
