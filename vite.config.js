import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        contact: resolve(__dirname, 'src/contact.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  plugins: [
    {
      name: 'nunjucks-transform',
      transformIndexHtml: {
        order: 'pre',
        handler(html, { filename }) {
          // Simple Nunjucks-like variable replacement
          const variables = {
            siteName: 'RemixUI',
            siteDescription: 'Modern Bootstrap 5 Site',
            currentYear: new Date().getFullYear(),
            page: filename.includes('index.html') ? 'home' : 
                  filename.includes('about.html') ? 'about' : 
                  filename.includes('contact.html') ? 'contact' : 'home'
          };

          // Replace variables in the HTML
          let processedHtml = html;
          Object.entries(variables).forEach(([key, value]) => {
            const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
            processedHtml = processedHtml.replace(regex, value);
          });

          // Handle template inheritance
          if (processedHtml.includes('{% extends')) {
            // Extract base template content
            const baseTemplate = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ title }}</title>
    <link rel="preconnect" href="https://cdn.jsdelivr.net">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div class="container">
        <a class="navbar-brand fw-bold" href="/">Remix<span class="text-primary">UI</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample" aria-controls="navbarsExample" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarsExample">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link ${variables.page === 'home' ? 'active' : ''}" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${variables.page === 'about' ? 'active' : ''}" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${variables.page === 'contact' ? 'active' : ''}" href="/contact">Contact</a>
            </li>
          </ul>
          
          <!-- Search Bar -->
          <div class="search-container mx-3">
            <input type="text" class="form-control search-input" placeholder="Search..." id="searchInput">
            <button class="search-btn" type="button">
              <i class="fas fa-search"></i>
            </button>
          </div>
          
          <!-- Theme Toggle -->
          <div class="theme-toggle mx-2" id="themeToggle" title="Toggle Dark Mode">
            <i class="fas fa-sun" style="position: absolute; top: 2px; left: 5px; font-size: 12px; color: #ffc107;"></i>
            <i class="fas fa-moon" style="position: absolute; top: 2px; right: 5px; font-size: 12px; color: #6c757d;"></i>
          </div>
          
          <a href="/contact" class="btn btn-primary ms-lg-3">Get Started</a>
        </div>
      </div>
    </nav>

    {{ content }}

    <footer class="border-top mt-5">
      <div class="container py-4">
        <div class="row g-4 align-items-center">
          <div class="col-md-6">
            <p class="mb-0 text-muted">© ${variables.currentYear} RemixUI — Built with Bootstrap 5.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <a href="/about" class="text-decoration-none me-3">About</a>
            <a href="/contact" class="text-decoration-none">Contact</a>
          </div>
        </div>
      </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/js/main.js"></script>
  </body>
</html>`;

            // Extract content block
            const contentMatch = processedHtml.match(/{% block content %}([\s\S]*?){% endblock %}/);
            const titleMatch = processedHtml.match(/{% block title %}([\s\S]*?){% endblock %}/);
            
            if (contentMatch && titleMatch) {
              const content = contentMatch[1];
              const title = titleMatch[1].replace(/\{\{\s*siteName\s*\}\}/g, variables.siteName);
              
              processedHtml = baseTemplate
                .replace('{{ title }}', title)
                .replace('{{ content }}', content);
            }
          }

          return processedHtml;
        }
      }
    }
  ]
})
