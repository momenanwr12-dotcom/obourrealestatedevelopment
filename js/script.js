document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const body = document.body;
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.header');
    
    // Icons
    const themeIcon = themeToggle.querySelector('i');
    const mobileIcon = mobileToggle.querySelector('i');

    // === Theme Management ===
    // Default to dark mode
    let currentTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon();

    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon();
    });

    function updateThemeIcon() {
        if (currentTheme === 'dark') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }

    // === Language Management ===
    // Dictionary for translations
    const translations = {
        'en': {
            'nav.home': 'Home',
            'nav.about': 'About Us',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',
            'hero.title': 'Building Modern Living in Obour City',
            'hero.subtitle': 'Premium residential developments engineered for the future. Experience luxury, comfort, and unmatched quality with Obour Realestate Development.',
            'btn.projects': 'View Projects',
            'btn.contact': 'Contact Us',
            'about.title': 'About Our Company',
            'about.desc1': 'Obour Realestate Development is a premier property development company specializing in residential apartment projects and modern urban living in Obour City.',
            'about.desc2': 'With a commitment to quality standards, innovative design, and architectural excellence, we create spaces that inspire and elevate the standard of living.',
            'feat.vision': 'Our Vision',
            'feat.vision.desc': 'To lead the transformation of urban living in Obour City through innovative, sustainable, and luxurious real estate developments.',
            'feat.quality': 'Quality Standards',
            'feat.quality.desc': 'We adhere to the highest construction standards, using premium materials and state-of-the-art engineering practices.',
            'nav.company': 'Company Projects',
            'nav.external': 'External Projects',
            'nav.previous': 'Previous Projects',
            'sec.company': 'Our Signature Developments',
            'sec.company.sub': 'Exclusive residential projects developed entirely by Obour Realestate Development.',
            'sec.external': 'Marketed Projects',
            'sec.external.sub': 'Premium real estate opportunities we market across Obour City.',
            'sec.previous': 'Completed Projects',
            'sec.previous.sub': 'A portfolio of our successfully delivered and fully occupied developments.',
            'lbl.location': 'Location',
            'lbl.price': 'From',
            'btn.details': 'View Details',
            'contact.title': 'Get In Touch',
            'contact.sub': 'Ready to find your dream home? Contact us today.',
            'contact.form.name': 'Full Name',
            'contact.form.phone': 'Phone Number',
            'contact.form.msg': 'Message',
            'btn.send': 'Send Message',
            'footer.desc': 'Building the future of Obour City with premium residential developments and unparalleled architectural excellence.',
            'footer.links': 'Quick Links',
            'footer.contact': 'Contact Info',
            'footer.copy': '© 2026 Obour Realestate Development. All rights reserved.',
            'lang.btn': 'عربي',
            'sec.projects': 'Projects Portfolio',
            'sec.projects.sub': 'Explore our wide range of real estate developments in Obour City'
        },
        'ar': {
            'nav.home': 'الرئيسية',
            'nav.about': 'من نحن',
            'nav.projects': 'مشاريعنا',
            'nav.contact': 'اتصل بنا',
            'hero.title': 'نبني الحياة العصرية في مدينة العبور',
            'hero.subtitle': 'مشاريع سكنية فاخرة مصممة للمستقبل. اختبر الفخامة والراحة والجودة الاستثنائية مع شركة العبور للتطوير العقاري.',
            'btn.projects': 'عرض المشاريع',
            'btn.contact': 'اتصل بنا',
            'about.title': 'عن الشركة',
            'about.desc1': 'شركة العبور للتطوير العقاري هي شركة رائدة متخصصة في مشاريع الشقق السكنية والحياة الحضرية الحديثة في مدينة العبور.',
            'about.desc2': 'نلتزم بمعايير الجودة والتصميم المبتكر والتميز المعماري لإنشاء مساحات تلهم وترتقي بمستوى المعيشة.',
            'feat.vision': 'رؤيتنا',
            'feat.vision.desc': 'قيادة التحول في الحياة الحضرية في مدينة العبور من خلال مشاريع عقارية مبتكرة ومستدامة وفاخرة.',
            'feat.quality': 'معايير الجودة',
            'feat.quality.desc': 'نلتزم بأعلى معايير البناء، ونستخدم مواد فاخرة وممارسات هندسية حديثة.',
            'nav.company': 'مشاريع الشركة',
            'nav.external': 'مشاريع خارجية',
            'nav.previous': 'مشاريع سابقة',
            'sec.company': 'مشاريعنا المميزة',
            'sec.company.sub': 'مشاريع سكنية حصرية من تطوير شركة العبور للتطوير العقاري.',
            'sec.external': 'مشاريع نسوقها',
            'sec.external.sub': 'فرص عقارية متميزة نسوقها في جميع أنحاء مدينة العبور.',
            'sec.previous': 'مشاريع مكتملة',
            'sec.previous.sub': 'محفظة أعمالنا من المشاريع التي تم تسليمها وإشغالها بنجاح.',
            'lbl.location': 'الموقع',
            'lbl.price': 'تبدأ من',
            'btn.details': 'عرض التفاصيل',
            'contact.title': 'تواصل معنا',
            'contact.sub': 'هل أنت مستعد للعثور على منزل أحلامك؟ اتصل بنا اليوم.',
            'contact.form.name': 'الاسم بالكامل',
            'contact.form.phone': 'رقم الهاتف',
            'contact.form.msg': 'الرسالة',
            'btn.send': 'إرسال الرسالة',
            'footer.desc': 'نبني مستقبل مدينة العبور بمشاريع سكنية فاخرة وتميز معماري لا مثيل له.',
            'footer.links': 'روابط سريعة',
            'footer.contact': 'معلومات الاتصال',
            'footer.copy': '© 2026 شركة العبور للتطوير العقاري. جميع الحقوق محفوظة.',
            'lang.btn': 'EN',
            'sec.projects': 'محفظة المشاريع',
            'sec.projects.sub': 'استكشف مجموعتنا الواسعة من المشاريع العقارية في مدينة العبور'
        }
    };

    let currentLang = localStorage.getItem('lang') || 'en';
    setLanguage(currentLang);

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(currentLang);
    });

    function setLanguage(lang) {
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        localStorage.setItem('lang', lang);
        
        langToggle.querySelector('span').textContent = translations[lang]['lang.btn'];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
    }

    // === Mobile Navigation ===
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            mobileIcon.className = 'fas fa-times';
        } else {
            mobileIcon.className = 'fas fa-bars';
        }
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileIcon.className = 'fas fa-bars';
        });
    });

    // === Header Scroll Effect ===
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = 'var(--shadow-md)';
            header.style.padding = '0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '0.5rem 0';
        }
    });

    // === Scroll Animations ===
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.fade-up-element');
    
    animateElements.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });

    // === Smooth Scrolling ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Navigating between project sections logic
    const projectCards = document.querySelectorAll('.nav-card');
    const projectSections = document.querySelectorAll('.project-section');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const target = card.getAttribute('data-target');
            
            // Hide all sections First
            projectSections.forEach(sec => sec.style.display = 'none');
            
            // Show target section
            const targetSec = document.getElementById(target);
            if(targetSec) {
                targetSec.style.display = 'block';
                // Trigger reflow for animation
                void targetSec.offsetWidth;
                
                // Re-observe animations in the new section
                const newAnims = targetSec.querySelectorAll('.fade-up-element');
                newAnims.forEach(el => {
                    el.classList.remove('visible');
                    observer.observe(el);
                });
                
                // Scroll to section
                const headerOffset = 80;
                const elementPosition = targetSec.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });
    });
});
