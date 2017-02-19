var link_form = document.querySelector(".form-btn");
var modal_shadow = document.querySelector(".modal-shadow");
var modal_content = document.querySelector(".modal-content");
var modal_close = document.querySelector(".modal-content-close");
var modal_name = document.querySelector("[name=name]");
var form = document.querySelector(".feedback-form");
var modal_email = document.querySelector ("[name=email]");

link_form.addEventListener("click", function (event) {
    event.preventDefault();
    modal_shadow.classList.add("visible-modal-show");
    modal_content.classList.add("bounce-visible");
    modal_content.classList.add("visible-modal-show");
    modal_name.focus();
});

modal_close.addEventListener("click", function (event) {
    event.preventDefault();
    modal_content.classList.add("bounce-show");
    modal_content.offsetWidth = modal_content.offsetWidth;
     modal_content.classList.remove("bounce-show");
    modal_shadow.classList.remove("visible-modal-show");
    modal_content.classList.remove("visible-modal-show");
    modal_content.classList.remove("modal-error");
});

modal_shadow.addEventListener("click", function (event) {
    event.preventDefault();
    modal_shadow.classList.remove("visible-modal-show");
    modal_content.classList.remove("visible-modal-show");
});

form.addEventListener("submit", function (event) {
    if (! modal_name.value || !modal_email.value){
    event.preventDefault();
        modal_content.classList.remove("modal-error");
        modal_content.offsetWidth = modal_content.offsetWidth;
        modal_content.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function (event) {
    if(event.keyCode === 27){
        if(modal_shadow.classList.contains("visible-modal-show")){
            modal_shadow.classList.remove("visible-modal-show");
        }
    }
});

window.addEventListener("keydown", function (event) {
    if(event.keyCode === 27){
        if(modal_content.classList.contains("visible-modal-show")){
            modal_content.classList.remove("visible-modal-show");
            modal_content.classList.remove("modal-error");
        }
    }
});