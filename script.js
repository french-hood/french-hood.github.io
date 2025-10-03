// Configuration des liens de redirection
const REDIRECT_URL = "about:blank";
const DISCORD_URL = "https://discord.gg/uf72zDByTd"; // Changez par votre lien Discord
const TIKTOK_URL = "https://tiktok.com/@frenchhoodz"; // Changez par votre lien TikTok

// Fonction de redirection pour le bouton JOIN
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

// Fonction de redirection pour le bouton Discord
function redirectToDiscord() {
    const button = document.querySelector('.discord-btn');
    button.style.transform = 'scale(0.95)';
    
    // Effet de particules avec couleur Discord
    createParticles('discord');
    
    setTimeout(() => {
        window.open(DISCORD_URL, '_blank');
    }, 300);
}

// Fonction de redirection pour le bouton TikTok
function redirectToTikTok() {
    const button = document.querySelector('.tiktok-btn');
    button.style.transform = 'scale(0.95)';
    
    // Effet de particules avec couleur TikTok
    createParticles('tiktok');
    
    setTimeout(() => {
        window.open(TIKTOK_URL, '_blank');
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

// Interaction des boutons
document.addEventListener('DOMContentLoaded', function() {
    const joinBtn = document.querySelector('.join-btn');
    const discordBtn = document.querySelector('.discord-btn');
    const tiktokBtn = document.querySelector('.tiktok-btn');
    
    // Effet de survol pour tous les boutons
    [joinBtn, discordBtn, tiktokBtn].forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-3px) scale(1)';
        });
    });
    
    // Créer les étoiles au chargement
    createStars();
    
    // Initialiser le curseur météorite
    initCustomCursor();
});

// Fonction pour créer des particules
function createParticles(type = 'join') {
    let button, color;
    
    switch(type) {
        case 'discord':
            button = document.querySelector('.discord-btn');
            color = '#5865F2';
            break;
        case 'tiktok':
            button = document.querySelector('.tiktok-btn');
            color = '#FF0050';
            break;
        default:
            button = document.querySelector('.join-btn');
            color = '#8A2BE2';
    }
    
    const rect = button.getBoundingClientRect();
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: ${color};
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

// Fonction pour initialiser le curseur météorite personnalisé amélioré
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const meteoriteCore = document.querySelector('.meteorite-core');
    const meteoriteBody = document.querySelector('.meteorite-body');
    const meteoriteTrail = document.querySelector('.meteorite-trail');
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;
    
    // Particules qui suivent le curseur
    const particles = [];
    const maxParticles = 15;
    
    // Suivre le mouvement de la souris
    document.addEventListener('mousemove', (e) => {
        lastMouseX = mouseX;
        lastMouseY = mouseY;
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Calculer la vélocité pour les effets
        velocityX = mouseX - lastMouseX;
        velocityY = mouseY - lastMouseY;
        
        // Créer des particules basées sur la vitesse
        if (Math.abs(velocityX) > 2 || Math.abs(velocityY) > 2) {
            createTrailParticle(mouseX, mouseY);
        }
    });
    
    // Animation fluide du curseur
    function animateCursor() {
        // Interpolation pour un mouvement fluide avec anticipation
        const targetX = mouseX + velocityX * 2;
        const targetY = mouseY + velocityY * 2;
        
        cursorX += (targetX - cursorX) * 0.12;
        cursorY += (targetY - cursorY) * 0.12;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Mettre à jour les particules
        updateParticles();
        
        requestAnimationFrame(animateCursor);
    }
    
    // Créer une particule de traînée
    function createTrailParticle(x, y) {
        if (particles.length >= maxParticles) {
            particles.shift().remove();
        }
        
        const particle = document.createElement('div');
        particle.className = 'trail-particle';
        particle.style.cssText = `
            position: fixed;
            width: 3px;
            height: 3px;
            background: radial-gradient(circle, #FFD700, #FF6B35);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            left: ${x}px;
            top: ${y}px;
            box-shadow: 0 0 6px #FFD700;
            animation: trail-particle-fade 1s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        particles.push(particle);
        
        // Supprimer la particule après l'animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 1000);
    }
    
    // Mettre à jour les particules existantes
    function updateParticles() {
        particles.forEach((particle, index) => {
            if (!particle.parentNode) {
                particles.splice(index, 1);
            }
        });
    }
    
    animateCursor();
    
    // Effet de survol sur les boutons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            // Créer des étincelles supplémentaires
            createSparkBurst(cursorX, cursorY);
        });
        
        button.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
    
    // Effet de clic amélioré
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.7)';
        meteoriteCore.style.transform = 'translate(-50%, -50%) scale(0.8)';
        meteoriteBody.style.transform = 'translate(-50%, -50%) rotate(45deg) scale(0.9)';
        
        // Créer une explosion de particules au clic
        createClickExplosion(cursorX, cursorY);
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
        meteoriteCore.style.transform = 'translate(-50%, -50%) scale(1)';
        meteoriteBody.style.transform = 'translate(-50%, -50%) rotate(45deg) scale(1)';
    });
    
    // Cacher le curseur quand la souris quitte la fenêtre
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
    
    // Créer une explosion d'étincelles
    function createSparkBurst(x, y) {
        for (let i = 0; i < 8; i++) {
            const spark = document.createElement('div');
            spark.style.cssText = `
                position: fixed;
                width: 2px;
                height: 2px;
                background: #FFD700;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9997;
                left: ${x}px;
                top: ${y}px;
                box-shadow: 0 0 4px #FFD700;
                animation: spark-burst 0.8s ease-out forwards;
            `;
            
            // Direction aléatoire pour les étincelles
            const angle = (i / 8) * Math.PI * 2;
            const distance = 20 + Math.random() * 15;
            const endX = x + Math.cos(angle) * distance;
            const endY = y + Math.sin(angle) * distance;
            
            spark.style.setProperty('--end-x', endX + 'px');
            spark.style.setProperty('--end-y', endY + 'px');
            
            document.body.appendChild(spark);
            
            setTimeout(() => {
                if (spark.parentNode) {
                    spark.remove();
                }
            }, 800);
        }
    }
    
    // Créer une explosion au clic
    function createClickExplosion(x, y) {
        for (let i = 0; i < 12; i++) {
            const explosion = document.createElement('div');
            explosion.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: radial-gradient(circle, #FFFFFF, #FF6B35);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9997;
                left: ${x}px;
                top: ${y}px;
                box-shadow: 0 0 8px #FF6B35;
                animation: click-explosion 0.6s ease-out forwards;
            `;
            
            const angle = (i / 12) * Math.PI * 2;
            const distance = 25 + Math.random() * 20;
            const endX = x + Math.cos(angle) * distance;
            const endY = y + Math.sin(angle) * distance;
            
            explosion.style.setProperty('--end-x', endX + 'px');
            explosion.style.setProperty('--end-y', endY + 'px');
            
            document.body.appendChild(explosion);
            
            setTimeout(() => {
                if (explosion.parentNode) {
                    explosion.remove();
                }
            }, 600);
        }
    }
}
