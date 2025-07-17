
let newinput = document.querySelectorAll("input");
let newbutton = document.querySelector("button");

newbutton.addEventListener("click", () => {
    newinput.forEach(input => {
        console.log(input.value);
    });
});

