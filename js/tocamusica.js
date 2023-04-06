const musica = document.querySelector(".surpresa__música");
const botaoMusica = document.querySelector(".botao__música");

botaoMusica.addEventListener("click", () => {
    musica.play();
})