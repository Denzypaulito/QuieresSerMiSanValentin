// Obtener los elementos
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const customAlert = document.getElementById('customAlert');
// Obtener elementos del modal
const modal = document.getElementById('customModal');
const closeModal = document.querySelector('.close-modal');

// Asegurar que el modal esté oculto al cargar la página
modal.style.display = 'none';
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
            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;
            miniButton.style.left = `${newX}px`;
            miniButton.style.top = `${newY}px`;
        });
    }
}



// Función para mostrar el modal al hacer clic en "Sí"
btnYes.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Función para cerrar el modal al hacer clic en la "X"
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Función para el botón "No"
btnNo.addEventListener('click', () => {
    btnNo.style.display = 'none'; // Ocultar el botón "No" original
    createMiniButtons(); // Crear botones pequeños



});