// Portfolio Website - Main JavaScript

// Projects Data Structure
const projects = [
    {
        id: 1,
        title: "AI Copilot for 3D Artists",
        description: "Revolutionary AI-powered tool that assists 3D artists and designers in their creative workflow, leveraging machine learning to enhance productivity and creativity.",
        image: "assets/images/projects/project1.jpg",
        technologies: ["Python", "TensorFlow", "React", "Node.js"],
        links: {
            github: "https://github.com/username/ai-copilot",
            demo: "https://demo-ai-copilot.com"
        },
        featured: true
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with real-time inventory management, secure payment processing, and responsive design for optimal user experience.",
        image: "assets/images/projects/project2.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        links: {
            github: "https://github.com/username/ecommerce-platform",
            demo: "https://demo-ecommerce.com"
        },
        featured: true
    },
    {
        id: 3,
        title: "Machine Learning Model Trainer",
        description: "Web-based platform for training and deploying machine learning models with an intuitive interface for data scientists and ML engineers.",
        image: "assets/images/projects/project3.jpg",
        technologies: ["Python", "PyTorch", "Flask", "Docker"],
        links: {
            github: "https://github.com/username/ml-trainer",
            demo: "https://demo-ml-trainer.com"
        },
        featured: false
    },
    {
        id: 4,
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates, team collaboration features, and advanced filtering capabilities.",
        image: "assets/images/projects/project4.jpg",
        technologies: ["TypeScript", "React", "Firebase", "Material-UI"],
        links: {
            github: "https://github.com/username/task-manager",
            demo: "https://demo-task-manager.com"
        },
        featured: false
    },
    {
        id: 5,
        title: "Computer Vision Pipeline",
        description: "End-to-end computer vision pipeline for object detection and image classification with real-time processing capabilities.",
        image: "assets/images/projects/project5.jpg",
        technologies: ["Python", "OpenCV", "TensorFlow", "AWS"],
        links: {
            github: "https://github.com/username/cv-pipeline",
            demo: "https://demo-cv-pipeline.com"
        },
        featured: false
    },
    {
        id: 6,
        title: "Portfolio Website Builder",
        description: "No-code portfolio website builder that allows users to create stunning portfolio sites with drag-and-drop functionality.",
        image: "assets/images/projects/project6.jpg",
        technologies: ["JavaScript", "Vue.js", "CSS3", "GitHub Pages"],
        links: {
            github: "https://github.com/username/portfolio-builder",
            demo: "https://demo-portfolio-builder.com"
        },
        featured: false
    }
];

// Readings Data Structure
const readings = [
    {
        id: 1,
        title: "Attention Mechanisms in Neural Networks",
        paper: "Attention Is All You Need",
        authors: "Vaswani et al.",
        date: "2024-01-15",
        category: "NLP",
        summary: "Deep dive into the transformer architecture and self-attention mechanisms that revolutionized natural language processing and beyond.",
        findings: [
            "Self-attention allows models to weigh the importance of different parts of the input",
            "Positional encoding is crucial for maintaining sequence information",
            "Multi-head attention enables the model to focus on different representation subspaces"
        ],
        tags: ["Transformers", "Attention", "Deep Learning", "NLP"],
        link: "https://arxiv.org/abs/1706.03762"
    },
    {
        id: 2,
        title: "Diffusion Models for Image Generation",
        paper: "Denoising Diffusion Probabilistic Models",
        authors: "Ho et al.",
        date: "2024-01-10",
        category: "Computer Vision",
        summary: "Exploring how diffusion models work by gradually adding noise to data and learning to reverse the process for high-quality image generation.",
        findings: [
            "Diffusion models achieve state-of-the-art image generation quality",
            "The denoising process can be conditioned on various inputs for controlled generation",
            "Training stability is significantly better than GANs"
        ],
        tags: ["Diffusion Models", "Generative AI", "Computer Vision", "Image Synthesis"],
        link: "https://arxiv.org/abs/2006.11239"
    },
    {
        id: 3,
        title: "Neural Radiance Fields for 3D Reconstruction",
        paper: "NeRF: Representing Scenes as Neural Radiance Fields",
        authors: "Mildenhall et al.",
        date: "2024-01-05",
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
    "Software Development": [
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "Python", icon: "fab fa-python" },
        { name: "TypeScript", icon: "fab fa-js" },
        { name: "React", icon: "fab fa-react" },
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" }
    ],
    "Machine Learning & AI": [
        { name: "TensorFlow", icon: "fas fa-brain" },
        { name: "PyTorch", icon: "fas fa-fire" },
        { name: "Scikit-learn", icon: "fas fa-chart-line" },
        { name: "Neural Networks", icon: "fas fa-project-diagram" },
        { name: "Computer Vision", icon: "fas fa-eye" },
        { name: "NLP", icon: "fas fa-language" }
    ],
    "3D & Graphics": [
        { name: "3D Modeling", icon: "fas fa-cube" },
        { name: "Computer Graphics", icon: "fas fa-palette" },
        { name: "Rendering", icon: "fas fa-image" },
        { name: "AI for Artists", icon: "fas fa-magic" }
    ],
    "Tools & Technologies": [
        { name: "Docker", icon: "fab fa-docker" },
        { name: "AWS", icon: "fab fa-aws" },
        { name: "MongoDB", icon: "fas fa-database" },
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "REST APIs", icon: "fas fa-server" },
        { name: "CI/CD", icon: "fas fa-sync-alt" }
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
