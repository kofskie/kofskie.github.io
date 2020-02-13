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

    function generateSubMenus(subcategories) {

        /* ----- HTML STRUCTURE -----

        .submenu #submenu-x
            .submenu__container
                .section #section-x
                    .section__title
                    #section__list
                        .section__item
                            a
        */

        for (let i = 0; i < subcategories.length; i++) {

            console.log(subcategories.length);
            // generate container
            let sectionContainerElement = document.createElement('div');
            sectionContainerElement.className = 'section';
            sectionContainerElement.id = `section-${i + 1}`;

            $(`#submenu__container-1`).append(sectionContainerElement);

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

                // generate li
                let liElement = document.createElement('li');
                liElement.className = 'section__item';

                // generate anchor
                let anchor = document.createElement('a');
                liElement.appendChild(anchor);
                anchor.href = '#';
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

        // STRUCTURE: sublist --> subcategory*num --> title & li*num
        for (let i = 1; i < snapshot.child('sublist-1').numChildren() + 1; i++) { // get number of subcategories in sublist

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
        generateSubMenus(subcategories)
    });
})

// ----------------------------
// -- CAROUSEL CONFIGURATION --
// ----------------------------

$('.carousel').slick({
    dots: true,
    arrows: true,
    appendDots: $('.carousel__dots'),
    infinite: true

    // TODO: make function to add html elements, call function in the data retrieval for loop, no need for async

    // TODO: add scroll event to trigger fade in animation, implement lazy loading
})