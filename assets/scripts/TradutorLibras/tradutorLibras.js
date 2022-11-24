/** ===================
    CONFIGURAÇÃO DO
    TRADUTOR EM LIBRAS
    ===================
*/

var textBoxInput = document.getElementById("textareaFrom")
var textBoxOutput = document.getElementById("textareaTo")
var btnComplete = document.getElementById("btnComplete")
var btnClean = document.getElementById("btnClean");

function uploadText() {
  textBoxOutput.innerHTML = textBoxInput.value
}

btnComplete.addEventListener("click", uploadText);

function cleanText() {
  if ((textBoxInput.value !== 0) && (textBoxOutput.innerText !== 0)) {
    textBoxInput.value = "";
    textBoxOutput.innerText = "Seu texto aparecerá aqui!";
  }
};

btnClean.addEventListener("click", cleanText);