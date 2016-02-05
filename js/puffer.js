/*
PUFFER CSS/JS FRAMEWORK

Collaborators: Emmanuel Martinez, Bob Painter, Michelle Santos
Version 1.0.0
Updated on: 01-19-16

---------------------------
Table Of Contents
---------------------------

NAV SWIPE JS COMPONENT
BACK TO TOP JS COMPONENT
BLOG JS COMPONENT
SOCIAL SIDEBAR JS COMPONENT

*/

/* ********** BEGIN NAV/SWIPE JS COMPONENT ********** */

$().ready(function () {

    "use strict";
    $(".dropdown1 ul, .dropdown2 ul, .dropdown3 ul, .dropdown4 ul, .dropdown5 ul, .dropdown6 ul, .dropdown7 ul, .dropdown7 ul, .dropdown8 ul, .dropdown9 ul, .dropdown10 ul").addClass("idk"); /*adds css to dropdown ul inorder to style and so on*/

    $(".swipe-nav").before("<i class='swipe-icon'></i>"); /*adds icon*/
    var navWidth = $(".swipe-nav").width();
    $(".swipe-icon").addClass("fa fa-bars fa-2x"); /*adds hambergure icon to icon*/
    
    if($(".swipe-nav").hasClass("nav-left")) {
        $(".swipe-nav").css("left", "-100%");
        $(".swipe-icon").css("left", 0);
        
        $("html").on("swiperight", function () {
        $(".swipe-nav").animate({
            left: "0%"
        });

        $(".swipe-icon").delay(100).removeClass("fa fa-bars fa-2x");
        $(".swipe-icon").addClass("fa fa-arrow-left fa-2x");

        $("body").css("overflow", "hidden");
        $(".swipe-nav").css("overflow", "auto");
        $(".content-overlay").css("overflow", "hidden");
    });

    $("body").on("swipeleft", function () {
        $(".swipe-nav").animate({

            left: "-100%"
        });

        $(".swipe-icon").delay(100).removeClass("fa-arrow-left");
        $(".swipe-icon").addClass("fa-bars");

        $(".swipe-nav").css("overflow", "hidden");
        $("body").css("overflow", "auto");
        $(".content-overlay").css("overflow", "auto");

    });

    $(document).on("click", ".fa-bars", function () {

        $(".swipe-icon").delay(100).removeClass("fa fa-bars fa-2x");
        $(".swipe-icon").addClass("fa fa-arrow-left fa-2x");


        $(".swipe-nav").animate({

            left: "0%"
        });
        $(".swipe-nav").css("overflow", "auto");
        $("body").css("overflow", "hidden");
        $(".content-overlay").css("overflow", "hidden");
       
    });

    $(document).on("click", ".fa-arrow-left", function () {
        $(".swipe-icon").delay(100).removeClass("fa fa-arrow-left fa-2x");
        $(".swipe-icon").addClass("fa fa-bars fa-2x");


        $(".swipe-nav").animate({

            left: "-100%"
        });
        $(".swipe-nav").css("overflow", "hidden");
        $("body").css("overflow", "auto");
        $(".content-overlay").css("overflow", "auto");
        
    });
    }
    
    if($(".swipe-nav").hasClass("nav-right")) {
        $(".swipe-nav").css("left", "100%");
        $(".swipe-icon").css("right", 0);
        
        
        $("html").on("swiperight", function () {
        $(".swipe-nav").animate({
            left: "100%"
        });

        $(".swipe-icon").delay(100).removeClass("fa fa-bars fa-2x");
        $(".swipe-icon").addClass("fa fa-arrow-left fa-2x");

        $("body").css("overflow", "hidden");
        $(".swipe-nav").css("overflow", "auto");
        $(".content-overlay").css("overflow", "hidden");
    });

    $("body").on("swipeleft", function () {
        $(".swipe-nav").animate({

            left: "0%"
        });

        $(".swipe-icon").delay(100).removeClass("fa-arrow-left");
        $(".swipe-icon").addClass("fa-bars");

        $(".swipe-nav").css("overflow", "hidden");
        $("body").css("overflow", "auto");
        $(".content-overlay").css("overflow", "auto");

    });

    $(document).on("click", ".fa-bars", function () {

        $(".swipe-icon").delay(100).removeClass("fa fa-bars fa-2x");
        $(".swipe-icon").addClass("fa fa-arrow-left fa-2x");


        $(".swipe-nav").animate({

            left: "0%"
        });
        $(".swipe-nav").css("overflow", "auto");
        $("body").css("overflow", "hidden");
        $(".content-overlay").css("overflow", "hidden");
       
    });

    $(document).on("click", ".fa-arrow-left", function () {
        $(".swipe-icon").delay(100).removeClass("fa fa-arrow-left fa-2x");
        $(".swipe-icon").addClass("fa fa-bars fa-2x");


        $(".swipe-nav").animate({

            left: "100%"
        });
        $(".swipe-nav").css("overflow", "hidden");
        $("body").css("overflow", "auto");
        $(".content-overlay").css("overflow", "auto");
        
    });
        
    }

    /* This is to display nested list on mouse in or mouse our or click or un click */

    $(".dropdown1 ul, .dropdown2 ul, .dropdown3 ul, .dropdown4 ul, .dropdown5 ul, .dropdown6 ul, .dropdown7 ul, .dropdown7 ul, .dropdown8 ul, .dropdown9 ul, .dropdown10 ul").hide(); /*this is used to hide nested list items */
    $(".dropdown2 ul").hide(); /*this is used to hide nested list items */

    /* Mouseenter and mouseleave are proving problimatic thus far so they are not currently being used */

    $(document).on("click", ".dropdown1>a", function () {
        $(".dropdown1 ul").slideDown();
        $(".dropdown1").addClass("newdrop1");
        $(".dropdown1").removeClass("dropdown1");

    });

    $(document).on("click", ".newdrop1>a", function () {
        $(".newdrop1 ul").slideUp();
        $(".newdrop1").addClass("dropdown1");
        $(".newdrop1").removeClass("newdrop1");
    });

    $(document).on("click", ".dropdown2 >a", function () {
        $(".dropdown2 ul").slideDown();
        $(".dropdown2").addClass("newdrop2");
        $(".dropdown2").removeClass("dropdown2");

    });

    $(document).on("click", ".newdrop2 >a", function () {
        $(".newdrop2 ul").slideUp();
        $(".newdrop2").addClass("dropdown2");
        $(".newdrop2").removeClass("newdrop2");
    });

    $(document).on("click", ".dropdown3 >a", function () {
        $(".dropdown3 ul").slideDown();
        $(".dropdown3").addClass("newdrop3");
        $(".dropdown3").removeClass("dropdown3");

    });

    $(document).on("click", ".newdrop3 >a", function () {
        $(".newdrop3 ul").slideUp();
        $(".newdrop3").addClass("dropdown3");
        $(".newdrop3").removeClass("newdrop3");
    });

    $(document).on("click", ".dropdown4 >a", function () {
        $(".dropdown4 ul").slideDown();
        $(".dropdown4").addClass("newdrop4");
        $(".dropdown4").removeClass("dropdown4");

    });

    $(document).on("click", ".newdrop4 >a", function () {
        $(".newdrop4 ul").slideUp();
        $(".newdrop4").addClass("dropdown4");
        $(".newdrop4").removeClass("newdrop4");
    });

    $(document).on("click", ".dropdown5 >a", function () {
        $(".dropdown5 ul").slideDown();
        $(".dropdown5").addClass("newdrop5");
        $(".dropdown5").removeClass("dropdown5");

    });

    $(document).on("click", ".newdrop5 >a", function () {
        $(".newdrop5 ul").slideUp();
        $(".newdrop5").addClass("dropdown5");
        $(".newdrop5").removeClass("newdrop5");
    });

    $(document).on("click", ".dropdown6 >a", function () {
        $(".dropdown6 ul").slideDown();
        $(".dropdown6").addClass("newdrop6");
        $(".dropdown6").removeClass("dropdown6");

    });

    $(document).on("click", ".newdrop6 >a", function () {
        $(".newdrop6 ul").slideUp();
        $(".newdrop6").addClass("dropdown6");
        $(".newdrop6").removeClass("newdrop6");
    });

    $(document).on("click", ".dropdown7 >a", function () {
        $(".dropdown7 ul").slideDown();
        $(".dropdown7").addClass("newdrop7");
        $(".dropdown7").removeClass("dropdown7");

    });

    $(document).on("click", ".newdrop7 >a", function () {
        $(".newdrop7 ul").slideUp();
        $(".newdrop7").addClass("dropdown7");
        $(".newdrop7").removeClass("newdrop7");
    });

    $(document).on("click", ".dropdown8 >a", function () {
        $(".dropdown8 ul").slideDown();
        $(".dropdown8").addClass("newdrop8");
        $(".dropdown8").removeClass("dropdown8");

    });

    $(document).on("click", ".newdrop8 >a", function () {
        $(".newdrop8 ul").slideUp();
        $(".newdrop8").addClass("dropdown8");
        $(".newdrop8").removeClass("newdrop8");
    });

    $(document).on("click", ".dropdown9 >a", function () {
        $(".dropdown9 ul").slideDown();
        $(".dropdown9").addClass("newdrop9");
        $(".dropdown9").removeClass("dropdown9");

    });

    $(document).on("click", ".newdrop9 >a", function () {
        $(".newdrop9 ul").slideUp();
        $(".newdrop9").addClass("dropdown9");
        $(".newdrop9").removeClass("newdrop9");
    });

    $(document).on("click", ".dropdown10 >a", function () {
        $(".dropdown10 ul").slideDown();
        $(".dropdown10").addClass("newdrop10");
        $(".dropdown10").removeClass("dropdown10");

    });

    $(document).on("click", ".newdrop10 >a", function () {
        $(".newdrop10 ul").slideUp();
        $(".newdrop10").addClass("dropdown10");
        $(".newdrop10").removeClass("newdrop10");
    });
});

