document.addEventListener('DOMContentLoaded', function () {
    const botonesMeGusta = document.querySelectorAll('.boton-me-gusta');

    botonesMeGusta.forEach((boton) => {
        const section = boton.getAttribute('data-section');
        let likeCount = localStorage.getItem(`like-${section}`) || 0;
        document.getElementById(`like-${section}`).textContent = likeCount;

        boton.addEventListener('click', function () {
            likeCount++;
            localStorage.setItem(`like-${section}`, likeCount);
            document.getElementById(`like-${section}`).textContent = likeCount;
        });
    });
});
