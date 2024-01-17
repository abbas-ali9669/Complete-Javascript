// In this topic we will learn about the working of DOM.
// DOM (Document Object Model)
// Overview
// How to Use
// Deep Study

// Lets understand
// First the HTML file received by the browser. The how the browser represents the html file.
// First browser parse (Raed) all the html. 
    // Example
    // Html
        // Head
            // Meta Tags
            // Title
            // Javascript files
        // Body
            // Headers
                // Navigation
                // Logo
            // Section 
                // Divs
                // Froms

// That is how te browser read all the html.
// Then the broswer will make an object {}. And that object called Document.
// And then the browser add the document inside the window object.
// console.log(window)
// And this document object is very important.
// With the help of this document, the browser can show the website on the screen.
// With the help of document, we can edit our webpage.

// Different ways to acces document.

// Js Representaion
console.log(window.document);
console.dir(window.document)
console.dir(document)

// Human Readible Representation
console.log(document)

// There are alot of properties in this object. Some of the properties we use and some of not.
// And there are alot of event (Scroll events, Click events, Submit events etc).