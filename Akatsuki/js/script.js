const section = document.querySelectorAll('section');
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        if (top > offset && top < offset + height) {
            sec.classList.add('star-animation')
        }
        else {
            sec.classList.remove('star-animation')
        }
    })

    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);


}

var btnMostrar = document.getElementById("btn-Mostrar");
btnMostrar.addEventListener("click", function () {
    alert("Ola Visitante , bem vindo !!");
});

function mostrar() {
    alert("A Akatsuki é uma organização secreta formada por ninjas renegados no universo de Naruto. Seu objetivo principal é capturar as poderosas Bestas com Caudas para alcançar um controle global e realizar seus planos ambiciosos. Cada membro da Akatsuki é excepcionalmente poderoso, com habilidades únicas e passados marcados por tragédias e conflitos. Caracterizados por seus mantos negros com nuvens vermelhas, eles atuam nas sombras, buscando cumprir seus propósitos por meios sombrios e calculistas. Com seus ideais e motivações distintas, a Akatsuki é uma das facções mais icônicas da série.")
}

