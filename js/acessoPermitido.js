const questionario = document.querySelector("[data-questionario]");
const dataCorreta = "2021-09-18";
const nomeCorreto = "Pedro";
const campoAviso = document.querySelector(".campo__aviso");
const botaoSurpresa2 = document.querySelector(".surpresa01__botao");

questionario.addEventListener("submit", (e) => {
    e.preventDefault();
    let respostaData = e.target.elements["data__ficada"].value;
    let respostaNome = e.target.elements["questionario__amor"].value;

    if (verificaData(respostaData) && verificaNome(respostaNome)) {
        window.location.href = './surpresa01.html';
    } else {
        campoAviso.classList.remove("hide");
    }
})

function verificaData(data){
    if (data == dataCorreta){
        return true;
    } else {
        return false;
    }
}

function verificaNome(nome){
    if (nome == nomeCorreto){
        return true;
    } else {
        return false;
    }
}
