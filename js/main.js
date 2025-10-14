// Portfolio Website - Main JavaScript

// Projects Data Structure
const projects = [
    {
        id: 1,
        title: "SeamGPT: 3D Mesh Cutting System",
        description: "Implemented complete SeamGPT architecture from scratch for predictive surface cutting and UV unwrapping. Built autoregressive sequence generation system with point cloud encoder, HourGlass decoder, and strategic sampling of 61,440 points for optimal seam prediction.",
        image: "assets/images/projects/project1.jpg",
        technologies: ["Python", "PyTorch", "Point Cloud", "Transformers", "3D Graphics"],
        links: {
            github: "https://github.com/satyam-fp",
            demo: "#"
        },
        featured: true
    },
    {
        id: 2,
        title: "VLM Fine-tuning for Procedural Textures",
        description: "Fine-tuned Vision Language Models (8B parameter Llava_hf and MiMo-VL-7B-SFT) using LoRA for accurate procedural texture generation in Blender. Conducted scaling law experiments and showcased results to multiple studios.",
        image: "assets/images/projects/project2.jpg",
        technologies: ["Python", "PyTorch", "LoRA", "VLM", "Blender", "Transformers"],
        links: {
            github: "https://github.com/satyam-fp",
            demo: "#"
        },
        featured: true
    },
    {
        id: 3,
        title: "AI-Powered Blender Fork",
        description: "Built Blender fork to enable AI features in 3D editor software, creating a Cursor-like experience for 3D workflows. Developed AI agents for procedural texture generation using Blender's node-based interface.",
        image: "assets/images/projects/project3.jpg",
        technologies: ["Python", "Blender", "AI Agents", "Node Systems", "3D Graphics"],
        links: {
            github: "https://github.com/satyam-fp",
            demo: "#"
        },
        featured: true
    },
    {
        id: 4,
        title: "Business Rule Engine (BRE)",
        description: "Engineered a comprehensive suite of Business Rule Engines to automate loan approval workflows at Leo1, enhancing credit underwriting efficiency and cutting manual work by 5x. Built modular framework for real-time database configurations.",
        image: "assets/images/projects/project4.jpg",
        technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "Microservices"],
        links: {
            github: "https://github.com/satyam-fp",
            demo: "#"
        },
        featured: false
    },
    {
        id: 5,
        title: "Loan Management System Integration",
        description: "Integrated third-party Loan Management System (LMS) at Leo1, cutting post-disbursal loan processing time by 50% and reducing system errors by 80%. Streamlined data integration using webhooks, callbacks, and cron jobs.",
        image: "assets/images/projects/project5.jpg",
        technologies: ["Python", "Django", "PostgreSQL", "RabbitMQ", "AWS"],
        links: {
            github: "https://github.com/satyam-fp",
            demo: "#"
        },
        featured: false
    },
    {
        id: 6,
        title: "Payment Unification Microservice",
        description: "Developed high-performance payment unification microservice capable of processing millions of transactions daily. Implemented distributed system to notify all interconnected services, streamlining payment requirements.",
        image: "assets/images/projects/project6.jpg",
        technologies: ["Python", "FastAPI", "MongoDB", "RabbitMQ", "Microservices"],
        links: {
            github: "https://github.com/satyam-fp",
            demo: "#"
        },
        featured: false
    },
    {
        id: 7,
        title: "Gamified Loyalty Program",
        description: "Devised and implemented a gamified loyalty program for Leo1's education platform, increasing user engagement by 35% and user retention by 28%. Built engaging user interfaces with ReactJS.",
        image: "assets/images/projects/project4.jpg",
        technologies: ["Python", "Django", "ReactJS", "PostgreSQL", "Redis"],
        links: {
            github: "https://github.com/satyam-fp",
            demo: "#"
        },
        featured: false
    },
    {
        id: 5,
        title: "Borrower Onboarding System",
        description: "Revamped borrower onboarding backend by developing multiple RESTful APIs, reducing onboarding time by 15% and improving overall efficiency. Created intuitive interfaces for 20,000+ active users monthly.",
        image: "assets/images/projects/project5.jpg",
        technologies: ["Python", "FastAPI", "ReactJS", "PostgreSQL", "AWS"],
        links: {
            github: "https://github.com/satyam-fp",
            demo: "#"
        },
        featured: false
    },
    {
        id: 6,
        title: "System Performance Optimization",
        description: "Leveraged advanced Python concepts (decorators, middleware, multi-threading, multiprocessing) to improve system scalability by 20%. Analyzed legacy system inefficiencies, reducing service escalations by 30%.",
        image: "assets/images/projects/project6.jpg",
        technologies: ["Python", "FastAPI", "Docker", "AWS", "PostgreSQL"],
        links: {
            github: "https://github.com/satyam-fp",
            demo: "#"
        },
        featured: false
    }
];

