document.addEventListener('DOMContentLoaded', () => {
    // 1. Seletores de Elementos
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.mobile-nav a, .desktop-nav a');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    // Elementos a serem animados no scroll
    const animateElements = document.querySelectorAll('.animate-scroll');
    
    // ==============================================
    // A. LÓGICA DE NAVEGAÇÃO MOBILE
    // ==============================================

    // Função para alternar o menu mobile
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('is-open');
            // Troca o ícone (hambúrguer <-> X)
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('bx-menu');
            icon.classList.toggle('bx-x'); 
        });
    }

    // Fecha o menu mobile ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav && mobileNav.classList.contains('is-open')) {
                mobileNav.classList.remove('is-open');
                const icon = menuToggle.querySelector('i');
                icon.classList.add('bx-menu');
                icon.classList.remove('bx-x');
            }
        });
    });

    // ==============================================
    // B. LÓGICA DO FORMULÁRIO DE CONTATO (MAILTO)
    // ==============================================
    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Mensagem de feedback inicial
            formStatus.textContent = 'Preparando e-mail...';
            formStatus.className = 'form-status';

            // Simula um pequeno delay antes de abrir o cliente de e-mail
            setTimeout(() => {
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;

                // Constrói o link mailto (codificando para evitar quebras de URL)
                const mailtoBody = `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`;
                const mailtoLink = `mailto:marciomateus152@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;
                
                // Abre o cliente de e-mail
                window.location.href = mailtoLink; 

                // Feedback visual após a ação
                formStatus.textContent = 'Cliente de e-mail aberto! Por favor, envie a mensagem.';
                formStatus.className = 'form-status success';
                contactForm.reset(); // Limpa o formulário
            }, 1000);
        });
    }
    
    // ==============================================
    // C. ANIMAÇÕES DE SCROLL (INTERSECTION OBSERVER)
    // ==============================================
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se o elemento estiver na viewport, adicione a classe de visibilidade
                entry.target.classList.add('is-visible');
                // Parar de observar o elemento para que a animação só ocorra uma vez (otimização)
                observer.unobserve(entry.target); 
            }
        });
    }, {
        rootMargin: '0px',
        // O elemento será animado quando 15% dele estiver visível
        threshold: 0.15 
    });

    // Observa todos os elementos com a classe .animate-scroll
    animateElements.forEach(element => {
        observer.observe(element);
    });
});