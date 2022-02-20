$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });
    // music
    var mySong = document.getElementById("mySong");
    var icon = document.getElementById("icon");

    icon.onclick = function (){
        if(mySong.paused){
            mySong.play();
            icon.src = "img/pause.png";
        }else {
            mySong.pause();
            icon.src = "img/play.png";
        }
    }
    //Diar
    var DiarSong = document.getElementById("DiarSong");
    var icon2 = document.getElementById("icon2");

    icon2.onclick = function (){
        if(DiarSong.paused){
            DiarSong.play();
            icon2.src = "img/pause.png";
        }else {
            DiarSong.pause();
            icon2.src = "img/play.png";
        }
    }
    //Gaba
    var GabitSong = document.getElementById("GabitSong");
    var icon3 = document.getElementById("icon3");

    icon3.onclick = function (){
        if(GabitSong.paused){
            GabitSong.play();
            icon3.src = "img/pause.png";
        }else {
            GabitSong.pause();
            icon3.src = "img/play.png";
        }
    }

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});