// Obtener los elementos
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const customAlert = document.getElementById('customAlert');
const closeModal = document.getElementById('closeModal');

// Función para mostrar el modal personalizado
btnYes.addEventListener('click', () => {
    customAlert.style.display = 'flex'; // Mostrar el modal
});

// Función para cerrar el modal
closeModal.addEventListener('click', () => {
    customAlert.style.display = 'none'; // Ocultar el modal
});

// Función para crear botones pequeños (animación del botón "No")
function createMiniButtons() {
    const numButtons = 5; // Número de botones pequeños
    for (let i = 0; i < numButtons; i++) {
        const miniButton = document.createElement('button');
        miniButton.classList.add('mini-button');
        miniButton.innerText = 'No';

        // Asegurarse de que los botones no se salgan de la pantalla
        const maxX = window.innerWidth - miniButton.offsetWidth;
        const maxY = window.innerHeight - miniButton.offsetHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        miniButton.style.left = `${randomX}px`;
        miniButton.style.top = `${randomY}px`;
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