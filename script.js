import luhnAlgoritmo from "./modules/luhnAlgoritm.js";
import cartoesAceitos from "./modules/regex.js";

const cartaoDesenho = {
    cartao: document.querySelector(".cartao"),
    numero: document.querySelector(".numeroCartao"),
    bandeira: document.querySelector(".bandeira"),
};
const numeroCartao = document.querySelector("#numeroCartao");
const botao = document.querySelector("#botao");
const feedback = document.querySelector(".resultado");

botao.addEventListener("click", handleClick);

function handleClick(event) {
    event.preventDefault();
    let numero = numeroCartao.value;

    //mudar numero no desenho
    cartaoDesenho.numero.innerText = numero;

    numero = numero.replaceAll(" ", "");

    let fornecedor = null;
    cartoesAceitos.forEach((item) => {
        if (item.regex.test(numero)) {
            fornecedor = item;
        }
    });

    if (fornecedor && luhnAlgoritmo(numero)) {
        cartaoDesenho.bandeira.src = fornecedor.img;
        cartaoDesenho.cartao.style.backgroundColor = fornecedor.cor;

        //Animação
        cartaoDesenho.cartao.classList.remove("invalido");
        cartaoDesenho.cartao.classList.add("valido");

        feedback.innerText = "Esse cartão é válido!";
        feedback.classList.add("valido");
    } else {
        cartaoDesenho.cartao.classList.remove("valido");
        cartaoDesenho.cartao.classList.remove("invalido");
        setTimeout(1);
        cartaoDesenho.cartao.classList.add("invalido");
        feedback.innerText =
            "Esse cartão não é válido, corrija os números ou troque de cartão!";
        feedback.classList.remove("valido");
    }
}
