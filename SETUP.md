# Setup Guide: Vite + Nunjucks Migration

## What's Changed

Your project has been successfully migrated from a static HTML setup to a modern Vite + Nunjucks development environment with the following improvements:

### ✅ New Features
- **Vite Development Server** - Lightning fast with hot module replacement
- **Nunjucks Templates** - Template inheritance and reusable components
- **Live Reload** - Instant updates as you edit files
- **Modern Build Process** - Optimized production builds
- **Better Development Experience** - Faster development workflow

### 📁 New Project Structure
```
├── src/                    # Source files (NEW)
│   ├── index.html         # Home page with Nunjucks
│   ├── about.html         # About page with Nunjucks
│   ├── contact.html       # Contact page with Nunjucks
│   ├── css/
│   │   └── style.css      # Your existing styles
│   ├── js/
│   │   └── main.js        # Your existing JavaScript
│   └── templates/         # Nunjucks templates (NEW)
│       ├── base.njk       # Base template
│       └── partials/      # Reusable components
├── dist/                  # Build output (generated)
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # Updated documentation
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Your site will be available at `http://localhost:3000` with live reload!

### 3. Available Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run clean` - Clean build directory

## Template System

### How Templates Work
- All pages now use Nunjucks template inheritance
- Common elements (navbar, footer) are reusable components
- Variables are automatically replaced (e.g., `{{ siteName }}`)

### Example Template Structure
```html
{% extends "templates/base.njk" %}

{% block title %}Page Title — {{ siteName }}{% endblock %}

{% block content %}
<!-- Your page content here -->
{% endblock %}
```

### Global Variables Available
- `{{ siteName }}` - "RemixUI"
- `{{ siteDescription }}` - "Modern Bootstrap 5 Site"
- `{{ currentYear }}` - Current year (auto-updated)

## Development Workflow

### Before (Static HTML)
1. Edit HTML files directly
2. Refresh browser manually
3. No build process

### After (Vite + Nunjucks)
1. Edit files in `src/` directory
2. Changes appear instantly in browser
3. Use `npm run build` for production

## File Locations

### Your Existing Files
- ✅ CSS: `src/css/style.css` (moved from `css/style.css`)
- ✅ JavaScript: `src/js/main.js` (moved from `js/js/main.js`)
- ✅ HTML: Converted to Nunjucks templates in `src/`

### New Files
- 📝 `package.json` - Project dependencies and scripts
- ⚙️ `vite.config.js` - Vite configuration
- 📄 `src/templates/` - Nunjucks template files

## Benefits

### 🚀 Performance
- Faster development server
- Hot module replacement
- Optimized production builds

### 🛠️ Developer Experience
- Live reload on file changes
- Better error messages
- Modern development tools

### 📦 Maintainability
- Template inheritance reduces code duplication
- Reusable components
- Better project structure

## Migration Notes

### What's Preserved
- ✅ All your existing CSS styles
- ✅ All your JavaScript functionality
- ✅ All your HTML content and structure
- ✅ All your interactive features

### What's Enhanced
- 🔄 Template system for better maintainability
- ⚡ Faster development workflow
- 🎯 Better project organization
- 📱 Improved build process

## Next Steps

1. **Start developing**: Run `npm run dev` and start editing files
2. **Explore templates**: Check out the Nunjucks template files
3. **Add new pages**: Use the template inheritance system
4. **Customize**: Modify the Vite configuration as needed

## Support

If you encounter any issues:
1. Check the console for error messages
2. Ensure all dependencies are installed (`npm install`)
3. Verify file paths in `vite.config.js`
4. Check the README.md for detailed documentation

---

**🎉 Congratulations! Your project is now using modern development tools with Vite and Nunjucks!**
