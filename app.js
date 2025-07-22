"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();
        let a = (b) => {
            for (let i = 1; i <= b; i++) {

                $('.textbox').append(`${b}`);

            }
        }
        a($('input').val())
    });

});

