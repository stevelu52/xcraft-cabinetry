document.addEventListener('DOMContentLoaded', function() {
    // Lightbox for all images
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = '<div class="lightbox-content"><span class="lightbox-close">&times;</span><img id="lightbox-img"></div>';
    lightbox.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.95);display:none;justify-content:center;align-items:center;z-index:999999;cursor:pointer;';
    document.body.appendChild(lightbox);

    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxContent = lightbox.querySelector('.lightbox-content');

    function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    }

    // Add lightbox to all clickable images
    function attachLightbox() {
        const selectors = ['.product-image img', '.showcase-item img', '.portfolio-card img', '.blog-image img', '.gallery-item img', '.granite-card img', '.marble-showcase .granite-card img', '.quartzite-showcase .granite-card img', '.porcelain-showcase .granite-card img', '.backsplash-showcase .granite-card img', '.vinyl-showcase .granite-card img', '.ceramic-showcase .granite-card img', '.pavers-showcase .granite-card img'];
        document.querySelectorAll(selectors.join(', ')).forEach(img => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                openLightbox(this.src);
            });
        });
    }

    attachLightbox();

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target === lightboxContent || e.target === lightboxImg) {
            closeLightbox();
        }
    });

    lightboxClose.addEventListener('click', function(e) {
        e.stopPropagation();
        closeLightbox();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
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

    // Handle footer product links on products page
    document.querySelectorAll('.footer-col a[href^="products.html#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const hash = this.getAttribute('href').split('#')[1];
            const targetTab = document.querySelector('.filter-tab[data-filter="' + hash + '"]');
            if (targetTab) {
                e.preventDefault();
                filterTabs.forEach(t => t.classList.remove('active'));
                targetTab.classList.add('active');
                applyFilter(hash);
                window.scrollTo(0, 0);
            }
        });
    });

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
        
        const brandsSection = document.querySelector('.brands-section');
        const graniteSection = document.querySelector('.granite-showcase');
        const quartzSection = document.querySelector('.quartz-showcase');
        const marbleSection = document.querySelector('.marble-showcase');
        const quartziteSection = document.querySelector('.quartzite-showcase');
        const porcelainSection = document.querySelector('.porcelain-showcase');
        const backsplashSection = document.querySelector('.backsplash-showcase');
        const vinylSection = document.querySelector('.vinyl-showcase');
        const spcSection = document.querySelector('.spc-showcase');
        const ceramicSection = document.querySelector('.ceramic-showcase');
        const paversSection = document.querySelector('.pavers-showcase');
        const flooringBrandsSection = document.querySelector('.flooring-brands');
        
        if (filter === 'countertops') {
            if (brandsSection) brandsSection.style.display = 'block';
            if (graniteSection) graniteSection.style.display = 'block';
            if (quartzSection) quartzSection.style.display = 'block';
            if (marbleSection) marbleSection.style.display = 'block';
            if (quartziteSection) quartziteSection.style.display = 'block';
            if (porcelainSection) porcelainSection.style.display = 'none';
            if (backsplashSection) backsplashSection.style.display = 'none';
            if (vinylSection) vinylSection.style.display = 'none';
            if (spcSection) spcSection.style.display = 'none';
            if (ceramicSection) ceramicSection.style.display = 'none';
            if (paversSection) paversSection.style.display = 'none';
            if (flooringBrandsSection) flooringBrandsSection.style.display = 'none';
        } else if (filter === 'flooring') {
            if (brandsSection) brandsSection.style.display = 'none';
            if (graniteSection) graniteSection.style.display = 'none';
            if (quartzSection) quartzSection.style.display = 'none';
            if (marbleSection) marbleSection.style.display = 'none';
            if (quartziteSection) quartziteSection.style.display = 'none';
            if (porcelainSection) porcelainSection.style.display = 'block';
            if (backsplashSection) backsplashSection.style.display = 'none';
            if (vinylSection) vinylSection.style.display = 'block';
            if (spcSection) spcSection.style.display = 'block';
            if (ceramicSection) ceramicSection.style.display = 'block';
            if (paversSection) paversSection.style.display = 'block';
            if (flooringBrandsSection) flooringBrandsSection.style.display = 'block';
        } else if (filter === 'backsplash') {
            if (brandsSection) brandsSection.style.display = 'none';
            if (graniteSection) graniteSection.style.display = 'none';
            if (quartzSection) quartzSection.style.display = 'none';
            if (marbleSection) marbleSection.style.display = 'none';
            if (quartziteSection) quartziteSection.style.display = 'none';
            if (porcelainSection) porcelainSection.style.display = 'none';
            if (backsplashSection) backsplashSection.style.display = 'block';
            if (vinylSection) vinylSection.style.display = 'none';
            if (spcSection) spcSection.style.display = 'none';
            if (ceramicSection) ceramicSection.style.display = 'none';
            if (paversSection) paversSection.style.display = 'none';
            if (flooringBrandsSection) flooringBrandsSection.style.display = 'none';
        } else if (filter === 'all') {
            if (brandsSection) brandsSection.style.display = 'block';
            if (graniteSection) graniteSection.style.display = 'block';
            if (quartzSection) quartzSection.style.display = 'block';
            if (marbleSection) marbleSection.style.display = 'block';
            if (quartziteSection) quartziteSection.style.display = 'block';
            if (porcelainSection) porcelainSection.style.display = 'block';
            if (backsplashSection) backsplashSection.style.display = 'block';
            if (vinylSection) vinylSection.style.display = 'block';
            if (spcSection) spcSection.style.display = 'block';
            if (ceramicSection) ceramicSection.style.display = 'block';
            if (paversSection) paversSection.style.display = 'block';
            if (flooringBrandsSection) flooringBrandsSection.style.display = 'block';
        } else {
            if (brandsSection) brandsSection.style.display = 'block';
            if (graniteSection) graniteSection.style.display = 'block';
            if (quartzSection) quartzSection.style.display = 'block';
            if (marbleSection) marbleSection.style.display = 'block';
            if (quartziteSection) quartziteSection.style.display = 'block';
            if (porcelainSection) porcelainSection.style.display = 'block';
            if (backsplashSection) backsplashSection.style.display = 'block';
            if (vinylSection) vinylSection.style.display = 'block';
            if (spcSection) spcSection.style.display = 'block';
            if (ceramicSection) ceramicSection.style.display = 'block';
            if (paversSection) paversSection.style.display = 'block';
            if (flooringBrandsSection) flooringBrandsSection.style.display = 'block';
        }
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
        const brandsSection = document.querySelector('.brands-section');
        const graniteSection = document.querySelector('.granite-showcase');
        const quartzSection = document.querySelector('.quartz-showcase');
        const marbleSection = document.querySelector('.marble-showcase');
        const quartziteSection = document.querySelector('.quartzite-showcase');
        const porcelainSection = document.querySelector('.porcelain-showcase');
        const backsplashSection = document.querySelector('.backsplash-showcase');
        const vinylSection = document.querySelector('.vinyl-showcase');
        const spcSection = document.querySelector('.spc-showcase');
        const ceramicSection = document.querySelector('.ceramic-showcase');
        const paversSection = document.querySelector('.pavers-showcase');
        const flooringBrandsSection = document.querySelector('.flooring-brands');
        
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

        // Hide brands, granite, quartz, marble, and quartzite by default when page loads
        if (brandsSection) {
            brandsSection.style.display = 'none';
        }
        if (graniteSection) {
            graniteSection.style.display = 'none';
        }
        if (quartzSection) {
            quartzSection.style.display = 'none';
        }
        if (marbleSection) {
            marbleSection.style.display = 'none';
        }
        if (quartziteSection) {
            quartziteSection.style.display = 'none';
        }
        if (porcelainSection) {
            porcelainSection.style.display = 'none';
        }
        if (backsplashSection) {
            backsplashSection.style.display = 'none';
        }
        if (vinylSection) {
            vinylSection.style.display = 'none';
        }
        if (spcSection) {
            spcSection.style.display = 'none';
        }
        if (ceramicSection) {
            ceramicSection.style.display = 'none';
        }
        if (paversSection) {
            paversSection.style.display = 'none';
        }
        if (flooringBrandsSection) {
            flooringBrandsSection.style.display = 'none';
        }
    }
    initFilter();

    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = quoteForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            try {
                const response = await fetch('https://formspree.io/f/xojynajl', {
                    method: 'POST',
                    body: new FormData(quoteForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    alert('Thank you for your quote request! We will contact you within 24 hours.');
                    quoteForm.reset();
                } else {
                    alert('Something went wrong. Please try again or email us directly.');
                }
            } catch (error) {
                alert('Something went wrong. Please try again or email us directly.');
            }
            
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            try {
                const response = await fetch('https://formspree.io/f/xojynajl', {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    alert('Thank you for your message! We will respond within 24 hours.');
                    contactForm.reset();
                } else {
                    alert('Something went wrong. Please try again or email us directly.');
                }
            } catch (error) {
                alert('Something went wrong. Please try again or email us directly.');
            }
            
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
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
