// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$('.carousel').carousel({
    interval: 3000
});

function toggle() {
    var trailer = document.querySelector('.trailer');
    trailer.classList.toggle('active');
    var video = document.querySelector("video");
    video.pause();
    video.currentTime = 0;
};

$(document).ready(function () {
    $('.btn-up').fadeOut();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.btn-up').fadeIn();
        } else {
            $('.btn-up').fadeOut();
        }
    });
    $('.btn-up').click(function () {
        $('html ,body').animate({ scrollTop: 0 }, 600);
    })
});

$(function () {
    $("body").niceScroll({
        cursorcolor: "rgb(190, 201, 207)", 
        cursorwidth: "10px" }
          );
});