// Readings Data Structure
const readings = [
    {
        id: 1,
        title: "Autoregressive 3D Mesh Cutting for UV Unwrapping",
        paper: "SeamGPT: Autoregressive Mesh Cutting for UV Unwrapping",
        authors: "Research Team",
        date: "2025-01-20",
        category: "3D Graphics",
        summary: "Implemented complete architecture from scratch for predictive surface cutting. SeamGPT formulates 3D mesh cutting as autoregressive sequence generation, enabling semantically meaningful surface decomposition for UV unwrapping.",
        findings: [
            "Strategic point cloud sampling (61,440 points on vertices/edges) ensures valid cutting locations",
            "Coordinate quantization into 1024 discrete bins transforms continuous regression into discrete classification",
            "HourGlass decoder architecture with multi-level processing handles sequence dependencies effectively",
            "yzx geometric ordering provides training consistency and deterministic sequences"
        ],
        tags: ["3D Graphics", "Transformers", "UV Unwrapping", "Point Cloud", "Autoregressive"],
        link: "#"
    },
    {
        id: 2,
        title: "Vision Language Models for Procedural Textures",
        paper: "VLMaterial: Vision-Language Models for Material Generation",
        authors: "Open Source Community",
        date: "2025-01-15",
        category: "Computer Vision",
        summary: "Explored and fine-tuned VLMs for generating accurate procedural textures in Blender. Conducted LoRA fine-tuning of 8B parameter models including Llava_hf and MiMo-VL-7B-SFT on custom datasets.",
        findings: [
            "LoRA fine-tuning enables efficient adaptation of large VLMs with minimal parameters",
            "Scaling law experiments reveal optimal dataset sizes for texture generation tasks",
            "Vision-language alignment crucial for understanding node-based procedural workflows",
            "Multi-scale dataset training improves generalization across different texture complexities"
        ],
        tags: ["VLM", "LoRA", "Fine-tuning", "Procedural Textures", "Blender"],
        link: "#"
    },
    {
        id: 3,
        title: "Attention Mechanisms in Neural Networks",
        paper: "Attention Is All You Need",
        authors: "Vaswani et al.",
        date: "2024-12-10",
        category: "NLP",
        summary: "Deep dive into the transformer architecture and self-attention mechanisms that revolutionized natural language processing and form the foundation of modern VLMs.",
        findings: [
            "Self-attention allows models to weigh the importance of different parts of the input",
            "Positional encoding is crucial for maintaining sequence information",
            "Multi-head attention enables the model to focus on different representation subspaces"
        ],
        tags: ["Transformers", "Attention", "Deep Learning", "NLP"],
        link: "https://arxiv.org/abs/1706.03762"
    },
    {
        id: 4,
        title: "Point Cloud Processing with Transformers",
        paper: "Point Cloud Transformers for 3D Understanding",
        authors: "Various Researchers",
        date: "2024-12-05",
        category: "3D Graphics",
        summary: "Understanding how transformer architectures can be applied to point cloud data for 3D shape understanding, crucial for SeamGPT's shape encoder implementation.",
        findings: [
            "Cross-attention and self-attention layers effectively process unordered point sets",
            "Strategic sampling strategies improve computational efficiency while preserving geometric features",
            "Point cloud transformers can compress spatial information into latent embeddings",
            "Multi-scale processing captures both local and global geometric patterns"
        ],
        tags: ["Point Cloud", "Transformers", "3D Understanding", "Shape Encoding"],
        link: "#"
    },
    {
        id: 5,
        title: "LoRA: Low-Rank Adaptation of Large Models",
        paper: "LoRA: Low-Rank Adaptation of Large Language Models",
        authors: "Hu et al.",
        date: "2024-11-20",
        category: "ML",
        summary: "Studied efficient fine-tuning techniques for large models. Applied LoRA to fine-tune 8B parameter VLMs for procedural texture generation with minimal computational overhead.",
        findings: [
            "Low-rank decomposition enables parameter-efficient fine-tuning of billion-parameter models",
            "LoRA adapters can be trained with significantly less memory than full fine-tuning",
            "Rank selection impacts model adaptation quality and computational efficiency",
            "Multiple LoRA adapters can be combined for multi-task scenarios"
        ],
        tags: ["LoRA", "Fine-tuning", "Parameter Efficiency", "Large Models"],
        link: "https://arxiv.org/abs/2106.09685"
    },
    {
        id: 6,
        title: "Neural Radiance Fields for 3D Reconstruction",
        paper: "NeRF: Representing Scenes as Neural Radiance Fields",
        authors: "Mildenhall et al.",
        date: "2024-11-10",
        category: "3D Graphics",
        summary: "Understanding how neural networks can represent complex 3D scenes as continuous functions, enabling novel view synthesis from sparse inputs.",
        findings: [
            "Implicit neural representations can capture fine geometric details",
            "Volume rendering with neural networks produces photorealistic results",
            "Positional encoding is essential for learning high-frequency details"
        ],
        tags: ["NeRF", "3D Reconstruction", "Neural Rendering", "Computer Graphics"],
        link: "https://arxiv.org/abs/2003.08934"
    }
];

