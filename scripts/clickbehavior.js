$(function () {


    var firebaseConfig = {
        apiKey: "AIzaSyDm-5in9gdCL0j3BHGg067bXdsMidAL8CY",
        authDomain: "forest-club-34a79.firebaseapp.com",
        databaseURL: "https://forest-club-34a79.firebaseio.com",
        projectId: "forest-club-34a79",
        storageBucket: "forest-club-34a79.appspot.com",
        messagingSenderId: "27216799359",
        appId: "1:27216799359:web:195fdf2d08c54755d4014a",
        measurementId: "G-T43R8VB7Y2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    var dbTitle = document.getElementById('header');
    var fNameKey = document.getElementById('fname-key');
    var fName = document.getElementById('fname');
    var lNameKey = document.getElementById('lname-key');
    var lName = document.getElementById('lname');
    var errorText = document.getElementById('error');

    var loremText;

    var oakStrM;
    var oakStrT;

    var redwoodStrM;
    var redwoodStrT;

    var birchStrM;
    var birchStrT;

    var pineStrM;
    var pineStrT;


    var dbRef = firebase.database().ref();

    dbRef.once('value').then(function (snapshot) {

        var data = [];

        loremText = snapshot.child('paragraphs').child('lorem').val();

        oakStrM = snapshot.child('titles').child('titleOak').val();
        oakStrT = snapshot.child('titles').child('taxonOak').val();

        redwoodStrM = snapshot.child('titles').child('titleRedwood').val();
        redwoodStrT = snapshot.child('titles').child('taxonRedwood').val();

        birchStrM = snapshot.child('titles').child('titleBirch').val();
        birchStrT = snapshot.child('titles').child('taxonBirch').val();

        pineStrM = snapshot.child('titles').child('titlePine').val();
        pineStrT = snapshot.child('titles').child('taxonPine').val();
    });






    let medQMed = window.matchMedia("(max-width: 1000px)");

    // Add smooth scrolling to all links

    function slideInAnimation() {
        $('.tags').css({
            "animation-name": "sidebar-slide-in-l",
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

    var currentContext = 0;

    // true = create, false = remove
    function switchMenu(mode) {

        if (!mode) {
            switch (currentContext) {
                case 0:
                    $('#article').css({
                        "display": "none"
                        // TODO: handle animation here
                    })
                    break;

                case 1:
                    $('#article').css({
                        "display": "none"
                    })
                    break;

                case 2:
                    $('#map').css({
                        "display": "none"
                    })
                    break;

                case 3:
                    $('#article').css({
                        "display": "none"
                    })
                    break;
            }
        } else {
            switch (currentContext) {
                case 0:
                    $('#article').css({
                        "display": "block"
                        // TODO: handle animation here
                    })
                    break;

                case 1:
                    $('#article').css({
                        "display": "block"
                    })
                    break;

                case 2:
                    $('#map').css({
                        "display": "block"
                    })
                    break;

                case 3:
                    $('#article').css({
                        "display": "block"
                    })
                    break;
            }
        }
    }

    // TODO: get rid of these
    var scrollPos;
    var isTagActive = false;
    var isBarActive = false;

    var isScrolling = false;

    $(window).scroll(function () {
        if (!isScrolling) {
            scrollPos = $(document).scrollTop();
            scrollTarget = $('#main-layout').offset().top;
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
                    "display": "block",
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
                    "display": "block",
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
                    "display": "block",
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
                    "display": "block",
                    "animation-name": "article-fade-in",
                    "animation-duration": "2.5s",
                    "animation-iteration-count": "1",
                    "animation-fill-mode": "forwards"
                })

            }

            // SIDEBAR TAGS
            else if ($(target).parents('#tag-1').length) {

                switchMenu(false);
                currentContext = 0;
                switchMenu(true);

            } else if ($(target).parents('#tag-2').length) {

                switchMenu(false);
                currentContext = 1;
                switchMenu(true);

            } else if ($(target).parents('#tag-3').length) {

                switchMenu(false);
                currentContext = 2;
                switchMenu(true);

            } else if ($(target).parents('#tag-4').length) {

                switchMenu(false);
                currentContext = 3;
                switchMenu(true);

            }
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number specifies the number of milliseconds it takes to scroll to the specified area
            isScrolling = true;
            $('html, body').animate({
                // scrolls top of page to the bottom middle of menu
                scrollTop: $(hash).offset().top * 1.179
            }, 500, function () {
                isScrolling = false;
                // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;
            });
        } // End if
    });
});