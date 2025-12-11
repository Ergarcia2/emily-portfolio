/* ============================================
   Emily Garcia Portfolio - Main JavaScript
   Animations, Typing Effects, and Interactivity
   ============================================ */

// ===== Mobile Menu Toggle =====
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks?.classList.remove('active');
    });
});

// ===== Typing Animation =====
function typeWriter(element, text, speed = 100, callback) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            if (callback) callback();
        }
    }
    
    type();
}

function typingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const texts = [
        "Tech-driven.",
        "Innovative.",
        "Problem Solver."
    ];
    
    let currentIndex = 0;
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    typingElement.appendChild(cursor);

    function typeNext() {
        if (currentIndex < texts.length) {
            typingElement.removeChild(cursor);
            typeWriter(typingElement, texts[currentIndex], 80, () => {
                setTimeout(() => {
                    typingElement.removeChild(typingElement.firstChild);
                    typingElement.appendChild(cursor);
                    setTimeout(() => {
                        currentIndex++;
                        if (currentIndex < texts.length) {
                            typeNext();
                        } else {
                            // Loop back to start
                            currentIndex = 0;
                            setTimeout(typeNext, 2000);
                        }
                    }, 1500);
                }, 1500);
            });
        }
    }

    // Start typing after a short delay
    setTimeout(typeNext, 1000);
}

