// Schnee-Effekt
let snowEnabled = true;

function createSnowflake() {
    if (!snowEnabled) return;

    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Zufällige Größe
    const size = Math.random() * 5 + 2;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;

    // Startposition
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.top = '-10px';

    // Animation
    const duration = Math.random() * 5 + 5;
    snowflake.style.animation = `fall ${duration}s linear forwards`;

    document.getElementById('snow').appendChild(snowflake);

    // Entferne Schneeflocke nach der Animation
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

// CSS für fallende Animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Starte Schneefall
setInterval(createSnowflake, 50);

// Schnee an/aus Funktion
function toggleSnow() {
    snowEnabled = !snowEnabled;
    const snowContainer = document.getElementById('snow');
    const button = document.querySelector('.snow-btn');

    if (!snowEnabled) {
        snowContainer.innerHTML = '';
        button.textContent = '❄️ Schnee einschalten';
    } else {
        button.textContent = '❄️ Schnee ausschalten';
    }
}

// Konfetti-Effekt beim Klick auf die Karte
document.querySelector('.card').addEventListener('click', function() {
    if (!snowEnabled) return;

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createSnowflake();
        }, i * 100);
    }
});