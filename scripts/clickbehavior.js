$(function () {

    let medQMed = window.matchMedia("(max-width: 1000px)");

    // Add smooth scrolling to all links
    var oakStrM = "White Oak ";
    var oakStrT = " (Fagaceae Quercus)";

    var redwoodStrM = "Redwood ";
    var redwoodStrT = " (Sequoia Sempervirens)";

    var pineStrM = "Pine ";
    var pineStrT = " (Pinus lambertiana)";

    var birchStrM = "Birch ";
    var birchStrT = " (Betula Alleghaniensis)";

    var loremText = `<pre>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolor alias nisi voluptate quisquam asperiores, tenetur
        officia amet aspernatur at praesentium voluptatum perferendis
        cumque repudiandae voluptatem sint sed neque harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolor alias nisi voluptate quisquam asperiores, tenetur
        officia amet aspernatur at praesentium voluptatum perferendis
        cumque repudiandae voluptatem sint sed neque harum.
        </pre>`;

    function slideInAnimation() {
        $('.tags').css({
            "animation-name": "sidebar-slide-in",
            "animation-duration": "1s",
            "animation-iteration-count": "1",
            "animation-fill-mode": "forwards"
        });
        // Start staggered tag slide-in animation
        $('#tag-1').css({
            "animation-name": "tag-slide-in",
            "animation-duration": "0.6s",
            "animation-iteration-count": "1",
            "animation-fill-mode": "forwards"
        });
        $('#tag-2').css({
            "animation-name": "tag-slide-in",
            "animation-duration": "0.8s",
            "animation-iteration-count": "1",
            "animation-fill-mode": "forwards"
        });
        $('#tag-3').css({
            "animation-name": "tag-slide-in",
            "animation-duration": "1s",
            "animation-iteration-count": "1",
            "animation-fill-mode": "forwards"
        });
        $('#tag-4').css({
            "animation-name": "tag-slide-in",
            "animation-duration": "1.2s",
            "animation-iteration-count": "1",
            "animation-fill-mode": "forwards"
        });
    }

    function slideOutAnimation() {
        $('#tag-1').css({
            "animation-name": "tag-slide-out",
            "animation-duration": "0.5s",
            "animation-iteration-count": "1",
            "animation-fill-mode": "forwards"
        });
        $('#tag-2').css({
            "animation-name": "tag-slide-out",
            "animation-duration": "0.4s",
            "animation-iteration-count": "1",
            "animation-fill-mode": "forwards"
        });
        $('#tag-3').css({
            "animation-name": "tag-slide-out",
            "animation-duration": "0.3s",
            "animation-iteration-count": "1",
            "animation-fill-mode": "forwards"
        });
        $('#tag-4').css({
            "animation-name": "tag-slide-out",
            "animation-duration": "0.2s",
            "animation-iteration-count": "1",
            "animation-fill-mode": "forwards"
        });
    }

    function sidebarOutAnimation() {
        $('.tags').css({
            "animation-name": "sidebar-slide-out",
            "animation-duration": "1s",
            "animation-fill-mode": "forwards"
        });
    }


    var scrollPos;
    var isTagActive = false;
    var isBarActive = false;
    var isScrolling = false;

    $(window).scroll(function () {
        scrollPos = $(document).scrollTop();
        scrollTarget = $('#main-layout').offset().top;

        if (!medQMed.matches) {

            if (scrollPos >= scrollTarget * 0.85) {

                if (!isScrolling) {
                    slideInAnimation();
                    isTagActive = true;
                    isBarActive = true;
                }

            } else if (scrollPos < scrollTarget * 0.9 && isTagActive) {

                if (!isScrolling) {
                    slideOutAnimation();
                    isTagActive = false;
                }

            } else if (scrollPos < scrollTarget * 0.85) {

                if (!isScrolling) {
                    if (isBarActive) {
                        sidebarOutAnimation();
                        isBarActive = false;
                    }
                }
            }
        }
    });

    $("a").on('click', function (event) {

        var target = $(event.target);


        // Ensure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            $('#main-layout').css("display", "grid");
            $('#main-content-header').css({
                "animation-name": "header2-slide-in",
                "animation-duration": "1s",
                "animation-iteration-count": "1",
                "animation-fill-mode": "forwards"
            });


            if ($(target).parents('#select-oak').length) {
                $('.content-head-main').html(oakStrM);
                $('.content-head-taxonomic').html(oakStrT);
                $('#article').html(loremText);
                $('#article').css({
                    "animation-name": "article-fade-in",
                    "animation-duration": "2.5s",
                    "animation-iteration-count": "1",
                    "animation-fill-mode": "forwards"
                });

            } else if ($(target).parents('#select-redwood').length) {
                $('.content-head-main').html(redwoodStrM);
                $('.content-head-taxonomic').html(redwoodStrT);
                $('#article').html(loremText);
                $('#article').css({
                    "animation-name": "article-fade-in",
                    "animation-duration": "2.5s",
                    "animation-iteration-count": "1",
                    "animation-fill-mode": "forwards"
                })

            } else if ($(target).parents('#select-birch').length) {
                $('.content-head-main').html(birchStrM);
                $('.content-head-taxonomic').html(birchStrT);
                $('#article').html(loremText);
                $('#article').css({
                    "animation-name": "article-fade-in",
                    "animation-duration": "2.5s",
                    "animation-iteration-count": "1",
                    "animation-fill-mode": "forwards"
                })

            } else if ($(target).parents('#select-pine').length) {
                $('.content-head-main').html(pineStrM);
                $('.content-head-taxonomic').html(pineStrT);
                $('#article').html(loremText);
                $('#article').css({
                    "animation-name": "article-fade-in",
                    "animation-duration": "2.5s",
                    "animation-iteration-count": "1",
                    "animation-fill-mode": "forwards"
                })
            }
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number specifies the number of milliseconds it takes to scroll to the specified area
            isScrolling = true;
            $('html, body').animate({
                scrollTop: $(hash).offset().top * 1.1
            }, 500, function () {
                isScrolling = false;
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});