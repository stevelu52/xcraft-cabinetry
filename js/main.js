document.addEventListener('DOMContentLoaded', function() {
    // Lightbox for product images
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.95);display:none;justify-content:center;align-items:center;z-index:99999;cursor:pointer;padding:20px;';
    lightbox.innerHTML = '<img id="lightbox-img" style="max-width:90%;max-height:90vh;object-fit:contain;border-radius:10px;">';
    document.body.appendChild(lightbox);

    function attachLightbox() {
        document.querySelectorAll('.product-image img').forEach(img => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                var lightboxImg = document.getElementById('lightbox-img');
                lightboxImg.src = this.src;
                lightbox.style.display = 'flex';
            });
        });
    }

    attachLightbox();

    lightbox.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    const filterTabs = document.querySelectorAll('.filter-tab');
    const productCards = document.querySelectorAll('.product-card');

    function applyFilter(filter) {
        productCards.forEach(card => {
            if (filter === 'all') {
                card.classList.remove('hidden');
            } else if (card.dataset.category === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            applyFilter(this.dataset.filter);
        });
    });

    // Navigation dropdown filter links
    const filterLinks = document.querySelectorAll('.filter-link');
    filterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const filter = this.dataset.filter;
            const currentPage = window.location.pathname.split('/').pop();
            
            if (currentPage === 'products.html') {
                e.preventDefault();
                filterTabs.forEach(t => {
                    if (t.dataset.filter === filter) {
                        filterTabs.forEach(x => x.classList.remove('active'));
                        t.classList.add('active');
                    }
                });
                applyFilter(filter);
            } else {
                this.href = 'products.html#' + filter;
            }
        });
    });

    // Show all products on page load (check for hash filter)
    function initFilter() {
        const hash = window.location.hash.replace('#', '');
        const allTab = document.querySelector('.filter-tab[data-filter="all"]');
        
        if (hash && hash !== 'products.html') {
            const targetTab = document.querySelector('.filter-tab[data-filter="' + hash + '"]');
            if (targetTab) {
                filterTabs.forEach(t => t.classList.remove('active'));
                targetTab.classList.add('active');
                applyFilter(hash);
                return;
            }
        }
        
        if (allTab) {
            allTab.click();
        }
    }
    initFilter();

    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            console.log('Quote request:', data);
            
            alert('Thank you for your quote request! We will contact you within 24 hours.');
            this.reset();
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventEach || e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            console.log('Contact form:', data);
            
            alert('Thank you for your message! We will respond within 24 hours.');
            this.reset();
        });
    }

    const dateInput = document.querySelector('input[type="date"]');
    if (dateInput) {
        const today = new Date();
        const minDate = new Date(today);
        minDate.setDate(today.getDate() + 1);
        dateInput.min = minDate.toISOString().split('T')[0];
    }

    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.12)';
            } else {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
            }
        }
    });

    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .testimonial-card, .category-card, .showcase-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    document.querySelectorAll('.feature-card, .testimonial-card, .category-card, .showcase-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});
