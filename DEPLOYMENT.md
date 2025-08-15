# 🚀 Deploy to Netlify

Your Vite + Nunjucks project is ready for deployment! Here are the different ways to deploy to Netlify.

## 📋 Prerequisites

1. **GitHub/GitLab/Bitbucket account** (for automatic deployments)
2. **Netlify account** (free at [netlify.com](https://netlify.com))

## 🎯 Method 1: Deploy via Git (Recommended)

### Step 1: Push to Git Repository
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit with Vite + Nunjucks setup"

# Push to your repository (GitHub/GitLab/Bitbucket)
git remote add origin <your-repository-url>
git push -u origin main
```

### Step 2: Connect to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click **"New site from Git"**
3. Choose your Git provider (GitHub/GitLab/Bitbucket)
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**

### Step 3: Automatic Deployments
- Every push to your main branch will trigger a new deployment
- Netlify will automatically run `npm run build` and deploy the `dist` folder

## 🎯 Method 2: Manual Deploy (Drag & Drop)

### Step 1: Build Locally
```bash
npm run build
```

### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder to the deploy area
3. Your site will be live instantly!

## 🎯 Method 3: Netlify CLI

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login and Deploy
```bash
# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

## ⚙️ Configuration Files

### `netlify.toml` (Already Created)
This file tells Netlify how to build and serve your site:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirect rules for SPA behavior
- Performance headers and caching

### Environment Variables (Optional)
If you need environment variables, add them in Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add variables like:
   - `NODE_VERSION=18`
   - `NPM_FLAGS=--legacy-peer-deps` (if needed)

## 🔧 Build Process

When you deploy, Netlify will:

1. **Install dependencies**: `npm install`
2. **Build the project**: `npm run build`
3. **Process templates**: Vite processes Nunjucks templates
4. **Optimize assets**: CSS/JS are minified and optimized
5. **Deploy**: Files from `dist/` are served

## 📁 What Gets Deployed

The `dist/` folder contains:
```
dist/
├── index.html          # Home page (processed)
├── about.html          # About page (processed)
├── contact.html        # Contact page (processed)
└── assets/
    ├── style-*.css     # Optimized CSS
    └── main-*.js       # Optimized JavaScript
```

## 🌐 Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Add your custom domain
3. Configure DNS settings as instructed
4. Enable HTTPS (automatic with Netlify)

## 📊 Performance Features

Your deployment includes:
- ✅ **CDN**: Global content delivery network
- ✅ **HTTPS**: Automatic SSL certificates
- ✅ **Caching**: Optimized asset caching
- ✅ **Compression**: Gzip compression
- ✅ **Minification**: CSS/JS are minified

## 🔄 Continuous Deployment

Once connected to Git:
- ✅ **Automatic builds** on every push
- ✅ **Preview deployments** for pull requests
- ✅ **Rollback** to previous versions
- ✅ **Branch deployments** for testing

## 🚨 Troubleshooting

### Build Fails
1. Check build logs in Netlify dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility

### Assets Not Loading
1. Check file paths in `vite.config.js`
2. Ensure assets are in the `dist/` folder
3. Verify `netlify.toml` configuration

### 404 Errors
1. Check redirect rules in `netlify.toml`
2. Ensure all pages are built in `dist/`
3. Verify file names match exactly

## 📈 Analytics & Monitoring

Netlify provides:
- 📊 **Analytics**: Page views, visitors
- 🚨 **Error tracking**: 404s, build failures
- ⚡ **Performance**: Core Web Vitals
- 🔍 **Forms**: Contact form submissions

## 🎉 Success!

Once deployed, you'll get:
- 🌐 **Live URL**: `https://your-site-name.netlify.app`
- 📱 **Mobile optimized**: Responsive design
- ⚡ **Fast loading**: CDN + optimization
- 🔒 **Secure**: HTTPS by default

---

**Your Vite + Nunjucks site is now live on Netlify! 🚀**
