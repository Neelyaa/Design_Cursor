function cursor() {

    let cursor = $(".cursor"),
        follow = $(".follow"),
        posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;

    gsap.to({}, 0.016, {
        repeat: -1,

        onRepeat: function () {

            posX += (mouseX - posX) / 7;
            posY += (mouseY - posY) / 7;

            gsap.set(cursor, {
                css: {
                    left: mouseX - 5,
                    top: mouseY - 5
                }
            })
            gsap.set(follow, {
                css: {
                    left: posX - 15,
                    top: posY - 15
                }
            })
        }
    });

    $(window).on('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    $(".header__item").on("mouseenter", function () {
        cursor.addClass("active");
        follow.addClass("active");
    });

    $(".header__item").on("mouseleave", function () {
        cursor.removeClass("active");
        follow.removeClass("active");
    });


}

cursor();