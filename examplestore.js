$(function () {

    // --------------------
    // -- DATABASE STUFF --
    // --------------------

    // Config data
    let firebaseConfig = {
        apiKey: 'AIzaSyCWpVaZvZ83dHxQKw3dRwem7SJmGs704gY',
        authDomain: 'example-store-ac051.firebaseapp.com',
        databaseURL: 'https://example-store-ac051.firebaseio.com',
        projectId: 'example-store-ac051',
        storageBucket: 'example-store-ac051.appspot.com',
        messagingSenderId: '336729192315',
        appId: '1:336729192315:web:5f8af3e53c07f194e0efde',
        measurementId: 'G-FYCQVYFTNC'
    };

    function populateSubMenus(subcategories) {

        /* ----- HTML STRUCTURE -----
        .submenu #submenu-x -- div
            .submenu__container -- div
                .section #section-x -- div
                    .section__title -- h3
                    #section__list-x -- ul
                        .section__item -- li
                            a
        */
        /* TODO: wrap this in a for loop that counts nav li elements 
            in order to remove hardcoded container identifier */

        for (let i = 0; i < subcategories.length; i++) {

            console.log(subcategories.length);
            // generate container
            let sectionContainerElement = document.createElement('div');
            sectionContainerElement.className = 'section';
            sectionContainerElement.id = `section-${i + 1}`;

            /* puts hardcoded promo elements at END of list by
               putting the container of our generated elements first,
               requires array to be reversed before function call */
            $("#submenu__container-1").prepend(sectionContainerElement);

            // generate h3
            let subcategoryTitle = subcategories[i].title;

            let titleElement = document.createElement('h3');
            titleElement.className = 'section__title';
            titleElement.innerHTML = subcategoryTitle;

            sectionContainerElement.append(titleElement);

            // generate ul. ul is not styled
            let ulElement = document.createElement('ul');
            ulElement.id = `section__list-${i + 1}`;

            sectionContainerElement.append(ulElement);

            for (let x = 0; x < subcategories[i].items.length - 1; x++) {

                // generate li, which is unstyled
                let liElement = document.createElement('li');

                // generate anchor
                let anchor = document.createElement('a');
                liElement.appendChild(anchor);
                anchor.href = '#';
                anchor.className = 'section__link';
                anchor.innerHTML = subcategories[i].items[x];

                $(`#section__list-${i + 1}`).append(liElement);
            }
        }
    }


    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    let ref = firebase.database().ref();
    ref.once('value').then(function (snapshot) {

        // array of individual items
        let itemsList = [];

        // array of all menu sections
        let subcategories = [];

        // STRUCTURE: sublist --> special & subcategory*num --> title & li*num
        // get number of subcategories in sublist
        for (let i = 1; i < snapshot.child('sublist-1').numChildren(); i++) {

            // object for menu sections
            let subcategory = {
                title: null,
                items: itemsList
            }

            // store title of subcategory
            let subcategoryTitle = snapshot.child('sublist-1').child(`subcategory-${i}`).child('title').val();
            subcategory.title = subcategoryTitle;

            // clear list of items before storing this array in object
            itemsList = [];

            // get number of sub list items in subcategory
            for (let k = 1; k < snapshot.child('sublist-1').child(`subcategory-${i}`).numChildren() + 1; k++) {

                // store value of list item 
                let subcategoryItem = snapshot.child('sublist-1').child(`subcategory-${i}`).child(`li-${k}`).val();

                itemsList.push(subcategoryItem);
            }

            // store list of items in subcategory object
            subcategory.items = itemsList;

            // store subcategory into array
            subcategories.push(subcategory);

            console.log(subcategories)
        }

        // generate html from array of subcategory objects
        subcategories.reverse();
        populateSubMenus(subcategories)
    });

    // ----------------------------
    // -- CAROUSEL CONFIGURATION --
    // ----------------------------

    $('.carousel').slick({
        dots: true,
        arrows: true,
        appendDots: $('.carousel__dots'),
        infinite: true

        // TODO: add scroll event to trigger fade in animation, implement lazy loading
    })

    // MENUS


})