// Skills Data Structure
const skills = {
    "Machine Learning & AI": [
        { name: "PyTorch", icon: "fas fa-fire" },
        { name: "Vision Language Models", icon: "fas fa-brain" },
        { name: "LoRA Fine-tuning", icon: "fas fa-sliders-h" },
        { name: "Transformers", icon: "fas fa-project-diagram" },
        { name: "Point Cloud Processing", icon: "fas fa-cube" },
        { name: "Computer Vision", icon: "fas fa-eye" }
    ],
    "Backend Development": [
        { name: "Python", icon: "fab fa-python" },
        { name: "FastAPI", icon: "fas fa-bolt" },
        { name: "Django", icon: "fas fa-server" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "Java", icon: "fab fa-java" },
        { name: "REST APIs", icon: "fas fa-exchange-alt" }
    ],
    "3D Graphics & Tools": [
        { name: "Blender", icon: "fas fa-cube" },
        { name: "3D Modeling", icon: "fas fa-cubes" },
        { name: "Procedural Textures", icon: "fas fa-palette" },
        { name: "UV Unwrapping", icon: "fas fa-map" },
        { name: "Node Systems", icon: "fas fa-sitemap" }
    ],
    "Frontend Development": [
        { name: "ReactJS", icon: "fab fa-react" },
        { name: "React Native", icon: "fab fa-react" },
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js" }
    ],
    "Databases": [
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "MongoDB", icon: "fas fa-database" },
        { name: "MySQL", icon: "fas fa-database" }
    ],
    "Cloud & DevOps": [
        { name: "AWS", icon: "fab fa-aws" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "Microservices", icon: "fas fa-cubes" },
        { name: "RabbitMQ", icon: "fas fa-stream" },
        { name: "Celery", icon: "fas fa-tasks" },
        { name: "Postman", icon: "fas fa-paper-plane" }
    ]
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website initialized');
    
    // Initialize all components
    initHeroAnimations();
    initSmoothScroll();
    initBackToTop();
    initActiveSectionHighlight();
    initMobileMenu();
    initAboutAnimations();
    initExperienceAnimations();
    renderSkills();
    renderProjects();
    renderReadings();
});

/**
 * Initialize hero section animations on page load
 */
