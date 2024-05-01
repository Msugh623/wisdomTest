let no = document.getElementById("No");
let body = document.querySelector("body");
let dodgeLeft = Math.floor(Math.random() * 300);
let dodgeBottom = Math.floor(Math.random() * 220);
let html = document.querySelector("html");
let h1 = document.querySelector("h1");
let yes = document.getElementById("Yes");
const Yes = document.getElementById("YesA")
let parannoy = 0;

no.addEventListener("mouseover", function () {
    parannoy++;
    let nO = document.getElementsByClassName("Yes");

    if (parannoy > 8) {
        Yes.innerHTML += "<input type='button' class='Yes' value='Not stupid'>"

        for (let i = 0; i < nO.length; i++) {
            nO[i].addEventListener("click", function () {
                this.style.display = "none";
            });
            nO[i].addEventListener("mousemove", function () {
                 nO[i].style.position = "relative";
                 nO[i].style.left = String(dodgeLeft + "px");
                 nO[i].style.bottom = String(dodgeBottom + "px");
                 dodgeLeft = Math.floor(Math.random() * 320);
                 dodgeBottom = Math.floor(Math.random() * 220);
            });
            nO[i].style.left = Math.floor(Math.random() * 51) + "px";
        }
    }
    else {
        no.style.position = "relative";
        no.style.left = String(dodgeLeft + "px");
        no.style.bottom = String(dodgeBottom + "px");
        dodgeLeft = Math.floor(Math.random() * 320);
        dodgeBottom = Math.floor(Math.random() * 200);
    }
});

no.addEventListener("mousemove", function () {
    no.style.top = String(dodgeLeft + "px");
    no.style.right = String(dodgeBottom + "px");

    dodgeBottom = Math.floor(Math.random() * 300);
    dodgeLeft = Math.floor(Math.random() * 200);
});

body.addEventListener("mouseover", function () {
    no.style.position = "relative";
    no.style.left = String(dodgeLeft + "px");
    no.style.bottom = String(dodgeBottom + "px");
    dodgeLeft = Math.floor(Math.random() * 320);
    dodgeBottom = Math.floor(Math.random() * 200);
});

body.addEventListener("mouseleave", function () {
    no.style.top = String(dodgeLeft + "px");
    no.style.right = String(dodgeBottom + "px");

    dodgeBottom = Math.floor(Math.random() * 300);
    dodgeLeft = Math.floor(Math.random() * 200);
});

html.addEventListener("mouseover", function () {
    no.style.position = "relative";
    no.style.left = String(dodgeLeft + "px");
    no.style.bottom = String(dodgeBottom + "px");
    dodgeLeft = Math.floor(Math.random() * 320);
    dodgeBottom = Math.floor(Math.random() * 200);
});

html.addEventListener("mouseleave", function () {
    no.style.top = String(dodgeLeft + "px");
    no.style.right = String(dodgeBottom + "px");

    dodgeBottom = Math.floor(Math.random() * 300);
    dodgeLeft = Math.floor(Math.random() * 200);
});

no.onclick = function () {
    h1.textContent = "Oh ok!";
    no.style.display = "none";
yes.style.display="none"

}

yes.onclick = function () {
    h1.textContent = "Yes i knew it!";
}