/* ********** END NAV/SWIPE JS COMPONENT ********** */

/* ********** BEGIN BACK TO TOP JS COMPONENT ********** */

$().ready(function () {
    $(".top").css("opacity", 0);
    $(document).scroll(function () {
        $(".top").animate({
            opacity: 1
        }, 2000);
   });
    
    $(".top").append("<a href='#'></a>");
    $(".top a").addClass("fa fa-chevron-up fa-3x");

    $(".top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        $(".content-overlay").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
});

/* ********** END BACK TO TOP JS COMPONENT ********** */

/* ********** BEGIN BLOG JS COMPONENT ********** */

$().ready(function () {
    function resize() {};
    
    /* HIDE EXTRA IMAGES USED IN GALLERY/SLIDSHOW */
    $(".blog img:not(:first-of-type)").css("display", "none");

    /* ADD LIGHTBOX CLOSE ICON */
    $(".lightbox-page").append('<div class="lightbox-close"><i class="fa fa-times"></i></div>');
    
    $('.blog-link').click(function (e) {
        e.preventDefault();
        return false;
    });

    /* LOAD LIGHTBOX PAGE */

    $('.blog-link').on("click", function () {
        $("body").css("overflow", "hidden");
        $('.lightbox-background, .lightbox-page').animate({
            'opacity': '.75'
        }, 300, 'linear');
        $('.lightbox-page').animate({
            'opacity': '1.00'
        }, 300, 'linear');
        $('.lightbox-background, .lightbox-page').css('display', 'block');

        var getDiv = $(this).closest("div");

        /* GET BLOG TITLE */

        var getTitle = getDiv.find(".blog-title").html();
        $(".lightbox-text-left, .lightbox-text-right").append('<h1 class="lightbox-title"> ' + getTitle + ' </h1>');

        /* GET BLOG INFO */

        var postAuthor = getDiv.find(".blog-author").html();
        var postDate = getDiv.find(".blog-date").html();
        var postCategory = getDiv.find(".blog-category").html();
        $(".lightbox-text-left, .lightbox-text-right").append('<p class="lightbox-info">Posted by <span class="blog-info-color">' + postAuthor + ' </span> on <span class="blog-info-color"> ' + postDate + '</span> in <span class="blog-info-color">' + postCategory + '</span></p>');

        /* ADD LINE UNDER BLOG INFO */

        $(".lightbox-text-left, .lightbox-text-right").append('<hr class="info-hr">');

        /* GET BLOG PARAGRAPHS */

        $(getDiv).each(function () {
            for (i = 0; i < 40; i++) {
                var paragraphText = $(this).find(".blog-p").eq(i).html();
                if (paragraphText !== undefined) {
                    $(".lightbox-text-left, .lightbox-text-right").append('<p class="lightbox-paragraph">' + paragraphText + '</p>');
                }
            }
        });

        /* GET BLOG IMAGE */

        $(".lightbox-image-left, .lightbox-image-right").append("<img>");
        var getImg = getDiv.find("img:first-of-type").attr("src");
        $(".lightbox-image-left img, .lightbox-image-right img").replaceWith('<img src="' + getImg + '"></img>');

        /* GALLERY/SLIDESHOW */

        var currentImg = 1;
        var numberOfImg = $(getDiv).find("img").length;

        if (numberOfImg > 1) {
            $(".lightbox-image-left").append('<a class="prev-img"><i class="fa fa-chevron-left"></i></a>');
            $(".lightbox-image-left").append('<a class="next-img"><i class="fa fa-chevron-right"></i></a>');
            $(".lightbox-image-right").append('<a class="prev-img"><i class="fa fa-chevron-left"></i></a>');
            $(".lightbox-image-right").append('<a class="next-img"><i class="fa fa-chevron-right"></i></a>');

            /* GREY OUT PREV CHEVRON/ARROW IF USER IS AT FIRST IMAGE */
            if (currentImg = 1) {
                $(".prev-img").css("color", "#cecece");
            }
            $(".next-img").on("click", function () {

                /* REMOVE GREY OUT FROM PREV CHEVRON/ARROW */
                $(".prev-img").css("color", "#000000");

                /* IF CURRENTIMG IS NOT THE LAST IMAGE INCREASE CURRENTIMG COUNT WHEN NEXT CHEVRON/ARROW IS CLICKED */
                if (currentImg < numberOfImg) {
                    currentImg = currentImg += 1;
                }

                /* REPLACE CURRENT IMAGE WITH NEXT IMAGE */
                if (currentImg <= numberOfImg) {
                    var newImg = getDiv.find(".blog-image:nth-of-type(" + currentImg + ")").attr("src");
                    $(".lightbox-image-left img, .lightbox-image-right img").replaceWith('<img src="' + newImg + '"></img>');
                }

                /* GREY OUT CHEVRON/ARROW IF USER IS AT LAST IMAGE */
                if (currentImg == numberOfImg) {
                    $(".next-img").css("color", "#cecece");
                }
            });

            $(".prev-img").on("click", function () {

                /* REMOVE GREY OUT FROM NEXT CHEVRON/ARROW */
                $(".next-img").css("color", "#000000");

                /* IF CURRENTIMG IS NOT THE FIRST IMAGE DECREASE CURRENTIMG COUNT WHEN PREV CHEVRON/ARROW IS CLICKED */
                if (currentImg > 1) {
                    currentImg = currentImg -= 1;
                }

                /* REPLACE CURRENT IMAGE WITH PREVIOUS IMAGE */
                if (currentImg >= 1) {
                    var newImg = getDiv.find(".blog-image:nth-of-type(" + currentImg + ")").attr("src");
                    $(".lightbox-image-left img, .lightbox-image-right img").replaceWith('<img src="' + newImg + '"></img>');
                }

                /* GREY OUT PREV CHEVRON/ARROW IF USER IS AT FIRST IMAGE */
                if (currentImg == 1) {
                    $(".prev-img").css("color", "#cecece");
                }
            });
        }
    });

    /* CLOSE BUTTON HOVER */

    $().ready(function () {
        $(".lightbox-close").on("mouseover", function () {
            $(".lightbox-close-hover").css("display", "block");
        });
        $(".lightbox-close-hover").on("mouseleave", function () {
            $(".lightbox-close").css("display", "block");
        });
    });

    /* CLOSE LIGHTBOX AND CLEAR BLOG INFO */

    $('.lightbox-close').on("click", function () {
        close_box();
    });

    $('.lightbox-background').on("click", function () {
        close_box();
    });

    function close_box() {
        $(".lightbox-title, .lightbox-info, .info-hr, .lightbox-paragraph, .lightbox-image-left img, .lightbox-image-right img, .prev-img, .next-img").remove();

        $("body").css("overflow", "auto");

        $('.lightbox-background').animate({
            'opacity': '0'
        }, 300, 'linear', function () {
            $('.lightbox-background, .lightbox-page').css('display', 'none');
        });
    }

    /* MOVE BLOG IMAGE TO TOP AFTER MEDIA QUERY */

    $(window).on("resize", resize);

    function resize() {
        if ($(window).width() <= 768) {
            $(".lightbox-text-left").insertAfter(".lightbox-image-right");
        }

        if ($(window).width() > 768) {
            $(".lightbox-image-right").insertAfter(".lightbox-text-left");
        }
    }

    /* LOAD MORE BUTTON */

    var i;
    var ii;
    var showMax;
    var current = 8;
    var showCurrent = current;
    var blogLength = $(".blog").length;

    $(".blog:nth-of-type(" + showCurrent + ")").after('<button class="load-more btn-full">Show More</button>');

    for (i = (showCurrent + 1); i <= blogLength; i++) {
        $('.blog:nth-of-type(' + i + ')').hide();
    }
    
    /* IF FOOTER IS A FIXED-FOOTER THEN ADD MARGIN-BOTTOM EQUAL TO FOOTER HEIGHT TO LOAD-MORE BUTTON */
    
    if ($("footer").hasClass("fixedfooter") == true) {
        var footerHeight = $("footer").css("height");
        $(".load-more").css("margin-bottom", footerHeight);
    }

    /* WHEN SHOW MORE IS CLICKED SHOW FOUR MORE POSTS AND MOVE SHOW MORE BUTTON TO THE END OF THE FOUR NEW POSTS */

    $(".load-more").on("click", function () {
        showMax = current += 4;

        $('.load-more').each(function () {
            $(this).insertAfter($(this).parent().find(".blog:nth-of-type(" + showMax + ")"));
        });

        /* HIDE SHOW MORE BUTTON IF ALL BLOG POSTS ARE SHOWN */

        for (ii = (showMax - 4); ii <= showMax; ii++) {
            $('.blog:nth-of-type(' + ii + ')').show();
            if (ii == blogLength) {
                $(".load-more").hide();
            }
        }
    });
});

/* ********** END BLOG JS COMPONENT ********** */

/* ********** BEGIN SOCIAL SIDEBAR JS COMPONENT ********** */

$().ready(function () {
    $("#socialTrigger").click(function () {
        if ($("#trigger-1").hasClass("fadeout-1"))
            $("#trigger-1").removeClass("fadeout-1").addClass("fadein-1");
        else
            $("#trigger-1").removeClass("fadein-1").addClass("fadeout-1");

        if ($("#trigger-2").hasClass("fadeout-2"))
            $("#trigger-2").removeClass("fadeout-2").addClass("fadein-2");
        else
            $("#trigger-2").removeClass("fadein-2").addClass("fadeout-2");

        if ($("#trigger-3").hasClass("fadeout-3"))
            $("#trigger-3").removeClass("fadeout-3").addClass("fadein-3");
        else
            $("#trigger-3").removeClass("fadein-3").addClass("fadeout-3");

        if ($("#trigger-4").hasClass("fadeout-4"))
            $("#trigger-4").removeClass("fadeout-4").addClass("fadein-4");
        else
            $("#trigger-4").removeClass("fadein-4").addClass("fadeout-4");

        if ($("#trigger-5").hasClass("fadeout-5"))
            $("#trigger-5").removeClass("fadeout-5").addClass("fadein-5");
        else
            $("#trigger-5").removeClass("fadein-5").addClass("fadeout-5");

        if ($("#trigger-6").hasClass("fadeout-6"))
            $("#trigger-6").removeClass("fadeout-6").addClass("fadein-6");
        else
            $("#trigger-6").removeClass("fadein-6").addClass("fadeout-6");

        if ($("#trigger-7").hasClass("fadeout-7"))
            $("#trigger-7").removeClass("fadeout-7").addClass("fadein-7");
        else
            $("#trigger-7").removeClass("fadein-7").addClass("fadeout-7");

        if ($("#trigger-8").hasClass("fadeout-8"))
            $("#trigger-8").removeClass("fadeout-8").addClass("fadein-8");
        else
            $("#trigger-8").removeClass("fadein-8").addClass("fadeout-8");
    });
});

/* ********** BEGIN SOCIAL SIDEBAR JS COMPONENT ********** */
