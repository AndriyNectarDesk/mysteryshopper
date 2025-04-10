/**
 * Ottawa Mystery Shoppers - Main JavaScript
 * Handles responsive navigation, form submission, and testimonial slider
 */

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    const contactForm = document.getElementById('contactForm');
    const testimonials = document.querySelectorAll('.testimonial');
    
    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            // Simple form validation
            let isValid = true;
            const requiredFields = ['name', 'email', 'interest', 'message'];
            
            requiredFields.forEach(field => {
                const input = document.getElementById(field);
                const value = input.value.trim();
                
                if (!value) {
                    isValid = false;
                    showError(input, 'This field is required');
                } else {
                    removeError(input);
                }
                
                // Email validation
                if (field === 'email' && value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        isValid = false;
                        showError(input, 'Please enter a valid email address');
                    }
                }
            });
            
            if (isValid) {
                // In a real application, you would send this data to a server
                console.log('Form submitted:', formDataObj);
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                
                // Replace form with success message
                contactForm.innerHTML = '';
                contactForm.appendChild(successMessage);
                
                // Or reset the form
                // this.reset();
                // showAlert('Thank you for your message! We will get back to you soon.', 'success');
            }
        });
        
        // Helper functions for form validation
        function showError(input, message) {
            const formGroup = input.closest('.form-group');
            let errorElement = formGroup.querySelector('.error-message');
            
            if (!errorElement) {
                errorElement = document.createElement('div');
                errorElement.className = 'error-message';
                formGroup.appendChild(errorElement);
            }
            
            errorElement.textContent = message;
            formGroup.classList.add('error');
        }
        
        function removeError(input) {
            const formGroup = input.closest('.form-group');
            const errorElement = formGroup.querySelector('.error-message');
            
            if (errorElement) {
                errorElement.remove();
            }
            
            formGroup.classList.remove('error');
        }
    }
    
    // Basic testimonial slider functionality
    if (testimonials.length > 0) {
        let currentTestimonial = 0;
        
        // If on mobile, show only one testimonial at a time
        function updateTestimonialVisibility() {
            if (window.innerWidth <= 768) {
                testimonials.forEach((testimonial, index) => {
                    testimonial.style.display = index === currentTestimonial ? 'block' : 'none';
                });
                
                // Create navigation dots if they don't exist
                let dotsContainer = document.querySelector('.testimonial-dots');
                if (!dotsContainer) {
                    dotsContainer = document.createElement('div');
                    dotsContainer.className = 'testimonial-dots';
                    testimonials[0].parentNode.appendChild(dotsContainer);
                    
                    testimonials.forEach((_, index) => {
                        const dot = document.createElement('span');
                        dot.className = 'dot';
                        dot.addEventListener('click', () => {
                            currentTestimonial = index;
                            updateTestimonialVisibility();
                        });
                        dotsContainer.appendChild(dot);
                    });
                }
                
                // Update active dot
                const dots = document.querySelectorAll('.dot');
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentTestimonial);
                });
            } else {
                // On desktop, show all testimonials
                testimonials.forEach(testimonial => {
                    testimonial.style.display = 'block';
                });
                
                // Remove dots if they exist
                const dotsContainer = document.querySelector('.testimonial-dots');
                if (dotsContainer) {
                    dotsContainer.remove();
                }
            }
        }
        
        // Initialize testimonial display
        updateTestimonialVisibility();
        
        // Update on window resize
        window.addEventListener('resize', updateTestimonialVisibility);
        
        // Auto rotate testimonials on mobile
        setInterval(() => {
            if (window.innerWidth <= 768) {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                updateTestimonialVisibility();
            }
        }, 5000);
    }
    
    // Add CSS styles for error and success messages
    const style = document.createElement('style');
    style.textContent = `
        .error-message {
            color: #e74c3c;
            font-size: 0.85rem;
            margin-top: 5px;
        }
        
        .form-group.error input,
        .form-group.error select,
        .form-group.error textarea {
            border-color: #e74c3c;
        }
        
        .success-message {
            background-color: #2ecc71;
            color: white;
            padding: 20px;
            border-radius: 5px;
            text-align: center;
            font-weight: 500;
        }
        
        .testimonial-dots {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
        
        .dot {
            width: 12px;
            height: 12px;
            background-color: #ddd;
            border-radius: 50%;
            margin: 0 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        
        .dot.active {
            background-color: var(--secondary-color);
        }
    `;
    document.head.appendChild(style);
    
    // Add scroll animation for elements
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .process-card, .testimonial, .stat-box');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Add animation class
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        .service-card, .process-card, .testimonial, .stat-box {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .service-card.animate, .process-card.animate, .testimonial.animate, .stat-box.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(animationStyle);
    
    // Initial animation check
    animateOnScroll();
    
    // Check for animations on scroll
    window.addEventListener('scroll', animateOnScroll);
}); 