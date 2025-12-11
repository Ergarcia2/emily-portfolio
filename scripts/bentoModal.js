/* ============================================
   BENTO MODAL MODULE
   Works as both ES6 module and regular script
   ============================================ */

// Projects data
const projects = [
    {
        id: 'freelance-music',
        title: 'Freelance Music',
        role: 'Full Stack',
        description: 'A web platform connecting students and music teachers for lesson scheduling, availability management, and business analytics.',
        problemSolution: '<strong>The Problem:</strong> Independent music teachers struggle with fragmented administrative tasks—managing scheduling, student payments, and lesson tracking across different apps—which reduces the time they can spend actually teaching.<br><br><strong>The Solution:</strong> A centralized marketplace and management platform that automates the business side of freelance teaching. It unifies recurring scheduling, secure payments, and student progress tracking into a single, multi-role dashboard for teachers, students, and admins.',
        tech: ['C#', '.NET 9 Web API', 'SQLite', 'Entity Framework Core', 'JWT Auth', 'BCrypt', 'Vanilla JavaScript', 'CSS3', 'HTML5'],
        myRole: 'Lead Developer & Project Manager',
        roleDetail: 'Architected and built the entire full-stack platform from scratch using .NET 9. I engineered a robust backend with over 24 API controllers to handle complex business logic, including recurring lesson scheduling, role-based security (RBAC), and automated fee calculations. On the frontend, I designed responsive, role-specific dashboards to create a seamless user experience for all three user types.',
        teammates: [],
        keyFeatures: [
            'Multi-Role Architecture: distinct dashboards and permissions for Admins, Teachers, and Students.',
            'Complex Scheduling Engine: supports recurring bookings, availability templates, and real-time conflict detection.',
            'Financial Logic: integrated payment processing validation with automated service fee calculation and net payout logic.'
        ],
        challenge: 'Optimized database queries and implemented efficient caching to reduce page load times by 40% while handling concurrent booking requests.',
        gallery: [
            '../resources/images/FreelanceMusic/fm1.png',
            '../resources/images/FreelanceMusic/fm2.png',
            '../resources/images/FreelanceMusic/fm3.png'
        ],
        githubUrl: '#',
        liveUrl: null,
        logoSvg: `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect x="196" y="160" width="120" height="120" rx="24" fill="url(#purpleGrad)"/>
        <text x="256" y="250" font-size="90" fill="white" text-anchor="middle" font-weight="bold">♪</text>
        <text x="256" y="380" font-family="Inter, Arial, sans-serif" font-size="48" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="-2">Freelance Music</text>
    </svg>`,
        cardImage: '../resources/images/freelance-music.jpg'
    },
    {
        id: 'crimsoncollab',
        title: 'CrimsonCollab',
        role: 'Full Stack',
        description: 'CrimsonCollab is a centralized collaboration ecosystem designed specifically for University of Alabama students to unify the fragmented campus experience. It functions as a comprehensive multi-module platform that empowers students to seamlessly coordinate travel, form study groups, find workout partners, and collaborate on innovation projects within a secure and authenticated environment.',
        problemSolution: '<strong>The Problem:</strong> Students at large universities often face a disconnected campus experience and lack a reliable or centralized way to find peers for specific needs. This leads to inefficiencies when trying to split travel costs, locate compatible study partners, or find workout buddies safely.<br><br><strong>The Solution:</strong> CrimsonCollab eliminates this fragmentation by integrating five distinct functional modules into a single secure platform. By leveraging real-time data and profile-based matching, the application creates a streamlined digital hub that fosters community, enhances student safety, and drives collaboration across the entire campus.',
        tech: ['Node.js', 'Express.js', 'SQLite', 'JavaScript (ES6+)', 'HTML5/CSS3', 'RESTful API', 'JWT Authentication', 'OAuth Integration', 'Bootstrap 5', 'Bcrypt'],
        myRole: 'Frontend Developer & Feature Lead',
        roleDetail: 'Architected and led the frontend development of the Student Travel Module, a comprehensive feature for real-time trip coordination and cost-splitting. I engineered the system using over 4,400 lines of custom JavaScript, integrating RESTful services for cross-user data synchronization. My work spanned the full product lifecycle, from implementing complex state management and live search filtering to designing critical safety validation tools and an interactive analytics dashboard.',
        teammates: [
            { name: 'Sofia Balsamo', linkedin: 'https://www.linkedin.com/in/sofia-balsamo/' },
            { name: 'Anna Miller', linkedin: 'https://www.linkedin.com/in/annapascana/' },
            { name: 'Jaxon Dunlevy', linkedin: 'https://www.linkedin.com/in/jaxondunlevy/' }
        ],
        challenge: 'Implemented real-time cost calculations for trip planning that dynamically update based on participant count and distance.',
        gallery: [
            '../resources/images/CrimsonCollab/CC1.png',
            '../resources/images/CrimsonCollab/CC2.png',
            '../resources/images/CrimsonCollab/CC3.png'
        ],
        githubUrl: '#',
        liveUrl: null,
        logoSvg: `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="crimsonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#9E1B32;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#7A1528;stop-opacity:1" />
            </linearGradient>
        </defs>
        <!-- Circular container with gradient -->
        <circle cx="256" cy="250" r="60" fill="url(#crimsonGrad)"/>
        <!-- People/Group Icon (Bootstrap Icons bi-people-fill style) -->
        <g fill="white" transform="translate(256, 250)">
            <!-- Person 1 (Left) -->
            <circle cx="-20" cy="-12" r="10"/>
            <path d="M-30 -2 Q-30 -8 -20 -8 Q-10 -8 -10 -2 L-10 16 L-30 16 Z"/>
            <!-- Person 2 (Center) -->
            <circle cx="0" cy="-16" r="11"/>
            <path d="M-11 -5 Q-11 -10 0 -10 Q11 -10 11 -5 L11 16 L-11 16 Z"/>
            <!-- Person 3 (Right) -->
            <circle cx="20" cy="-12" r="10"/>
            <path d="M10 -2 Q10 -8 20 -8 Q30 -8 30 -2 L30 16 L10 16 Z"/>
        </g>
        <text x="256" y="380" font-family="Inter, Arial, sans-serif" font-size="48" font-weight="700" fill="#9E1B32" text-anchor="middle">CrimsonCollab</text>
    </svg>`,
        cardImage: '../resources/images/Screenshot 2025-11-14 125248.png'
    },
    {
        id: 'mississippi-education',
        title: 'Mississippi Quality Education Platform',
        role: 'Full Stack',
        description: 'An AI-powered learning platform expanding access to quality education for K–12 students in Mississippi.',
        problemSolution: '<strong>The Problem:</strong> K-12 students in Mississippi lack centralized access to quality educational resources that align specifically with state-mandated learning standards (MCCRS), creating an equity gap in student support.<br><br><strong>The Solution:</strong> A comprehensive educational hub that democratizes access to learning by combining MCCRS-aligned resources with an AI-powered Socratic Tutor (Google Gemini) for personalized guidance.',
        tech: ['C#', '.NET 8 Web API', 'Google Gemini API', 'SQLite', 'Swagger', 'JavaScript (ES6+)', 'Bootstrap 5', 'HTML5', 'CSS3'],
        myRole: 'Lead Developer & Content Creator',
        roleDetail: 'Developed the Learning Paths system, creating 5,000+ lines of structured educational content aligned with MCCRS standards. Built a modular single-page application (SPA) with .NET 8.0 Web API backend integration, implementing interactive practice questions with progressive hint systems for Pre-K through 12th grade.',
        teammates: [
            { name: 'Griffin Long', linkedin: 'https://www.linkedin.com/in/jgriffinlong/' },
            { name: 'Shane Magee', linkedin: 'https://www.linkedin.com/in/shanemagee/' },
            { name: 'Grace Neil', linkedin: 'https://www.linkedin.com/in/graceneil/' }
        ],
        awards: [
            '🏆 First Place - AIS Software Innovate Challenge',
            '🏆 Student Choice - AIS Software Innovate Challenge'
        ],
        challenge: 'Integrated Google Gemini API to create an AI tutor that guides students without giving direct answers, fostering critical thinking skills.',
        gallery: [
            '../resources/images/MSQualityEducation/MSQE1.png',
            '../resources/images/MSQualityEducation/MSQE2.png',
            '../resources/images/MSQualityEducation/MSQE3.png'
        ],
        githubUrl: '#',
        liveUrl: null,
        logoSvg: `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <image href="../resources/images/Mississippi Flower.png" x="176" y="200" height="100" width="160" preserveAspectRatio="xMidYMid meet"/>
        <text x="256" y="380" font-family="Segoe UI, Arial, sans-serif" font-size="48" font-weight="bold" fill="#FFFFFF" text-anchor="middle">MS Quality Education</text>
    </svg>`,
        cardImage: '../resources/images/Screenshot 2025-11-09 170809.png'
    },
    {
        id: 'bioisac',
        title: 'BioISAC',
        role: 'Full Stack',
        description: 'A specialized information system for biological research and data analysis, streamlining research workflows.',
        problemSolution: '<strong>The Problem:</strong> Security teams at biological research facilities are overwhelmed by thousands of daily cyber alerts. They lack the resources to manually filter through this noise, which means critical vulnerabilities often go unnoticed and unpatched until it is too late.<br><br><strong>The Solution:</strong> An automated threat intelligence hub that solves alert fatigue. By aggregating data from global sources and using AI to filter out low-priority noise, the platform delivers a prioritized list of actionable threats so teams can focus on what matters most.',
        tech: ['C#', '.NET 9 Web API', 'Google Gemini 2.5 Flash', 'MySQL', 'OTX API', 'NIST API', 'CISA API', 'OtpNet', 'QRCoder', 'Bootstrap 5'],
        myRole: 'Backend Developer & System Architect',
        roleDetail: 'Integrated multiple external threat feeds—specifically OTX, NIST, and CISA—to aggregate real-time vulnerability data. Implemented secure 2FA authentication using NuGet\'s OtpNet and QRCoder. Deployed Google Gemini 2.5 Flash to automatically evaluate and score threats, generate remediation steps, and review user documentation to verify qualifications prior to access.',
        teammates: [
            { name: 'Griffin Long', linkedin: 'https://www.linkedin.com/in/jgriffinlong/' },
            { name: 'Shane Magee', linkedin: 'https://www.linkedin.com/in/shanemagee/' }
        ],
        challenge: 'Designed a scalable database architecture to handle large biological datasets while maintaining query performance and data integrity.',
        gallery: [
            '../resources/images/BioISAC/BI1.png',
            '../resources/images/BioISAC/BI2.png',
            '../resources/images/BioISAC/BI3.png'
        ],
        githubUrl: '#',
        liveUrl: null,
        logoImage: '../resources/images/BioISAC.png',
        cardImage: '../resources/images/bioisac.jpg'
    },
    {
        id: 'crimsonbookstore',
        title: 'CrimsonBookStore',
        role: 'Full Stack',
        description: 'A specialized e-commerce platform designed for the university ecosystem, streamlining the entire textbook lifecycle for buying and selling used course materials.',
        problemSolution: '<strong>The Problem:</strong> University students face high textbook costs and lack a centralized, trustworthy marketplace to buy and sell used course materials. Existing options are often fragmented or lack real-time inventory tracking for specific university courses.<br><br><strong>The Solution:</strong> A specialized e-commerce platform designed for the university ecosystem. It streamlines the entire textbook lifecycle—allowing students to submit books for sale and purchase used inventory—while providing administrators with real-time sales analytics and order fulfillment tools.',
        tech: ['C#', '.NET 9 Web API', 'MySQL', 'JavaScript (ES6+)', 'Bootstrap 5', 'HTML5', 'CSS3', 'RESTful API'],
        myRole: 'Full Stack Developer & Database Architect',
        roleDetail: 'Architected a full-stack e-commerce marketplace from scratch using .NET 9. I designed a robust relational database schema in MySQL to handle complex inventory tracking and order history. I implemented the complete transaction workflow, engineering the "Add to Cart" state management, checkout logic, and the admin approval system for student book submissions.',
        teammates: [
            { name: 'Jykia Miller', linkedin: 'https://www.linkedin.com/in/jykiamiller/' },
            { name: 'Brayden Sikorski', linkedin: 'https://www.linkedin.com/in/brayden-sikorski/' },
            { name: 'Jayden Ragland', linkedin: 'https://www.linkedin.com/in/jayden-ragland/' }
        ],
        gallery: [
            '../resources/images/CrimsonBookStore/CBS1.png',
            '../resources/images/CrimsonBookStore/CBS2.png',
            '../resources/images/CrimsonBookStore/CBS3.png'
        ],
        githubUrl: '#',
        liveUrl: null,
        logoSvg: `<svg width="512" height="512" viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
        <text x="400" y="150" font-family="Poppins, Arial, sans-serif" font-size="72" font-weight="800" fill="#DC143C" text-anchor="middle" letter-spacing="-1">CrimsonBookStore</text>
    </svg>`,
        cardImage: '../resources/images/crimsonbookstore.jpg'
    }
];

