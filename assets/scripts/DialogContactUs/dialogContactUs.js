/** ==================
    AGREDECIMENTO PELO
    CONTATO
    ================== */

var modal = document.querySelector("dialog")
var btnClose = document.querySelector("dialog button")

// FALE CONOSCO
const btnSubmitContact = document.getElementById("submitContact")

btnSubmitContact.onclick = function() {
    const fieldsContactUs = document.querySelectorAll(".fieldsContactUs") // CAMPOS

    if ((fieldsContactUs[0].value !== '') && (fieldsContactUs[1].value !== '') && (fieldsContactUs[2].value !== '')) {
        modal.showModal()
        fieldsContactUs[0].value = ''
        fieldsContactUs[1].value = ''
        fieldsContactUs[2].value = ''
    }
}

// BOTÃO "OK" DO DIALOG
btnClose.onclick = function () {
    modal.close()
}

