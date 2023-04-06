const campoNome = document.querySelector("[required]");
const formulario = document.querySelector("[data-formulario]");
const nomeCorreto = "Andressa Laynne";
const nomeMeme = "Bruna Marquezine";

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.elements["nome"].value == nomeCorreto){
        window.location.href = './pages/AcessoPermitido.html';
    } else if (e.target.elements["nome"].value == nomeMeme){
        window.location.href = './pages/acessoNegadoBruna.html';
    } else {
        window.location.href = './pages/acessoNegado.html';
    }        
})




