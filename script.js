// Obtener los botones
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');

// Función para crear botones pequeños
function createMiniButtons() {
    const numButtons = 5; // Número de botones pequeños
    for (let i = 0; i < numButtons; i++) {
        const miniButton = document.createElement('button');
        miniButton.classList.add('mini-button');
        miniButton.innerText = 'No';
        miniButton.style.left = `${Math.random() * window.innerWidth}px`;
        miniButton.style.top = `${Math.random() * window.innerHeight}px`;
        document.body.appendChild(miniButton);

        // Mover los botones pequeños aleatoriamente
        miniButton.addEventListener('mouseover', () => {
            miniButton.style.left = `${Math.random() * window.innerWidth}px`;
            miniButton.style.top = `${Math.random() * window.innerHeight}px`;
        });
    }
}

// Función para el botón "No"
btnNo.addEventListener('click', () => {
    btnNo.style.display = 'none'; // Ocultar el botón "No" original
    createMiniButtons(); // Crear botones pequeños
});

// Función para el botón "Sí"
btnYes.addEventListener('click', () => {
    alert('¡Sabía que dirías que sí! 💖 ¡Feliz San Valentín!');
});