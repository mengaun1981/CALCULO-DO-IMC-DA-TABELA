document.querySelector(".titulo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var paulo = document.querySelector(`#linhaPaulo`);
var pesoPaulo = paulo.querySelector(`.info-peso`).textContent;
var alturaPaulo = paulo.querySelector(`.info-altura`).textContent;
var imcPaulo = pesoPaulo / (alturaPaulo * alturaPaulo);
paulo.querySelector(".info-imc").textContent = imcPaulo;