"use strict";
$(document).ready(function () {
    let input = document.getElementById("numberInput");
    let btn = document.getElementsByClassName("btn");
    let textbox = document.getElementsByClassName("textbox");
    btn.addEventListener("click", function () {

        let deyer = parseInt(input.value);
        let text = "";
        for (let i = 0; i < deyer; i++) {
            text += deyer;
        }
        textbox.innerText = text;
    });
});

