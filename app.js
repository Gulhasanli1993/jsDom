"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();

        let a = (a) => {
            for (let i = 1; i <= a; i++) {
                $('.col-md-12').append(`<h2>${i}</h2>`);
            }
        }
        a($('input').val())
    });


    $('h2').click(function (e) {
        e.preventDefault();
        $('h2').html('hello');
    });
});