// Carousel interval tracker
let currentCarouselInterval = null;

// Initialize image carousel
function initImageCarousel(imageCount) {
    const images = document.querySelectorAll('.gallery-image');
    if (images.length === 0) return;

    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % imageCount;
        images[currentIndex].classList.add('active');
    }

    // Auto-fade every 4 seconds
    currentCarouselInterval = setInterval(showNextImage, 4000);
}

// Open Bento Modal
function openBentoModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('bento-modal');
    const grid = document.getElementById('bento-grid');
    if (!modal || !grid) return;

    // Clear any existing carousel
    if (currentCarouselInterval) {
        clearInterval(currentCarouselInterval);
        currentCarouselInterval = null;
    }

    // Build Bento Grid HTML
    grid.innerHTML = `
        <!-- Box A: Gallery (2 cols) -->
        <div class="bento-box" data-span="2">
            <div class="bento-gallery" id="project-gallery">
                ${project.gallery.map((img, index) => 
                    `<img src="${img}" alt="${project.title} screenshot ${index + 1}" class="gallery-image ${index === 0 ? 'active' : ''}">`
                ).join('')}
            </div>
        </div>

        <!-- Box B: Context & Actions (1 col) -->
        <div class="bento-box">
            <div class="bento-context" style="display: flex; flex-direction: column; height: 100%;">
                <h1>${project.title}</h1>
                <div class="problem-solution">
                    ${project.problemSolution}
                </div>
                ${project.awards && project.awards.length > 0 ? `
                <div class="awards-section" style="margin-bottom: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                    <h4 style="font-family: 'Orbitron', sans-serif; font-size: 1.1rem; font-weight: 700; color: var(--neon-purple); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">Awards & Recognition</h4>
                    <div class="awards-list">
                        ${project.awards.map(award => `
                            <div class="award-item" style="margin-bottom: 0.75rem; font-size: 1rem; color: rgba(255, 255, 255, 0.9); line-height: 1.6;">
                                ${award}
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
        </div>

        <!-- Box C: Tech Stack (1 col) -->
        <div class="bento-box">
            <h3 class="bento-section-header">Tech Stack</h3>
            <div class="tech-stack-tags">
                ${project.tech.map(tech => `<span class="tech-tag-bento">${tech}</span>`).join('')}
            </div>
        </div>

        <!-- Box D: My Role (1 col) -->
        <div class="bento-box">
            <h3 class="bento-section-header">My Role</h3>
            <div class="bento-section-content">
                <strong>${project.myRole}</strong>
                <div class="role-detail">${project.roleDetail}</div>
            </div>
        </div>

        <!-- Box E: The Team / Key Features (1 col) -->
        <div class="bento-box">
            ${project.keyFeatures && project.keyFeatures.length > 0 ? `
                <h3 class="bento-section-header">Key Features</h3>
                <div class="bento-section-content">
                    <div class="features-list" style="display: flex; flex-direction: column; gap: 1rem;">
                        ${project.keyFeatures.map(feature => `
                            <div class="feature-item" style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                <div style="font-size: 1rem; color: rgba(255, 255, 255, 0.9); line-height: 1.7;">
                                    <strong style="color: var(--neon-purple);">${feature.split(':')[0]}:</strong> ${feature.split(':').slice(1).join(':')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : `
                <h3 class="bento-section-header">The Team</h3>
                <div class="bento-section-content">
                    ${project.teammates.length > 0 ? `
                        <div class="team-list">
                            ${project.teammates.map(teammate => `
                                <a href="${teammate.linkedin}" target="_blank" rel="noopener noreferrer" class="team-member-button" aria-label="${teammate.name} LinkedIn">
                                    ${teammate.name}
                                </a>
                            `).join('')}
                        </div>
                    ` : '<p style="color: rgba(255,255,255,0.7);">Solo Project</p>'}
                </div>
            `}
        </div>
    `;

    // Initialize image carousel
    initImageCarousel(project.gallery.length);

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Bento Modal
function closeBentoModal() {
    const modal = document.getElementById('bento-modal');
    if (!modal) return;

    // Clear carousel interval
    if (currentCarouselInterval) {
        clearInterval(currentCarouselInterval);
        currentCarouselInterval = null;
    }

    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize modal event listeners
function initBentoModal() {
    // Close modal button
    const closeBtn = document.getElementById('modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeBentoModal);
    }

    // Close modal on backdrop click
    const modal = document.getElementById('bento-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeBentoModal();
            }
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeBentoModal();
        }
    });
}

// Export for browser (works with file:// protocol)
if (typeof window !== 'undefined') {
    window.BentoModal = { projects, openBentoModal, closeBentoModal, initBentoModal };
}

