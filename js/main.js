// Main JavaScript file for RemixUI interactive functionality

// Theme Toggle Functionality
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById('themeToggle');
    this.body = document.body;
    this.init();
  }

  init() {
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    this.body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      this.themeToggle.classList.add('active');
    }
    
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
  }

  toggleTheme() {
    const currentTheme = this.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    this.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    this.themeToggle.classList.toggle('active');
  }
}

// Search Functionality
class SearchManager {
  constructor() {
    this.searchInput = document.getElementById('searchInput');
    if (this.searchInput) {
      this.init();
    }
  }

  init() {
    this.searchInput.addEventListener('input', (e) => this.handleSearch(e));
  }

  handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        card.style.display = 'block';
        card.classList.add('fade-in');
      } else {
        card.style.display = 'none';
      }
    });
  }
}

// Animation Manager
class AnimationManager {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    this.init();
  }

  init() {
    this.setupIntersectionObserver();
    this.setupCounterAnimations();
    this.setupProgressBarAnimations();
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, this.observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
      observer.observe(el);
    });
  }

  setupCounterAnimations() {
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  }

  animateCounter(counter) {
    const target = parseFloat(counter.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = target % 1 === 0 ? Math.floor(current) : current.toFixed(1);
    }, 16);
  }

  setupProgressBarAnimations() {
    const progressBars = document.querySelectorAll('.progress-bar');
    const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.style.width;
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
          progressObserver.unobserve(bar);
        }
      });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
      progressObserver.observe(bar);
    });
  }
}

// Form Manager
class FormManager {
  constructor() {
    this.contactForm = document.getElementById('contactForm');
    if (this.contactForm) {
      this.init();
    }
  }

  init() {
    this.setupFormValidation();
    this.setupCharacterCounter();
    this.setupFormSubmission();
  }

  setupFormValidation() {
    const formInputs = this.contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.validateField(input));
    });
  }

  validateField(field) {
    if (field.checkValidity()) {
      field.classList.add('is-valid');
      field.classList.remove('is-invalid');
    } else {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
    }
  }

  setupCharacterCounter() {
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    
    if (messageTextarea && charCount) {
      messageTextarea.addEventListener('input', function() {
        const length = this.value.length;
        charCount.textContent = length;
        
        if (length > 450) {
          charCount.style.color = '#dc3545';
        } else if (length > 400) {
          charCount.style.color = '#ffc107';
        } else {
          charCount.style.color = '#6c757d';
        }
      });
    }
  }

  setupFormSubmission() {
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn?.querySelector('.btn-text');
    const btnLoading = submitBtn?.querySelector('.btn-loading');

    this.contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();
      
      if (this.contactForm.checkValidity()) {
        // Show loading state
        btnText.classList.add('d-none');
        btnLoading.classList.remove('d-none');
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
          // Show success message
          NotificationManager.show('Success! Your message has been sent. We\'ll get back to you soon.', 'success');
          
          // Reset form
          this.contactForm.reset();
          this.contactForm.classList.remove('was-validated');
          document.getElementById('charCount').textContent = '0';
          document.getElementById('charCount').style.color = '#6c757d';
          
          // Reset button state
          btnText.classList.remove('d-none');
          btnLoading.classList.add('d-none');
          submitBtn.disabled = false;
        }, 2000);
      } else {
        NotificationManager.show('Please fill in all required fields correctly.', 'error');
      }
      
      this.contactForm.classList.add('was-validated');
    });
  }
}

// Notification Manager
class NotificationManager {
  static show(message, type) {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 5000);
  }
}

// Button Manager
class ButtonManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupLoadingStates();
    this.setupSmoothScrolling();
  }

  setupLoadingStates() {
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', function() {
        if (!this.classList.contains('btn-outline-secondary') && !this.classList.contains('btn-close')) {
          this.classList.add('loading');
          setTimeout(() => {
            this.classList.remove('loading');
          }, 1000);
        }
      });
    });
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Utility Functions
class Utils {
  static updateYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  static addPulseAnimation() {
    document.querySelectorAll('.pulse').forEach(element => {
      element.style.animationDelay = Math.random() * 2 + 's';
    });
  }
}

// Initialize all managers when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all managers
  new ThemeManager();
  new SearchManager();
  new AnimationManager();
  new FormManager();
  new ButtonManager();
  
  // Initialize utilities
  Utils.updateYear();
  Utils.addPulseAnimation();
});

// Export classes for potential external use
window.RemixUI = {
  ThemeManager,
  SearchManager,
  AnimationManager,
  FormManager,
  ButtonManager,
  NotificationManager,
  Utils
};