function initHeroAnimations() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        // Add loaded class to trigger animations
        // Small delay to ensure smooth animation start
        setTimeout(() => {
            hero.classList.add('loaded');
        }, 100);
        
        // Optional: Add parallax effect on scroll
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            
            if (heroContent && scrolled < window.innerHeight) {
                // Subtle parallax effect
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
            }
        });
    }
}

/**
 * Initialize smooth scrolling for navigation links (including footer links)
 * Includes fallback for browsers that don't support smooth scrolling
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    // Check if browser supports smooth scrolling
    const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                if (supportsNativeSmoothScroll) {
                    // Use native smooth scrolling
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    // Fallback for browsers without smooth scroll support
                    smoothScrollTo(targetSection.offsetTop, 600);
                }
                
                // Close mobile menu if open
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');
                if (hamburger && navMenu && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });
}

/**
 * Smooth scroll fallback for browsers that don't support native smooth scrolling
 * @param {number} targetPosition - Target scroll position
 * @param {number} duration - Animation duration in milliseconds
 */
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    // Easing function for smooth animation
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

/**
 * Initialize back to top button functionality
 */
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        // Check if browser supports smooth scrolling
        const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // Scroll to top on click
        backToTopButton.addEventListener('click', function() {
            if (supportsNativeSmoothScroll) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                // Fallback for browsers without smooth scroll support
                smoothScrollTo(0, 600);
            }
        });
    }
}

/**
 * Initialize active section highlighting using Intersection Observer
 */
function initActiveSectionHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Create an Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the middle of viewport
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to corresponding nav link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
}

/**
 * Initialize mobile menu toggle functionality
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!hamburger || !navMenu) return;
    
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        const isActive = hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Update ARIA attribute for accessibility
        hamburger.setAttribute('aria-expanded', isActive);
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            // Focus first menu item for keyboard navigation
            const firstLink = navMenu.querySelector('.nav-link');
            if (firstLink) {
                setTimeout(() => firstLink.focus(), 100);
            }
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Handle keyboard navigation (Escape key to close menu)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            hamburger.focus(); // Return focus to hamburger button
        }
    });
    
    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
}

/**
 * Initialize scroll-triggered animations for about section
 */
function initAboutAnimations() {
    const aboutImage = document.querySelector('.about-image');
    const aboutTextElements = document.querySelectorAll('.about-text > *');
    const aboutDetailsParas = document.querySelectorAll('.about-details p');
    
    // Combine all elements to animate
    const elementsToAnimate = [aboutImage, ...aboutTextElements];
    
    // Create Intersection Observer for about section
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of element is visible
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animate class to trigger animation
                entry.target.classList.add('animate');
                
                // Optional: Stop observing after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements
    elementsToAnimate.forEach(element => {
        if (element) {
            observer.observe(element);
        }
    });
    
    // Add staggered animation to about-details paragraphs
    aboutDetailsParas.forEach((para, index) => {
        para.style.opacity = '0';
        para.style.transform = 'translateY(20px)';
        para.style.transition = `opacity 0.6s ease ${0.4 + (index * 0.1)}s, transform 0.6s ease ${0.4 + (index * 0.1)}s`;
    });
    
    // Observe about-details container
    const aboutDetails = document.querySelector('.about-details');
    if (aboutDetails) {
        const detailsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutDetailsParas.forEach(para => {
                        para.style.opacity = '1';
                        para.style.transform = 'translateY(0)';
                    });
                    detailsObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        detailsObserver.observe(aboutDetails);
    }
}

/**
 * Initialize scroll-triggered animations for experience section
 */
function initExperienceAnimations() {
    const experienceItems = document.querySelectorAll('.experience-item');
    
    if (experienceItems.length === 0) return;
    
    // Create Intersection Observer for experience items
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of element is visible
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animate class to trigger animation
                entry.target.classList.add('animate');
                
                // Stop observing after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all experience items with staggered delay
    experienceItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(item);
    });
}

/**
 * Render skills section dynamically from skills data
 */
