function openTab(event, tabName) {
    // 1. Ocultar todas las secciones
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // 2. Quitar clase active a todos los botones
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // 3. Mostrar la sección seleccionada
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    // 4. Activar el botón presionado
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    } else {
        // En caso de llamarlo desde un botón interno
        const targetBtn = Array.from(buttons).find(btn => 
            btn.getAttribute('onclick').includes(tabName)
        );
        if (targetBtn) targetBtn.classList.add('active');
    }
}