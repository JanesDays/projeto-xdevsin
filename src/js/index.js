/*

OBJETIVO 1 - quando clicar na seta de avançar temo sque mostrar o proximo cartao da lista
   - passo 1 - dar um jeito de pegar o elementto HTML da seta avancar
   - passo 2 - passodar um jeito de identificar o clique do usuário na seta avancar 
   - passo 3 - fazer aparecer o proximo cartao da lista
   - passo 4 - buscar o cartao que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartao anterior da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
    - passo 2 - dar um jeito de identificar o clique do usuario na seta voltar
    - passo 3 - fazer aparecer o cartao anterior da lista
    - passo 4 - buscar o cartao que esta selecionado e esconder

    */

    //OBJETIVO 1 - quando clicar na seta de avançar temo sque mostrar o proximo cartao da lista
//- passo 1 - dar um jeito de pegar o elementto HTML da seta avancar

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
//passo 3 - fazer aparecer o proximo cartao da lista
const cartoes = document.querySelectorAll(".cartao");

//- passo 2 dar um jeito de identificar o clique do usuário na seta avancar 
btnAvancar.addEventListener("click", function (){
    if (cartaoAtual === cartoes.length - 1) return;

 //passo 4 - buscar o cartao que esta selecionado e esconder   
const cartaoSelecionado = document.querySelector(".selecionado");
cartaoSelecionado.classList.remove("selecionado");

cartaoAtual++;
cartoes[cartaoAtual].classList.add("selecionado");

});

//OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartao anterior da lista
btnVoltar.addEventListener("click", function () {

    if(cartaoAtual === 0) return;

const cartaoSelecionado = document.querySelector(".selecionado");
cartaoSelecionado.classList.remove("selecionado");

cartaoAtual--;
cartoes[cartaoAtual].classList.add("selecionado");

});




