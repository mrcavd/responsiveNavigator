var viewportHeight = window.innerHeight;

// These variables are declared outside the function because
// we will need them to make our navigator responsive
var contentBlocks = document.querySelectorAll(".contentBlock");
var navigatorDiv = document.createElement("div");
var navigatorBg = document.createElement("div");

initNavigator();

// We activate our navigator background when mouse in
navigatorDiv.onmouseover = function (e) { 
    navigatorBg.classList.add("navigatorBackgroundHighlight");
}

// and deactivate everything when mouse is hover somewhere else
navigatorDiv.onmouseleave = function (e) { 
    navigatorBg.classList.remove("navigatorBackgroundHighlight");
}

// Handle responsive navigator elements
window.onscroll = function (e) { 
    // uses a for loop to check which element is currently on screen
    for (var i = 0; i < contentBlocks.length; i++) { 

        // get the top of the element in pixel
        var viewportOffset = contentBlocks[i].getBoundingClientRect();
        var top = viewportOffset.top;

        // if the top of the element has reached top half of the window
        // highlight the correct dot to reflect where the user is at
        if (top <= viewportHeight / 2) {
            if (top > 0) {
                setHighlightDot(i);
                resetNavigator(i);
            }
        }
    }
}

// this function change the dot from dim to lit
function setHighlightDot(navi) {
    var element = "navi" + navi.toString();
    var text = "naviText" + navi.toString();

    // switch the class to change navigator element's style
    document.getElementById(element).classList
    document.getElementById(element).classList

    // highlight the text with a simple bold style
    document.getElementById(text).style
}

// this function set navigator dot back to dim
function resetNavigator(navi) {

    // use a for loop helps during fast scroll to 
    // keeps only 1 dot that matches the top-most content block visible in viewport
    for (var i = 0; i < contentBlocks.length; i++) { 
        if (navi != i) {
            var element = "navi" + i.toString();
            var text = "naviText" + i.toString();
            document.getElementById(element).classList
            document.getElementById(element).classList
            document.getElementById(text).style
        }
    }
}

// initialize navigator elements
function initNavigator() {
    navigatorBg.id = "navigatorBackground"; 
    navigatorBg.classList.add("navigatorBackground");
    document.body.appendChild(navigatorBg);

    // create navigator element
    navigatorDiv.id = "navigator"; 
    navigatorDiv.classList.add("navigator");
    document.body.appendChild(navigatorDiv);

    // option to populate navigator manually
    var navigatorText =
    [
        "Sign in with Google basics",
        "Set up GCP",
        "Create googleAuthModule",
        "Redirect user to Google",
        "Generate ID Token",
        "Expand firebaseService",
        "Sign in with Google",
        "See it on a Live site",
    ];

    // use a for loop to create all the navigator elements 
    // the number of navigator elements is equal to the number elements
    // we tag with ".contentBlock" class
    for (var c = 0; c < contentBlocks.length; c++) { 
        var newDiv = document.createElement("div");
        var link = document.createElement("a");

        // the element is anchored to the content block's id here
        // where clicking the navigator element gets user to the corresponding block
        link.setAttribute('href', "#" + contentBlocks[c].id); 

        // create a new span to house the dot in navigator
        var navSpan = document.createElement("span");
        navSpan.classList.add("dot");
        // give it an ID to animate it according to user scroll distance
        navSpan.id = "navi" + c; 

        // the navigator title will be hidden by default
        var spanText = document.createElement("span");
        spanText.classList.add("navigatorText", "hidden"); 
        spanText.id = "naviText" + c; 
        spanText.style = "padding-left: 5%;"; 

        // take every anchor's text content to index our page
        var navText = contentBlocks[c].textContent;
        spanText.textContent = navText; 

        // uncomment the next line to assign the text we initialize above
        //spanText.textContent = navigatorText[c];

        // append the elements we just created to the navigator
        link.appendChild(navSpan);
        link.appendChild(spanText);
        newDiv.appendChild(link);
        navigatorDiv.appendChild(newDiv);
    }
}
