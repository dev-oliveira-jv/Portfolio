// Language translations
const translations = {
    pt: {
        'nav-home': 'Home',
        'nav-about': 'Sobre',
        'nav-skills': 'Skills',
        'nav-projects': 'Projetos',
        'nav-contact': 'Contato',
        'hero-greeting': 'Olá,',
        'hero-intro': 'Eu sou',
        'hero-title': 'Desenvolvedor Full Stack',
        'hero-description': 'Desenvolvedor apaixonado por criar soluções inovadoras usando Java, Flutter, C# e tecnologias modernas.',
        'hero-btn-projects': 'Ver Projetos',
        'about-title': 'Sobre Mim',
        'about-text-1': 'Sou um desenvolvedor full stack com experiência em diversas tecnologias e linguagens de programação. Tenho paixão por criar aplicações robustas e escaláveis, sempre buscando as melhores práticas de desenvolvimento.',
        'about-text-2': 'Minha jornada inclui projetos em Java com Spring Boot, desenvolvimento mobile com Flutter, aplicações web modernas e APIs RESTful. Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.',
        'stat-projects': 'Projetos',
        'stat-languages': 'Linguagens',
        'stat-experience': 'Anos de Experiência',
        'skills-title': 'Minhas Skills',
        'skill-java': 'Spring Boot, APIs REST, Microserviços',
        'skill-flutter': 'Desenvolvimento mobile multiplataforma',
        'skill-csharp': '.NET, APIs, Aplicações desktop',
        'skill-database-title': 'Banco de Dados',
        'skill-database': 'MySQL, PostgreSQL, MongoDB',
        'skill-git': 'Controle de versão e colaboração',
        'skill-cloud': 'Deploy e infraestrutura',
        'projects-title': 'Meus Projetos',
        'filter-all': 'Todos',
        'loading-projects': 'Carregando projetos...',
        'contact-title': 'Entre em Contato',
        'contact-subtitle': 'Vamos trabalhar juntos!',
        'contact-description': 'Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato comigo!',
        'footer-copyright': '© 2025 João Victor. Todos os direitos reservados.',
        'project-code': 'Código',
        'project-demo': 'Demo',
        'error-loading': 'Erro ao carregar projetos. Mostrando projetos em destaque:'
    },
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'hero-greeting': 'Hello,',
        'hero-intro': 'I am',
        'hero-title': 'Full Stack Developer',
        'hero-description': 'Passionate developer creating innovative solutions using Java, Flutter, C# and modern technologies.',
        'hero-btn-projects': 'View Projects',
        'about-title': 'About Me',
        'about-text-1': 'I am a full stack developer with experience in various technologies and programming languages. I have a passion for creating robust and scalable applications, always seeking the best development practices.',
        'about-text-2': 'My journey includes projects in Java with Spring Boot, mobile development with Flutter, modern web applications and RESTful APIs. I am always looking for new challenges and opportunities to grow professionally.',
        'stat-projects': 'Projects',
        'stat-languages': 'Languages',
        'stat-experience': 'Years of Experience',
        'skills-title': 'My Skills',
        'skill-java': 'Spring Boot, REST APIs, Microservices',
        'skill-flutter': 'Cross-platform mobile development',
        'skill-csharp': '.NET, APIs, Desktop applications',
        'skill-database-title': 'Database',
        'skill-database': 'MySQL, PostgreSQL, MongoDB',
        'skill-git': 'Version control and collaboration',
        'skill-cloud': 'Deploy and infrastructure',
        'projects-title': 'My Projects',
        'filter-all': 'All',
        'loading-projects': 'Loading projects...',
        'contact-title': 'Get In Touch',
        'contact-subtitle': 'Let\'s work together!',
        'contact-description': 'I am always open to new opportunities and interesting projects. Get in touch with me!',
        'footer-copyright': '© 2025 João Victor. All rights reserved.',
        'project-code': 'Code',
        'project-demo': 'Demo',
        'error-loading': 'Error loading projects. Showing featured projects:'
    }
};

// Current language and theme state
let currentLanguage = 'pt';
let currentTheme = 'light';

// Animation utilities
function addTransitionClass(element, className, duration = 500) {
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
    }, duration);
}

function animateLanguageChange() {
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach((element, index) => {
        setTimeout(() => {
            addTransitionClass(element, 'language-transition');
        }, index * 50);
    });
}

function animateThemeChange() {
    addTransitionClass(document.body, 'theme-transition', 300);
}

