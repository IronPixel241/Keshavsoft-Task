# RemixUI - Modern Bootstrap 5 Site with Vite

A modern, responsive website built with Bootstrap 5, Vite, and Nunjucks templating for fast development and live reload.

## Features

- ⚡ **Vite** - Lightning fast build tool with hot module replacement
- 🎨 **Bootstrap 5** - Modern, responsive CSS framework
- 📝 **Nunjucks Templates** - Template inheritance and reusable components
- 🌙 **Dark Mode Toggle** - Built-in theme switching
- 🔍 **Search Functionality** - Real-time search across content
- 📱 **Responsive Design** - Mobile-first approach
- ⚡ **Live Reload** - Instant updates during development

## Project Structure

```
├── src/
│   ├── index.html          # Home page with Nunjucks templates
│   ├── about.html          # About page
│   ├── contact.html        # Contact page
│   ├── css/
│   │   └── style.css       # Custom styles
│   ├── js/
│   │   └── main.js         # Interactive functionality
│   └── templates/
│       ├── base.njk        # Base template
│       └── partials/
│           ├── navbar.njk  # Navigation component
│           └── footer.njk  # Footer component
├── dist/                   # Build output (generated)
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd remixui-vite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000` with live reload enabled.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run clean` - Clean build directory

## Development Features

### Template System

The project uses a custom Nunjucks-like template system with Vite:

- **Template Inheritance**: All pages extend `base.njk`
- **Reusable Components**: Navbar and footer are partial templates
- **Variable Replacement**: Dynamic content with `{{ variable }}` syntax
- **Active Page Detection**: Automatic navigation highlighting

### Interactive Features

- **Theme Toggle**: Switch between light and dark modes
- **Search**: Real-time search across page content
- **Animations**: Smooth scroll animations and counters
- **Form Validation**: Contact form with validation and feedback
- **Responsive Design**: Mobile-first Bootstrap 5 layout

### CSS Features

- Custom animations and transitions
- Glass morphism effects
- Hover states and interactive elements
- Dark mode support
- Responsive grid system

## Building for Production

```bash
npm run build
```

This will create an optimized build in the `dist/` directory ready for deployment.

## Customization

### Adding New Pages

1. Create a new HTML file in `src/`
2. Use the Nunjucks template syntax:
```html
{% extends "templates/base.njk" %}

{% block title %}Page Title — {{ siteName }}{% endblock %}

{% block content %}
<!-- Your page content here -->
{% endblock %}
```

3. Add the page to `vite.config.js` in the `rollupOptions.input` section

### Modifying Styles

- Edit `src/css/style.css` for custom styles
- Bootstrap 5 classes are available throughout
- CSS custom properties for theming

### Adding JavaScript Functionality

- Edit `src/js/main.js` for interactive features
- Modular class-based architecture
- Event-driven functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For questions or issues, please open an issue on GitHub or contact the development team.
