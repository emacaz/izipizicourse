document.addEventListener("DOMContentLoaded", function() {
    const sloganElement = document.getElementById("slogan_id");
    const slogans = [
        "We're getting better for you. Come back later or write us on <a href='https://api.whatsapp.com/send?phone=573224504439&text=Hello!%20%F0%9F%91%8B%20Quiero%20tomar%20el%20programa%20English%20Mastery.'>WhatsApp</a>",
        "Estamos mejorando para ti. Regresa después o escríbenos al <a href='https://api.whatsapp.com/send?phone=573224504439&text=Hello!%20%F0%9F%91%8B%20Quiero%20tomar%20el%20programa%20English%20Mastery.'>WhatsApp</a>",
        // Agregar más mensajes según sea necesario
    ];

    let currentSloganIndex = 0;

    function changeSlogan() {
        sloganElement.innerHTML = slogans[currentSloganIndex];
        sloganElement.style.animation = "slideAnimation 1s ease-in-out"; /* Aplica la animación */
        currentSloganIndex = (currentSloganIndex + 1) % slogans.length;
    }

    // Cambia el slogan cada 5 segundos (5000 milisegundos)
    setInterval(changeSlogan, 5000);
});