function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    
    if (!skillsContainer) return;
    
    // Clear existing content
    skillsContainer.innerHTML = '';
    
    // Iterate through each skill category
    Object.keys(skills).forEach(category => {
        // Create category container
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        
        // Create category title
        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'skill-category-title';
        categoryTitle.textContent = category;
        categoryDiv.appendChild(categoryTitle);
        
        // Create skills grid for this category
        const skillsGrid = document.createElement('div');
        skillsGrid.className = 'skill-items';
        
        // Add each skill in the category
        skills[category].forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card';
            skillCard.setAttribute('role', 'listitem');
            skillCard.setAttribute('aria-label', `${skill.name} skill`);
            
            // Create icon element
            const iconElement = document.createElement('i');
            iconElement.className = skill.icon;
            iconElement.setAttribute('aria-hidden', 'true');
            
            // Create skill name element
            const skillName = document.createElement('span');
            skillName.className = 'skill-name';
            skillName.textContent = skill.name;
            
            // Append icon and name to card
            skillCard.appendChild(iconElement);
            skillCard.appendChild(skillName);
            
            // Add card to grid
            skillsGrid.appendChild(skillCard);
        });
        
        categoryDiv.appendChild(skillsGrid);
        skillsContainer.appendChild(categoryDiv);
    });
    
    // Initialize scroll-triggered animations for skills
    initSkillsAnimations();
}

/**
 * Initialize scroll-triggered staggered animations for skills section
 */
function initSkillsAnimations() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    if (skillCategories.length === 0) return;
    
    // Create Intersection Observer for skills
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of element is visible
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animate class to trigger animation
                entry.target.classList.add('animate');
                
                // Get all skill cards in this category
                const skillCards = entry.target.querySelectorAll('.skill-card');
                
                // Add staggered animation to each skill card
                skillCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, index * 100); // 100ms delay between each card
                });
                
                // Stop observing after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all skill categories
    skillCategories.forEach(category => {
        observer.observe(category);
    });
}

/**
 * Render projects section dynamically from projects data
 */
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    if (!projectsContainer) return;
    
    // Clear existing content
    projectsContainer.innerHTML = '';
    
    // Sort projects to show featured ones first
    const sortedProjects = [...projects].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    });
    
    // Create project cards
    sortedProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('role', 'listitem');
        if (project.featured) {
            projectCard.classList.add('featured');
            projectCard.setAttribute('aria-label', `Featured project: ${project.title}`);
        } else {
            projectCard.setAttribute('aria-label', `Project: ${project.title}`);
        }
        
        // Create project image with WebP support
        const projectImage = document.createElement('div');
        projectImage.className = 'project-image';
        
        // Create picture element for WebP support with fallback
        const picture = document.createElement('picture');
        
        // WebP source
        const webpSource = document.createElement('source');
        webpSource.srcset = project.image.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        webpSource.type = 'image/webp';
        
        // Fallback image
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = `${project.title} - Project screenshot`;
        img.loading = 'lazy';
        img.onerror = function() {
            // Fallback for missing images
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="%23999"%3EProject Image%3C/text%3E%3C/svg%3E';
        };
        
        picture.appendChild(webpSource);
        picture.appendChild(img);
        projectImage.appendChild(picture);
        
        // Create project content
        const projectContent = document.createElement('div');
        projectContent.className = 'project-content';
        
        // Project title
        const projectTitle = document.createElement('h3');
        projectTitle.className = 'project-title';
        projectTitle.textContent = project.title;
        
        // Project description
        const projectDescription = document.createElement('p');
        projectDescription.className = 'project-description';
        projectDescription.textContent = project.description;
        
        // Technology tags
        const techTags = document.createElement('div');
        techTags.className = 'project-tech-tags';
        
        project.technologies.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'tech-tag';
            tag.textContent = tech;
            techTags.appendChild(tag);
        });
        
        // Project links
        const projectLinks = document.createElement('div');
        projectLinks.className = 'project-links';
        
        if (project.links.github) {
            const githubLink = document.createElement('a');
            githubLink.href = project.links.github;
            githubLink.target = '_blank';
            githubLink.rel = 'noopener noreferrer';
            githubLink.className = 'project-link';
            githubLink.setAttribute('aria-label', `View ${project.title} on GitHub (opens in new tab)`);
            githubLink.innerHTML = '<i class="fab fa-github" aria-hidden="true"></i> GitHub';
            projectLinks.appendChild(githubLink);
        }
        
        if (project.links.demo) {
            const demoLink = document.createElement('a');
            demoLink.href = project.links.demo;
            demoLink.target = '_blank';
            demoLink.rel = 'noopener noreferrer';
            demoLink.className = 'project-link';
            demoLink.setAttribute('aria-label', `View ${project.title} live demo (opens in new tab)`);
            demoLink.innerHTML = '<i class="fas fa-external-link-alt" aria-hidden="true"></i> Live Demo';
            projectLinks.appendChild(demoLink);
        }
        
        // Append all content elements
        projectContent.appendChild(projectTitle);
        projectContent.appendChild(projectDescription);
        projectContent.appendChild(techTags);
        projectContent.appendChild(projectLinks);
        
        // Append image and content to card
        projectCard.appendChild(projectImage);
        projectCard.appendChild(projectContent);
        
        // Add card to container
        projectsContainer.appendChild(projectCard);
    });
    
    // Initialize scroll-triggered animations for projects
    initProjectsAnimations();
}

