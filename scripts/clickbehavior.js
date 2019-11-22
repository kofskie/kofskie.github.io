$(function () {
    // Add smooth scrolling to all links
    var oakStrM = "White Oak ";
    var oakStrT = " (Fagaceae Quercus)";
    var lorem = `<pre>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolor alias nisi voluptate quisquam asperiores, tenetur
        officia amet aspernatur at praesentium voluptatum perferendis
        cumque molestiae repudiandae voluptatem sint sed neque harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolor alias nisi voluptate quisquam asperiores, tenetur
        officia amet aspernatur at praesentium voluptatum perferendis
        cumque molestiae repudiandae voluptatem sint sed neque harum.
        </pre>`;

    var redwoodStrM = "Redwood ";
    var redwoodStrT = " (Sequoia Sempervirens)";

    // var birchStrM = "Redwood ";
    // var birchStrT = " (Sequoia sempervirens)";

    var birchStrM = "Birch ";
    var birchStrT = " (Betula Alleghaniensis)";

    var scrollPos;
    var isTagActive = false;

    $(window).scroll(function () {
        scrollPos = $(document).scrollTop();
        console.log(scrollPos);

        if (scrollPos >= 1400) {
            isTagActive = true;
            // Start staggered tag slide-in animation
            $('#tag-1').css({
                "display": "block",
                "animation-name": "tag-slide-in",
                "animation-duration": "0.6s"
            });
            $('#tag-2').css({
                "display": "block",
                "animation-name": "tag-slide-in",
                "animation-duration": "0.8s"
            });
            $('#tag-3').css({
                "display": "block",
                "animation-name": "tag-slide-in",
                "animation-duration": "1s"
            });
            $('#tag-4').css({
                "display": "block",
                "animation-name": "tag-slide-in",
                "animation-duration": "1.2s"
            });
            console.log("confirm");

        } else if (scrollPos < 1100) {
            if (isTagActive) {
                $('#tag-1').css({
                    "display": "block",
                    "animation-name": "tag-slide-out",
                    "animation-duration": "0.5s",
                    "animation-iteration-count": "1",
                    "animation-fill-mode": "forwards"
                });
                $('#tag-2').css({
                    "display": "block",
                    "animation-name": "tag-slide-out",
                    "animation-duration": "0.4s",
                    "animation-iteration-count": "1",
                    "animation-fill-mode": "forwards"
                });
                $('#tag-3').css({
                    "display": "block",
                    "animation-name": "tag-slide-out",
                    "animation-duration": "0.3s",
                    "animation-iteration-count": "1",
                    "animation-fill-mode": "forwards"
                });
                $('#tag-4').css({
                    "display": "block",
                    "animation-name": "tag-slide-out",
                    "animation-duration": "0.2s",
                    "animation-iteration-count": "1",
                    "animation-fill-mode": "forwards"
                });
            }
            isTagActive = false;
        }
    });

    $("a").on('click', function (event) {

        var target = $(event.target);


        // Ensures this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            $('#main-content').css("display", "block");
            $('#main-content h2').css({
                "animation-name": "header2-slide-in",
                "animation-duration": "1s",
                "animation-iteration-count": "1",
                "animation-fill-mode": "forwards"
            });


            if ($(target).parents('#select-oak').length) {
                $('.content-head-main').html(oakStrM);
                $('.content-head-taxonomic').html(oakStrT);
                $('#article').html(lorem);
                $('#article').css({
                    "animation-name": "article-fade-in",
                    "animation-duration": "2.5s",
                    "animation-iteration-count": "1",
                    "animation-fill-mode": "forwards"
                });

            } else if ($(target).parents('#select-redwood').length) {
                $('.content-head-main').html(redwoodStrM);
                $('.content-head-taxonomic').html(redwoodStrT);
                $('#article').html(lorem);
                $('#article').css({
                    "animation-name": "article-fade-in",
                    "animation-duration": "2.5s",
                    "animation-iteration-count": "1",
                    "animation-fill-mode": "forwards"
                })

            } else if ($(target).parents('#select-birch').length) {
                $('.content-head-main').html(birchStrM);
                $('.content-head-taxonomic').html(birchStrT);
                $('#article').html(lorem);
                $('#article').css({
                    "animation-name": "article-fade-in",
                    "animation-duration": "2.5s",
                    "animation-iteration-count": "1",
                    "animation-fill-mode": "forwards"
                })

            } else if ($(target).parents('#select-redwood').length) {
                $('.content-head-main').html(redwoodStrM);
                $('.content-head-taxonomic').html(redwoodStrT);
                $('#article').html(lorem);
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
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});