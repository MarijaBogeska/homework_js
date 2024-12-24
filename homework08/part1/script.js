// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

let firstDiv = document.getElementsByClassName("aDiv");
let title = document.getElementById("myTitle");
title.innerText = "Cool page!!";
let paragraph1 = title.nextElementSibling;
paragraph1.innerText = "This is the first paragraph";

let secondDiv = document.getElementsByClassName("anotherDiv");
let paragraph2 = document.getElementsByClassName("anotherDiv")[0];
paragraph2.innerText = "This is second.";

let divs = document.getElementsByTagName("div");
let lastDiv = divs[2];
let headerInDiv3 = lastDiv.firstElementChild;
headerInDiv3.innerText = "H1 in last div";
let header3 = headerInDiv3.nextElementSibling;
header3.innerText = "Last h3";
