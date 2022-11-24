/** ===================
    CONFIGURAÇÃO DO
    MODO "DARK E LIGHT"
    ===================
*/

// AQUI ELE PEGARÁ O ELEMENTO COM ESSE ID (NO CASO, O SOL E A LUA)
var icon = document.getElementById("icon");

// UM EVENTO DE "CLICK" RESULTARÁ EM UMA FUNÇÃO
icon.onclick = function() {

    // PEGANDO O CORPO (BODY) DAS PÁGINAS E TROCANDO (TOGGLE) PARA ESSA CLASSE "DARK-THEME"
    document.body.classList.toggle("dark-theme");

    var theme

    // SE O CORPO (BODY) DO DOCUMENTO CONTER A CLASSE "DARK-THEME", MUDE O ÍCONE PARA SOL. CASO CONTRÁRIO, VÁ PARA LUA
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "/assets/img/DarkLight/moon.png";
        theme = "DARK"
    }else {
        icon.src = "/assets/img/DarkLight/sun.png";
        theme = "LIGHT"
    }

    localStorage.setItem("PageTheme", JSON.stringify(theme))
} 

// ARMAZENAR A ESCOLHA DO TEMA
let GetTheme = JSON.parse(localStorage.getItem("PageTheme"))

if (GetTheme === "DARK") {
    document.body.classList = "dark-theme"
    icon.src = "/assets/img/DarkLight/moon.png";
}


