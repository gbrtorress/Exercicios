/*

OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartao da lista
- passo 1 - dar um jeito de pegar o elemento html da seta avançar
- passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
- passo 3 - fazer aparecer o proximo cartao da lista
- passo 4 - bucar o cartão que esta slecionado e esconder


OBJETIVO 2 - quando clicarmos na seta voltar temos que mostrar o cartao anterior da lista 
- passo 1 - dar um jeito d epegar o elemento html da seta volta
- passo 2 - dar um  jeito de identificar o clique do usuario na seta vooltar
- passo 3 - fazer aparecer o cartao enteriror da lista
- passo 4 - buscar o cartao que esta slecionado e esconder

*/

//passo 1 - dar um jeito de pegar o elemento html da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartoesSelecionado() {
  const cartaSelecionado = document.querySelector(".selecionado");
  cartaSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}

//passo 2 - dar um jeito de identificar o clique do usuario na seta avançar
btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartoesSelecionado();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

/* OBJETIVO 2 - quando clicarmos na seta voltar temos que mostrar o cartao anterior da lista 
- passo 1 - dar um jeito d epegar o elemento html da seta volta
- passo 2 - dar um  jeito de identificar o clique do usuario na seta vooltar
- passo 3 - fazer aparecer o cartao enteriror da lista
- passo 4 - buscar o cartao que esta slecionado e esconder
*/

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartoesSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});
