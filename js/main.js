$(document).ready(function() {
    // Preload
    if (
        $(window).load(function() {
            $("#preloader").fadeOut("slow", function() {
                $(this).remove();
                $('.cover__title').velocity({ opacity: 1 }, { delay: 1000, duration: 1000 });
                $('.cover__figure__name--1').velocity({ opacity: 1 }, { delay: 900, duration: 700 });
            });
        })
    );

    // modal
    $(".right__click").click(function() {
        $(".frameModal").fadeIn(300);
    });
    $(".close-iframe").click(function() {
        $(".frameModal").fadeOut(300);
    });
    // modal2
    $(".right__click1").click(function() {
        $(".frameModal1").fadeIn(300);
    });

    $(".modal__close").click(function() {
        $(".frameModal1").fadeOut(300);
    });
    // modal3
    $(".right__click2").click(function() {
        $(".frameModal2").fadeIn(300);
    });

    $(".modal__close").click(function() {
        $(".frameModal2").fadeOut(300);
    });
    // modal4
    $(".right__click3").click(function() {
        $(".frameModal3").fadeIn(300);
    });

    $(".modal__close").click(function() {
        $(".frameModal3").fadeOut(300);
    });
    // modal5
    $(".right__click4").click(function() {
        $(".frameModal4").fadeIn(300);
    });

    $(".modal__close").click(function() {
        $(".frameModal4").fadeOut(300);
    });
    // modal6
    $(".right__click5").click(function() {
        $(".frameModal5").fadeIn(300);
    });

    $(".modal__close").click(function() {
        $(".frameModal5").fadeOut(300);
    });
    // modal7
    $(".right__click6").click(function() {
        $(".frameModal6").fadeIn(300);
    });

    $(".modal__close").click(function() {
        $(".frameModal6").fadeOut(300);
    });

    // modal page2
    // 01
    $(".right__click01").click(function() {
        $(".frameModal01").fadeIn(300);
    });

    $(".modal1__close").click(function() {
        $(".frameModal01").fadeOut(300);
    });
    // 02
    $(".right__click02").click(function() {
        $(".frameModal02").fadeIn(300);
    });

    $(".modal1__close").click(function() {
        $(".frameModal02").fadeOut(300);
    });
    // 03
    $(".right__click03").click(function() {
        $(".frameModal03").fadeIn(300);
    });

    $(".modal1__close").click(function() {
        $(".frameModal03").fadeOut(300);
    });
    // 04
    $(".right__click04").click(function() {
        $(".frameModal04").fadeIn(300);
    });

    $(".modal1__close").click(function() {
        $(".frameModal04").fadeOut(300);
    });
    // 05
    $(".right__click05").click(function() {
        $(".frameModal05").fadeIn(300);
    });

    $(".modal1__close").click(function() {
        $(".frameModal05").fadeOut(300);
    });
    // 06
    $(".right__click06").click(function() {
        $(".frameModal06").fadeIn(300);
    });

    $(".modal1__close").click(function() {
        $(".frameModal06").fadeOut(300);
    });
    // 07
    $(".right__click07").click(function() {
        $(".frameModal07").fadeIn(300);
    });

    $(".modal1__close").click(function() {
        $(".frameModal07").fadeOut(300);
    });
    // 08
    $(".right__click08").click(function() {
        $(".frameModal08").fadeIn(300);
    });

    $(".modal1__close").click(function() {
        $(".frameModal08").fadeOut(300);
    });
    // 09
    $(".right__click09").click(function() {
        $(".frameModal09").fadeIn(300);
    });

    $(".modal1__close").click(function() {
        $(".frameModal09").fadeOut(300);
    });
    // 10
    $(".right__click10").click(function() {
        $(".frameModal10").fadeIn(300);
    });

    $(".modal1__close").click(function() {
        $(".frameModal10").fadeOut(300);
    });

    // page3
    // 01
    $(".right__click11").click(function() {
        $(".frameModal11").fadeIn(300);
    });

    $(".modal2__close").click(function() {
        $(".frameModal11").fadeOut(300);
    });
    // 02
    $(".right__click12").click(function() {
        $(".frameModal12").fadeIn(300);
    });

    $(".modal2__close").click(function() {
        $(".frameModal12").fadeOut(300);
    });
    // 03
    $(".right__click13").click(function() {
        $(".frameModal13").fadeIn(300);
    });

    $(".modal2__close").click(function() {
        $(".frameModal13").fadeOut(300);
    });



    // Scroll Reveal
    window.sr = ScrollReveal();
    sr.reveal('.lazyloaded', {
        duration: 500,
        delay: 100
    });
    sr.reveal('.lazyloaded1', {
        duration: 1000,
        delay: 500
    });
    sr.reveal('.lazyloaded2', {
        duration: 1000,
        delay: 500
    });
    // 

});
// Mobile Version
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $(".cover__background").remove();
} else {
    $(".social__item--wa").hide();
}