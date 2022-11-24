/** ==============
    'LOADING PAGE'
    ============== */

// SELECIONANDO O ELEMENTO QUE CONTÉM ESSA CLASSE E CHAMANDO ELA DE "loadingPage"
const loadingPage = document.querySelector(".p-loading");

// ENQAUNTO O CONTEÚDO DA PÁGINA NÃO CARREGAR, A PÁGINA DE CARREGAMENTO FICARÁ ATIVA
window.addEventListener("load",function() {
    loadingPage.style.display = "none";
});