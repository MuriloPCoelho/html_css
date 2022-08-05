const button = document.querySelector('.button');
const buttonText = document.querySelector('.button__text');

button.addEventListener("mouseover", () => {
    buttonText.style.animation = "deslizar 0.3s forwards";
});

button.addEventListener("mouseleave", () => {
    buttonText.style.animation = "";
})



