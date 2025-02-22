//CALCULADORA SIMPLES DO SIMPLES
let display = document.getElementById("display");

//ADICIONA O NÚMERO
function adicionarNumero(num) {    
    display.innerText += num;
}
//ADICIONA O OPERADOR
function adicionarOperador(operador) {
    display.innerText += operador;
}
//LIMPA A LABLE
function limparDisplay() {
    display.innerText = "";
}

function resultado() {
    try {
        display.innerText = eval(display.innerText);//TRANSFORMA A STRING EM UMA CONTA MATEMÁTICA
    } catch (e) {
        display.innerText = "Erro";//SE A STRING NÃO É RECONHECIDA, GERRA ERRO
    }
}