// Theme toggle functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Load saved theme preference
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    currentTheme = savedTheme;
    
    // Apply saved theme
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.checked = true;
    }
    
    themeToggle.addEventListener('change', () => {
        currentTheme = themeToggle.checked ? 'dark' : 'light';
        
        // Animate theme change
        animateThemeChange();
        
        // Apply theme
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        
        // Save preference
        localStorage.setItem('portfolio-theme', currentTheme);
    });
}

// Language toggle functionality
function initializeLanguageToggle() {
    const languageToggle = document.getElementById('language-toggle');
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('portfolio-language') || 'pt';
    currentLanguage = savedLanguage;
    
    // Apply saved language
    if (currentLanguage === 'en') {
        languageToggle.checked = true;
    }
    
    updateLanguage();
    
    languageToggle.addEventListener('change', () => {
        currentLanguage = languageToggle.checked ? 'en' : 'pt';
        
        // Animate language change
        animateLanguageChange();
        
        // Update language after animation starts
        setTimeout(() => {
            updateLanguage();
        }, 100);
        
        // Save preference
        localStorage.setItem('portfolio-language', currentLanguage);
    });
}

// Update page language
function updateLanguage() {
    // Update document language attribute
    document.documentElement.lang = currentLanguage === 'pt' ? 'pt-BR' : 'en';
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update project cards if they exist
    updateProjectsLanguage();
}

// Update projects language
function updateProjectsLanguage() {
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        const icon = link.querySelector('i');
        if (icon && icon.classList.contains('fa-github')) {
            link.innerHTML = `<i class="fab fa-github"></i> ${translations[currentLanguage]['project-code']}`;
        } else if (icon && icon.classList.contains('fa-external-link-alt')) {
            link.innerHTML = `<i class="fas fa-external-link-alt"></i> ${translations[currentLanguage]['project-demo']}`;
        }
    });
    
    // Update error message if present
    const errorMessage = document.querySelector('.error-message p');
    if (errorMessage) {
        errorMessage.textContent = translations[currentLanguage]['error-loading'];
    }
    
    // Update loading message
    const loadingMessage = document.querySelector('.loading p');
    if (loadingMessage) {
        loadingMessage.textContent = translations[currentLanguage]['loading-projects'];
    }
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    if (window.scrollY > 100) {
        navbar.style.background = isDark 
            ? 'rgba(17, 24, 39, 0.98)' 
            : 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = isDark 
            ? 'rgba(17, 24, 39, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate counters when about section is visible
            if (entry.target.classList.contains('about')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// GitHub API integration
async function fetchGitHubProjects() {
    const username = 'dev-oliveira-jv';
    const projectsContainer = document.getElementById('projects-container');
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
        const repos = await response.json();
        
        // Clear loading spinner
        projectsContainer.innerHTML = '';
        
        // Filter out forked repositories and get only original projects
        const originalRepos = repos.filter(repo => !repo.fork);
        
        if (originalRepos.length === 0) {
            projectsContainer.innerHTML = '<p>Nenhum projeto encontrado.</p>';
            return;
        }
        
        originalRepos.forEach(repo => {
            const projectCard = createProjectCard(repo);
            projectsContainer.appendChild(projectCard);
        });
        
        // Initialize project filtering
        initializeProjectFiltering();
        
        // Update language for project cards
        updateProjectsLanguage();
        
    } catch (error) {
        console.error('Erro ao buscar projetos do GitHub:', error);
        projectsContainer.innerHTML = `
            <div class="error-message">
                <p>${translations[currentLanguage]['error-loading']}</p>
            </div>
        `;
        
        // Fallback to static projects
        loadFallbackProjects();
    }
}

function createProjectCard(repo) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    // Determine project category based on language
    let category = 'other';
    if (repo.language) {
        const lang = repo.language.toLowerCase();
        if (lang === 'java') category = 'java';
        else if (lang === 'dart') category = 'flutter';
        else if (lang === 'c#') category = 'csharp';
    }
    
    card.setAttribute('data-category', category);
    
    // Get project icon based on language
    const icon = getProjectIcon(repo.language);
    
    card.innerHTML = `
        <div class="project-image">
            <i class="${icon}"></i>
        </div>
        <div class="project-content">
            <h3 class="project-title">${repo.name}</h3>
            <p class="project-description">${repo.description || 'Projeto desenvolvido com foco em boas práticas e tecnologias modernas.'}</p>
            <div class="project-tech">
                ${repo.language ? `<span class="tech-tag">${repo.language}</span>` : ''}
                ${repo.topics ? repo.topics.map(topic => `<span class="tech-tag">${topic}</span>`).join('') : ''}
            </div>
            <div class="project-links">
                <a href="${repo.html_url}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i>
                    ${translations[currentLanguage]['project-code']}
                </a>
                ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                    ${translations[currentLanguage]['project-demo']}
                </a>` : ''}
            </div>
        </div>
    `;
    
    return card;
}

function getProjectIcon(language) {
    const icons = {
        'Java': 'fab fa-java',
        'Dart': 'fas fa-mobile-alt',
        'C#': 'fab fa-microsoft',
        'JavaScript': 'fab fa-js-square',
        'Python': 'fab fa-python',
        'HTML': 'fab fa-html5',
        'CSS': 'fab fa-css3-alt'
    };
    
    return icons[language] || 'fas fa-code';
}

function loadFallbackProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    const fallbackProjects = [
        {
            name: 'Backend-Java-Itau',
            description: 'Desafio retirado de rafaellins-itau/desafio-itau-vaga-99-junior, com o objetivo de criar uma API REST que recebe Transações e retorna Estatísticas sobre essas transações usando Java & Spring Boot',
            language: 'Java',
            category: 'java',
            url: 'https://github.com/dev-oliveira-jv/Backend-Java-Itau',
            icon: 'fab fa-java'
        },
        {
            name: 'project-xlo',
            description: 'Projeto em Flutter de uma Loja Virtual',
            language: 'Dart',
            category: 'flutter',
            url: 'https://github.com/dev-oliveira-jv/project-xlo',
            icon: 'fas fa-mobile-alt'
        },
        {
            name: 'PicPay-backend',
            description: 'Objetivo: PicPay Simplificado O PicPay Simplificado é uma plataforma de pagamentos simplificada. Nela é possível depositar e realizar transferências de dinheiro entre usuários.',
            language: 'Java',
            category: 'java',
            url: 'https://github.com/dev-oliveira-jv/PicPay-backend',
            icon: 'fab fa-java'
        },
        {
            name: 'NLW-Connect-Java',
            description: 'Projeto do evento NLW Connect na trilha de Java',
            language: 'Java',
            category: 'java',
            url: 'https://github.com/dev-oliveira-jv/NLW-Connect-Java',
            icon: 'fab fa-java'
        },
        {
            name: 'Delivery-Control',
            description: 'Esse projeto e de um aplicativo de controle de delivery\'s usando flutter',
            language: 'Dart',
            category: 'flutter',
            url: 'https://github.com/dev-oliveira-jv/Delivery-Control',
            icon: 'fas fa-mobile-alt'
        },
        {
            name: 'Gasto-dos-Deputados',
            description: 'Desafio Back end proposto pela Agenda Edu de um projeto Back end para verificar os gastos dos deputados separados por UF baseado na planilha gerada no portal da transparência',
            language: 'C#',
            category: 'csharp',
            url: 'https://github.com/dev-oliveira-jv/Gasto-dos-Deputados',
            icon: 'fab fa-microsoft'
        }
    ];
    
    fallbackProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', project.category);
        
        card.innerHTML = `
            <div class="project-image">
                <i class="${project.icon}"></i>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    <span class="tech-tag">${project.language}</span>
                </div>
                <div class="project-links">
                    <a href="${project.url}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i>
                        ${translations[currentLanguage]['project-code']}
                    </a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(card);
    });
    
    initializeProjectFiltering();
    updateProjectsLanguage();
}

function initializeProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme toggle
    initializeThemeToggle();
    
    // Initialize language toggle
    initializeLanguageToggle();
    
    // Load GitHub projects
    fetchGitHubProjects();
    
    // Add fade-in animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Smooth reveal animations for skill cards
const skillCards = document.querySelectorAll('.skill-card');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    skillObserver.observe(card);
});

// Keyboard shortcuts for accessibility
document.addEventListener('keydown', (e) => {
    // Alt + T for theme toggle
    if (e.altKey && e.key === 't') {
        e.preventDefault();
        document.getElementById('theme-toggle').click();
    }
    
    // Alt + L for language toggle
    if (e.altKey && e.key === 'l') {
        e.preventDefault();
        document.getElementById('language-toggle').click();
    }
});

// Add visual feedback for toggle interactions
function addToggleInteractionEffects() {
    const toggleLabels = document.querySelectorAll('.toggle-label');
    
    toggleLabels.forEach(label => {
        label.addEventListener('mousedown', () => {
            label.style.transform = 'scale(0.95)';
        });
        
        label.addEventListener('mouseup', () => {
            label.style.transform = 'scale(1.05)';
            setTimeout(() => {
                label.style.transform = '';
            }, 150);
        });
        
        label.addEventListener('mouseleave', () => {
            label.style.transform = '';
        });
    });
}

// Initialize toggle interaction effects
document.addEventListener('DOMContentLoaded', () => {
    addToggleInteractionEffects();
});