// ===== Rotating Text Animation =====
function createRotatingText() {
    const container = document.querySelector('.rotating-text-container');
    if (!container) return;

    const text = "Developer • Designer • Innovator • Problem Solver •";
    const words = text.split(' • ').filter(w => w);
    
    // Get container dimensions for responsive sizing
    const containerWidth = container.offsetWidth || 500;
    const containerHeight = container.offsetHeight || 500;
    const radius = Math.min(containerWidth, containerHeight) * 0.4; // 40% of container size
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', containerWidth.toString());
    svg.setAttribute('height', containerHeight.toString());
    svg.setAttribute('viewBox', `0 0 ${containerWidth} ${containerHeight}`);

    words.forEach((word, index) => {
        const angle = (index * 360) / words.length - 90; // Start from top
        const radian = (angle * Math.PI) / 180;
        const x = centerX + radius * Math.cos(radian);
        const y = centerY + radius * Math.sin(radian);

        const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        textElement.setAttribute('x', x.toString());
        textElement.setAttribute('y', y.toString());
        textElement.setAttribute('text-anchor', 'middle');
        textElement.setAttribute('dominant-baseline', 'middle');
        textElement.setAttribute('transform', `rotate(${angle + 90}, ${x}, ${y})`);
        textElement.textContent = word;
        svg.appendChild(textElement);
    });

    const rotatingDiv = container.querySelector('.rotating-text');
    if (rotatingDiv) {
        rotatingDiv.appendChild(svg);
    }
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in, .experience-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== Skill Progress Bars Animation =====
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-level-bar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width') || '0';
                bar.style.width = width + '%';
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// ===== Smooth Scroll for Anchor Links =====
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

// ===== Project Data =====
// Make projectData globally accessible for card view
window.projectData = {
    'freelance-music': {
        title: 'Freelance Music',
        subtitle: 'Music Industry Platform',
        description: 'Freelance Music is a web platform that connects students and music teachers, making it easy to schedule lessons, manage availability, and track business performance. It provides role-based dashboards for students, teachers, and administrators, offering features like lesson booking, profile management, and advanced analytics for revenue and user trends.',
        contributions: 'I developed the entire Freelance Music website from start to finish, implementing both the frontend and backend. On the frontend, I built a responsive interface using React and integrated interactive components such as Chart.js and Recharts for visual analytics, including quarterly revenue bar charts, referral breakdown pie charts, and instrument popularity reports. For the calendar functionality, I used React Big Calendar to provide daily, weekly, and monthly views of scheduled lessons. On the backend, I designed and implemented RESTful APIs for user management, lesson scheduling, and financial reporting, along with secure authentication and role-based access control. I also created the database schema to support users, lessons, transactions, and analytics. For payment processing, I integrated Stripe to handle card validation and secure transactions. Additionally, I ensured the platform was thoroughly tested and deployed for production, delivering a complete solution that combines usability, scalability, and data-driven insights.',
        teammates: [], // Solo project
        tech: ['HTML', 'CSS', 'JavaScript', 'C#', 'SQL'],
        media: [], // Add screenshot/video paths here: ['../resources/images/freelance-music-1.jpg', '../resources/videos/freelance-music-demo.mp4']
        deployed: false,
        liveUrl: null
    },
    'crimsoncollab': {
        title: 'CrimsonCollab',
        subtitle: 'University Collaboration Platform',
        description: 'CrimsonCollab is a web platform designed to help University of Alabama students connect, collaborate, and create opportunities together. Students can find study partners, form project teams, plan trips, and join interest-based groups, all in one convenient place. By streamlining collaboration and communication, CrimsonCollab makes it easier for students to succeed academically and socially.',
        contributions: 'I played a key role in developing CrimsonCollab, focusing primarily on the travel page, which allows users to connect with other students and create trips together. I implemented features that automatically calculate gas costs per trip based on the number of participants, making it easier for users to plan and budget their travels. Beyond the travel page, I also implemented dark mode across the entire website, ensuring a consistent and user-friendly experience for all users. Throughout the project, I collaborated closely with the team to integrate these features seamlessly into the platform, balancing functionality with an intuitive design, and contributing to a social and interactive space that encourages student engagement and collaboration.',
        teammates: [
            { name: 'Sofia Balsamo', linkedin: 'https://www.linkedin.com/in/sofia-balsamo/' },
            { name: 'Anna Miller', linkedin: 'https://www.linkedin.com/in/annapascana/' },
            { name: 'Jaxon Dunlevy', linkedin: 'https://www.linkedin.com/in/jaxondunlevy/' }
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'C#', 'SQL'],
        media: [], // Add screenshot/video paths here
        deployed: false,
        liveUrl: null
    },
    'mississippi-education': {
        title: 'Mississippi Quality Education Platform',
        subtitle: 'AI-Powered Learning Platform',
        description: 'An AI-powered learning platform developed to expand access to quality education for K–12 students in Mississippi, featuring personalized tutoring and adaptive learning experiences. This project integrates Google\'s Gemini API to deliver intelligent, context-aware educational support. Engineered with C#, ASP.NET Core 8, and JavaScript, with a responsive UI and SQLite database storing 600+ educational resources.',
        contributions: 'I helped generate the initial concept for the Mississippi Quality Education Platform and ensured the team stayed on track throughout development, coordinating tasks and maintaining focus on our goals. I fully developed the platform\'s educational resources, creating over 1,000 resources and 100 structured learning paths that guide students toward a deeper understanding of the concepts they are learning. Additionally, I helped implement the AI tutor, which is trained to support students\' learning without giving direct answers, fostering critical thinking and problem-solving skills. My contributions ensured the platform was both comprehensive and effective, combining thoughtful content design with innovative AI features to maximize student learning outcomes.',
        teammates: [
            { name: 'Griffin Long', linkedin: 'https://www.linkedin.com/in/jgriffinlong/' },
            { name: 'Shane Magee', linkedin: 'https://www.linkedin.com/in/shanemagee/' }
        ],
        awards: [
            '🏆 First Place - AIS Software Innovation Competition',
            '🏆 Student Choice Award - AIS Software Innovation Competition'
        ],
        tech: ['C#', 'ASP.NET Core', 'JavaScript', 'SQL', 'Google Gemini API'],
        media: [], // Add screenshot/video paths here
        deployed: true,
        liveUrl: 'https://ms-quality-education.up.railway.app/#'
    },
    'portfolio': {
        title: 'Personal Portfolio',
        subtitle: 'Professional Portfolio Website',
        description: 'A fully responsive portfolio website showcasing projects, experience, and skills with modern design, smooth animations, and an electric LED-purple aesthetic. Built with vanilla HTML, CSS, and JavaScript, featuring custom animations, responsive design, and a clean, professional layout optimized for recruiters and potential employers.',
        contributions: 'Designed and developed the entire portfolio from scratch. Created custom animations including typing effects, electric borders, and letter glitch backgrounds. Implemented responsive design for all screen sizes. Built interactive project modals and InfiniteMenu 3D navigation system.',
        teammates: [], // Solo project
        tech: ['HTML', 'CSS', 'JavaScript'],
        media: [], // Add screenshot/video paths here
        deployed: true,
        liveUrl: 'index.html'
    },
    'bioisac': {
        title: 'BioISAC',
        subtitle: 'Biological Research Information System',
        description: 'A specialized information system for biological research and data analysis, designed to streamline research workflows and enhance collaboration in scientific projects. Features include data management, analysis tools, collaboration features, and comprehensive reporting capabilities for research teams. This project is currently in progress.',
        contributions: 'Developed the data management system and analysis tools. Implemented collaboration features for research teams. Created comprehensive reporting capabilities and user interface for data visualization.',
        teammates: [
            { name: 'Griffin Long', linkedin: 'https://www.linkedin.com/in/jgriffinlong/' },
            { name: 'Shane Magee', linkedin: 'https://www.linkedin.com/in/shanemagee/' }
        ],
        tech: ['C#', 'SQL', 'JavaScript', '.NET Framework'],
        media: [], // Add screenshot/video paths here
        deployed: false,
        liveUrl: null,
        inProgress: true
    }
};

// ===== Project Modal Functions =====
function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    const project = projectData[projectId];
    
    if (!modal || !project) return;
    
    // Populate modal content
    const modalTitle = document.getElementById('modal-title');
    if (modalTitle) {
        // Add trophy emoji to title if project has awards
        if (project.awards && project.awards.length > 0) {
            modalTitle.innerHTML = `🏆 ${project.title}`;
        } else {
            modalTitle.textContent = project.title;
        }
    }
    document.getElementById('modal-subtitle').textContent = project.subtitle;
    document.getElementById('modal-description').textContent = project.description;
    
    // Populate contributions
    const contributionsEl = document.getElementById('modal-contributions');
    if (contributionsEl) {
        contributionsEl.textContent = project.contributions || 'No contributions specified.';
    }
    
    // Populate teammates
    const teammatesEl = document.getElementById('modal-teammates');
    if (teammatesEl) {
        if (project.teammates && project.teammates.length > 0) {
            teammatesEl.innerHTML = '<div class="teammates-list"></div>';
            const teammatesList = teammatesEl.querySelector('.teammates-list');
            project.teammates.forEach(teammate => {
                // Check if teammate is an object with name and linkedin, or just a string
                const teammateName = typeof teammate === 'object' ? teammate.name : teammate;
                const teammateLinkedin = typeof teammate === 'object' ? teammate.linkedin : null;
                
                if (teammateLinkedin) {
                    // Create a link for teammates with LinkedIn
                    const teammateLink = document.createElement('a');
                    teammateLink.href = teammateLinkedin;
                    teammateLink.target = '_blank';
                    teammateLink.rel = 'noopener noreferrer';
                    teammateLink.className = 'teammate-tag';
                    teammateLink.textContent = teammateName;
                    teammatesList.appendChild(teammateLink);
                } else {
                    // Create a span for teammates without LinkedIn
                    const teammateTag = document.createElement('span');
                    teammateTag.className = 'teammate-tag';
                    teammateTag.textContent = teammateName;
                    teammatesList.appendChild(teammateTag);
                }
            });
        } else {
            teammatesEl.innerHTML = '<p style="color: var(--text-secondary);">Solo Project</p>';
        }
    }
    
    // Populate awards
    const awardsEl = document.getElementById('modal-awards');
    const awardsSection = document.getElementById('modal-awards-section');
    if (awardsEl && awardsSection) {
        if (project.awards && project.awards.length > 0) {
            awardsSection.style.display = 'block';
            awardsEl.innerHTML = '';
            project.awards.forEach(award => {
                const awardItem = document.createElement('div');
                awardItem.className = 'award-item';
                awardItem.textContent = award;
                awardsEl.appendChild(awardItem);
            });
        } else {
            awardsSection.style.display = 'none';
        }
    }
    
    // Populate tech stack (languages)
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = '<h4>Languages & Technologies</h4><div class="tech-tags-modal"></div>';
    const techTags = techContainer.querySelector('.tech-tags-modal');
    project.tech.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        techTags.appendChild(tag);
    });
    
    // Populate media (screenshots/videos)
    const mediaContainer = document.getElementById('modal-media');
    mediaContainer.innerHTML = '';
    
    if (project.media && project.media.length > 0) {
        if (project.media.length === 1) {
            // Single image or video
            const media = project.media[0];
            if (media.endsWith('.mp4') || media.endsWith('.webm') || media.endsWith('.mov')) {
                const video = document.createElement('video');
                video.src = media;
                video.controls = true;
                video.setAttribute('preload', 'metadata');
                mediaContainer.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.src = media;
                img.alt = `${project.title} screenshot`;
                mediaContainer.appendChild(img);
            }
        } else {
            // Multiple images/videos - use gallery
            const gallery = document.createElement('div');
            gallery.className = 'modal-media-gallery';
            project.media.forEach(media => {
                if (media.endsWith('.mp4') || media.endsWith('.webm') || media.endsWith('.mov')) {
                    const video = document.createElement('video');
                    video.src = media;
                    video.controls = true;
                    video.setAttribute('preload', 'metadata');
                    gallery.appendChild(video);
                } else {
                    const img = document.createElement('img');
                    img.src = media;
                    img.alt = `${project.title} screenshot`;
                    gallery.appendChild(img);
                }
            });
            mediaContainer.appendChild(gallery);
        }
    }
    
    // Populate actions (live link if deployed)
    const actionsContainer = document.getElementById('modal-actions');
    actionsContainer.innerHTML = '';
    
    if (project.deployed && project.liveUrl) {
        const liveLink = document.createElement('a');
        liveLink.href = project.liveUrl;
        liveLink.className = 'btn btn-primary';
        liveLink.textContent = 'View Live Site →';
        if (project.liveUrl.startsWith('http')) {
            liveLink.target = '_blank';
            liveLink.rel = 'noopener noreferrer';
        }
        actionsContainer.appendChild(liveLink);
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===== Project Card Click Handlers =====
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    
    projectCards.forEach(card => {
        // Make entire card clickable
        card.addEventListener('click', function(e) {
            const projectId = this.getAttribute('data-project');
            if (projectId) {
                openProjectModal(projectId);
            }
        });
        
        // Also handle button clicks explicitly
        const button = card.querySelector('.project-link');
        if (button) {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const projectId = card.getAttribute('data-project');
                if (projectId) {
                    openProjectModal(projectId);
                }
            });
        }
        
        // Hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Close modal handlers
    if (modal) {
        const closeBtn = modal.querySelector('.modal-close');
        const overlay = modal.querySelector('.modal-overlay');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', closeProjectModal);
        }
        
        if (overlay) {
            overlay.addEventListener('click', closeProjectModal);
        }
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeProjectModal();
            }
        });
    }
}

