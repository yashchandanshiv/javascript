let arr = [];
let max = 0;

function createArray() {
    max = Number(document.getElementById("size").value);

    if (max <= 0 || !Number.isInteger(max)) {
        document.getElementById("result").innerText = "Enter valid size";
        return;
    }

    arr = [];

    document.getElementById("result").innerText =
        "Maximum length: " + max;

    showArray();
}

function addElement() {
    if (arr.length >= max) {
        document.getElementById("array").innerText = "Array is full";
        return;
    }

    let value = document.getElementById("value").value;

    arr.push(value);
    showArray();
}

function appendObject() {
    if (arr.length != max) {
        document.getElementById("check").innerText = "Fill array first";
        return;
    }

    let value;

    try {
        value = JSON.parse(document.getElementById("obj").value);
    } catch {
        value = document.getElementById("obj").value;
    }

    arr.push(value);

    if (Array.isArray(value)) {
        document.getElementById("check").innerText = "It is an array";
    } else {
        document.getElementById("check").innerText = "It is not an array";
    }

    showArray();
}

function showArray() {
    document.getElementById("current").innerText =
        "Current Array: " + JSON.stringify(arr);
}