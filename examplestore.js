$(function () {

    // --------------------
    // -- DATABASE STUFF --
    // --------------------

    // Config data
    let firebaseConfig = {
        apiKey: "AIzaSyCWpVaZvZ83dHxQKw3dRwem7SJmGs704gY",
        authDomain: "example-store-ac051.firebaseapp.com",
        databaseURL: "https://example-store-ac051.firebaseio.com",
        projectId: "example-store-ac051",
        storageBucket: "example-store-ac051.appspot.com",
        messagingSenderId: "336729192315",
        appId: "1:336729192315:web:5f8af3e53c07f194e0efde",
        measurementId: "G-FYCQVYFTNC"
    };

    function generateSubMenus(subcategories) {

        for (let i = 0; i < subcategories.length; i++) {

            let subcategoryTitle = subcategories[i].title;

            console.log("Working title: " + subcategoryTitle);

            // generate h3
            let titleElement = document.createElement("h3");
            titleElement.className = 'submenu__title';
            titleElement.innerHTML = subcategoryTitle;

            $('#menu-1').append(titleElement);


            // generate ul
            let ulElement = document.createElement("ul");
            ulElement.className = 'submenu__list';
            ulElement.id = `submenu__list-${i+1}`

            $('#menu-1').append(ulElement);

            console.log("Length: " + (subcategories[i].items.length - 1));

            console.log("All items: " + subcategories[i].items);

            for (let x = 0; x < subcategories[i].items.length - 1; x++) {

                console.log("Item at i: " + subcategories[i].items[x]);

                // generate li
                let liElement = document.createElement("li");
                liElement.className = 'submenu__item';

                // generate anchor
                let anchor = document.createElement("a");
                liElement.appendChild(anchor)
                anchor.href = "#";
                anchor.innerHTML = subcategories[i].items[x];

                $(`#submenu__list-${i + 1}`).append(liElement);
            }
        }
    }

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    let ref = firebase.database().ref();
    ref.once("value").then(function (snapshot) {

        // TODO: wrap in for loop to create all dropdown menus

        let key = snapshot.key;
        console.log(snapshot.numChildren())

        // array of individual items
        let itemsList = [];

        // array of all menu sections
        let subcategories = [];

        // sublist --> subcategory*num --> title & li*num
        for (let i = 1; i < snapshot.child("sublist-1").numChildren() + 1; i++) { // get number of subcategories in sublist

            // object for menu sections
            let subcategory = {
                title: null,
                items: itemsList
            }

            // store title of subcategory
            let subcategoryTitle = snapshot.child("sublist-1").child(`subcategory-${i}`).child("title").val();
            subcategory.title = subcategoryTitle;

            // clear list of items before storing this array in object
            itemsList = [];

            // get number of sub list items in subcategory
            for (let k = 1; k < snapshot.child("sublist-1").child(`subcategory-${i}`).numChildren() + 1; k++) {

                // store value of list item 
                let subcategoryItem = snapshot.child("sublist-1").child(`subcategory-${i}`).child(`li-${k}`).val();

                itemsList.push(subcategoryItem);
            }

            // store list of items in subcategory object
            subcategory.items = itemsList;

            // title of subcategory is currently stored in object
            console.log("Subcategory title: " + subcategory.title);

            // array of items currently contains subcategory items
            console.log("List items: " + subcategory.items);

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