// ===== Testimonial Card Animation =====
function initTestimonialCards() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transitionDelay = `${index * 0.1}s`;
        }, 100);
    });
}

// ===== Contact Form Validation (if needed in future) =====
function initContactForm() {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add form submission logic here if needed
            alert('Thank you for your message! I will get back to you soon.');
        });
    }
}

// ===== Resume Link Handler =====
function initResumeLink() {
    const resumeLink = document.querySelector('#resume-link');
    if (resumeLink) {
        // Verify the link path is correct
    }
}

// ===== Email Link Handler =====
function initEmailLink() {
    const emailLink = document.querySelector('#email-link');
    const email = 'ergarcia2@crimson.ua.edu';
    
    if (emailLink) {
        emailLink.addEventListener('click', async function(e) {
            e.preventDefault(); // Prevent default link behavior
            
            try {
                // Use modern Clipboard API
                await navigator.clipboard.writeText(email);
                
                // Visual feedback - turn entire button purple, then slowly fade back to grey
                const socialLink = this;
                
                // Immediately turn entire button purple
                socialLink.style.transition = 'background-color 0.1s ease, border-color 0.1s ease, box-shadow 0.1s ease';
                socialLink.style.background = 'var(--accent-purple)';
                socialLink.style.borderColor = 'var(--accent-purple)';
                socialLink.style.boxShadow = 'var(--shadow-glow-strong)';
                
                // Change icon color to match (white/dark so it's visible on purple)
                const icon = socialLink.querySelector('span');
                if (icon) {
                    icon.style.transition = 'color 0.1s ease';
                    icon.style.color = 'var(--bg-primary)';
                }
                
                // Slowly fade back to grey after a brief moment
                setTimeout(() => {
                    socialLink.style.transition = 'background-color 1.5s ease, border-color 1.5s ease, box-shadow 1.5s ease';
                    socialLink.style.background = 'var(--bg-card)';
                    socialLink.style.borderColor = 'var(--accent-purple)';
                    socialLink.style.boxShadow = '0 0 15px var(--accent-purple-glow)';
                    
                    if (icon) {
                        icon.style.transition = 'color 1.5s ease';
                        icon.style.color = 'var(--accent-purple)';
                    }
                }, 200);
                
                // Show toast notification
                showToastNotification('Email copied to clipboard!');
                
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = email;
                textArea.style.position = 'fixed';
                textArea.style.opacity = '0';
                document.body.appendChild(textArea);
                textArea.select();
                
                try {
                    document.execCommand('copy');
                    // Visual feedback - turn entire button purple, then slowly fade back to grey
                    const socialLink = emailLink;
                    
                    // Immediately turn entire button purple
                    socialLink.style.transition = 'background-color 0.1s ease, border-color 0.1s ease, box-shadow 0.1s ease';
                    socialLink.style.background = 'var(--accent-purple)';
                    socialLink.style.borderColor = 'var(--accent-purple)';
                    socialLink.style.boxShadow = 'var(--shadow-glow-strong)';
                    
                    // Change icon color to match (white/dark so it's visible on purple)
                    const icon = socialLink.querySelector('span');
                    if (icon) {
                        icon.style.transition = 'color 0.1s ease';
                        icon.style.color = 'var(--bg-primary)';
                    }
                    
                    // Slowly fade back to grey
                    setTimeout(() => {
                        socialLink.style.transition = 'background-color 1.5s ease, border-color 1.5s ease, box-shadow 1.5s ease';
                        socialLink.style.background = 'var(--bg-card)';
                        socialLink.style.borderColor = 'var(--accent-purple)';
                        socialLink.style.boxShadow = '0 0 15px var(--accent-purple-glow)';
                        
                        if (icon) {
                            icon.style.transition = 'color 1.5s ease';
                            icon.style.color = 'var(--accent-purple)';
                        }
                    }, 200);
                    
                    showToastNotification('Email copied to clipboard!');
                } catch (fallbackErr) {
                    alert('Email: ' + email + '\n\nPlease copy manually.');
                }
                
                document.body.removeChild(textArea);
            }
        });
    }
}