/**
 * Initialize scroll-triggered animations for projects section
 */
function initProjectsAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    if (projectCards.length === 0) return;
    
    // Create Intersection Observer for projects
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all project cards with staggered delay
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
}

/**
 * Render readings section dynamically from readings data
 */
function renderReadings() {
    const readingsContainer = document.getElementById('readings-container');
    
    if (!readingsContainer) return;
    
    // Clear existing content
    readingsContainer.innerHTML = '';
    
    // Sort readings by date (most recent first)
    const sortedReadings = [...readings].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    
    // Create reading cards
    sortedReadings.forEach(reading => {
        const readingCard = document.createElement('div');
        readingCard.className = 'reading-card';
        readingCard.setAttribute('role', 'listitem');
        readingCard.setAttribute('aria-label', `Reading: ${reading.title}`);
        
        // Format date
        const dateObj = new Date(reading.date);
        const formattedDate = dateObj.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
        
        // Create card content
        readingCard.innerHTML = `
            <div class="reading-header">
                <span class="reading-category">${reading.category}</span>
                <span class="reading-date">
                    <i class="far fa-calendar-alt" aria-hidden="true"></i>
                    ${formattedDate}
                </span>
            </div>
            
            <h3 class="reading-title">${reading.title}</h3>
            
            <div class="reading-paper">
                <i class="fas fa-file-alt" aria-hidden="true"></i>
                ${reading.paper}
            </div>
            
            <div class="reading-authors">
                <strong>Authors:</strong> ${reading.authors}
            </div>
            
            <p class="reading-summary">${reading.summary}</p>
            
            <div class="reading-findings">
                <div class="reading-findings-title">Key Findings</div>
                <ul>
                    ${reading.findings.map(finding => `<li>${finding}</li>`).join('')}
                </ul>
            </div>
            
            <div class="reading-tags">
                ${reading.tags.map(tag => `<span class="reading-tag">${tag}</span>`).join('')}
            </div>
            
            <a href="${reading.link}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="reading-link"
               aria-label="Read paper: ${reading.paper} (opens in new tab)">
                <i class="fas fa-external-link-alt" aria-hidden="true"></i>
                Read Paper
            </a>
        `;
        
        readingsContainer.appendChild(readingCard);
    });
    
    // Initialize scroll-triggered animations for readings
    initReadingsAnimations();
}

/**
 * Initialize scroll-triggered animations for readings section
 */
function initReadingsAnimations() {
    const readingCards = document.querySelectorAll('.reading-card');
    
    if (readingCards.length === 0) return;
    
    // Create Intersection Observer for readings
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all reading cards with staggered delay
    readingCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
    });
}

/**
 * Utility function to check if element is in viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} - True if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Utility function to debounce function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
