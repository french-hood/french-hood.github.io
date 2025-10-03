// Configuration du lien de redirection
const REDIRECT_URL = "about:blank"

// Fonction de redirection
function redirectToLink() {
    // Animation de clic avant la redirection
    const button = document.querySelector('.join-btn');
    button.style.transform = 'scale(0.95)';
    
    // Effet de particules
    createParticles();
    
    // Redirection après un court délai pour l'animation
    setTimeout(() => {
        window.open(REDIRECT_URL, '_blank');
    }, 300);
}

// Animation des étoiles supplémentaires
function createStars() {
    const starsContainer = document.querySelector('.stars');
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: twinkle ${Math.random() * 3 + 1}s infinite;
            opacity: ${Math.random() * 0.8 + 0.2};
        `;
        starsContainer.appendChild(star);
    }
}

// CSS pour l'animation des étoiles
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.2; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
    }
`;
document.head.appendChild(style);

// Interaction du bouton
document.addEventListener('DOMContentLoaded', function() {
    const joinBtn = document.querySelector('.join-btn');
    
    // Effet de clic - maintenant géré par la fonction redirectToLink()
    // L'événement onclick dans le HTML appelle redirectToLink()
    
    // Effet de survol amélioré
    joinBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    joinBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-3px) scale(1)';
    });
    
    // Créer les étoiles au chargement
    createStars();
});

// Fonction pour créer des particules
function createParticles() {
    const button = document.querySelector('.join-btn');
    const rect = button.getBoundingClientRect();
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #8A2BE2;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
            animation: particle-explosion 1s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        // Supprimer la particule après l'animation
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// CSS pour l'animation des particules
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particle-explosion {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Fonction pour afficher un message
function showMessage() {
    const message = document.createElement('div');
    message.textContent = 'Bienvenue dans l\'espace ! 🚀';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(138, 43, 226, 0.9);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        font-family: 'Orbitron', monospace;
        font-weight: 700;
        z-index: 1001;
        animation: message-appear 0.5s ease-out;
    `;
    
    document.body.appendChild(message);
    
    // Supprimer le message après 3 secondes
    setTimeout(() => {
        message.style.animation = 'message-disappear 0.5s ease-out forwards';
        setTimeout(() => {
            message.remove();
        }, 500);
    }, 3000);
}

// CSS pour l'animation du message
const messageStyle = document.createElement('style');
messageStyle.textContent = `
    @keyframes message-appear {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes message-disappear {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
    }
`;
document.head.appendChild(messageStyle);
