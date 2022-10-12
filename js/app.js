const filter__btn = document.querySelector(".filter__btn");
const filter__block = document.querySelector(".filrt__block");
const close_btn = document.querySelector(".btn__close");

filter__btn.addEventListener("click", function(){
    filter__block.classList.toggle("active");
    close_btn.classList.toggle("active");
})