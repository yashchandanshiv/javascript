
let page = document.getElementById("page");
let box = document.getElementById("box");
let input = document.getElementById("input");

box.onmouseover = function() {
    page.style.backgroundColor = "lightblue";
};

box.onmouseout = function() {
    page.style.backgroundColor = "white";
};

input.onfocus = function() {
    page.style.backgroundColor = "lightgreen";
};

input.onblur = function() {
    page.style.backgroundColor = "white";
};