// ===== Toast Notification =====
function showToastNotification(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// ===== Electric Border Animation =====
function initElectricBorder(containerId, strokeId, filterId) {
    const borderElement = document.querySelector(containerId);
    const strokeElement = document.querySelector(strokeId);
    const svgElement = document.querySelector(`${containerId} .eb-svg`);
    
    if (!borderElement || !strokeElement || !svgElement) return;
    
    const updateAnim = () => {
        const width = Math.max(1, Math.round(borderElement.clientWidth || borderElement.getBoundingClientRect().width || 0));
        const height = Math.max(1, Math.round(borderElement.clientHeight || borderElement.getBoundingClientRect().height || 0));
        
        if (strokeElement) {
            strokeElement.style.filter = `url(#${filterId})`;
        }
        
        const dyAnims = Array.from(svgElement.querySelectorAll('feOffset > animate[attributeName="dy"]'));
        if (dyAnims.length >= 2) {
            dyAnims[0].setAttribute('values', `${height}; 0`);
            dyAnims[1].setAttribute('values', `0; -${height}`);
        }
        
        const dxAnims = Array.from(svgElement.querySelectorAll('feOffset > animate[attributeName="dx"]'));
        if (dxAnims.length >= 2) {
            dxAnims[0].setAttribute('values', `${width}; 0`);
            dxAnims[1].setAttribute('values', `0; -${width}`);
        }
        
        const baseDur = 6;
        const dur = baseDur;
        [...dyAnims, ...dxAnims].forEach(a => a.setAttribute('dur', `${dur}s`));
        
        const disp = svgElement.querySelector('feDisplacementMap');
        if (disp) disp.setAttribute('scale', '30');
        
        const filterEl = svgElement.querySelector(`#${CSS.escape(filterId)}`);
        if (filterEl) {
            filterEl.setAttribute('x', '-200%');
            filterEl.setAttribute('y', '-200%');
            filterEl.setAttribute('width', '500%');
            filterEl.setAttribute('height', '500%');
        }
        
        requestAnimationFrame(() => {
            [...dyAnims, ...dxAnims].forEach(a => {
                if (typeof a.beginElement === 'function') {
                    try {
                        a.beginElement();
                    } catch (e) {
                    }
                }
            });
        });
    };
    
    // Initialize on load
    setTimeout(updateAnim, 100);
    
    // Update on resize
    const ro = new ResizeObserver(() => updateAnim());
    ro.observe(borderElement);
}

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize typing animation on home page
    if (document.querySelector('.typing-text')) {
        typingAnimation();
    }

    // Initialize rotating text on home page
    if (document.querySelector('.rotating-text-container')) {
        // Wait for layout to calculate container dimensions
        setTimeout(() => {
            createRotatingText();
        }, 100);
        
        // Recreate on window resize for responsiveness
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const container = document.querySelector('.rotating-text-container');
                if (container) {
                    const existingSvg = container.querySelector('svg');
                    if (existingSvg) {
                        existingSvg.remove();
                    }
                    createRotatingText();
                }
            }, 250);
        });
    }

    // Initialize scroll animations
    initScrollAnimations();

    // Initialize skill bars animation
    animateSkillBars();

    // Initialize project cards
    initProjectCards();

    // Initialize testimonial cards
    initTestimonialCards();

    // Initialize contact form
    initContactForm();

    // Initialize resume link
    initResumeLink();

    // Initialize email link
    initEmailLink();

    // Initialize electric border for home page
    initElectricBorder('#headshot-border', '#headshot-stroke', 'turbulent-displace-headshot');
    
    // Initialize electric border for about page
    initElectricBorder('#about-headshot-border', '#about-headshot-stroke', 'turbulent-displace-about');

    // Add smooth fade-in to page content
    const mainContent = document.querySelector('main, .hero, .section');
    if (mainContent) {
        mainContent.style.opacity = '0';
        setTimeout(() => {
            mainContent.style.transition = 'opacity 0.5s ease';
            mainContent.style.opacity = '1';
        }, 100);
    }
});

// ===== Parallax Effect (Optional) =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before');
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});


