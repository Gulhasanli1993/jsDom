"use strict";
$(document).ready(function () {

    let input = document.querySelector("input[type='number']");
    let addBtn = document.querySelector(".btn h3");
    let section = document.getElementById("jstask");
    addBtn.addEventListener("click", function () {
        let Number = Number(input.value);
        section.innerHTML = " ";

        for (let i = 1; i <= 5; i++) {
            let p = document.createElement("p");
            p.textContent = i;
            section.appendChild(p);
        }
    })
});
