
let arr = [];

function getArray() {

    let str = document.getElementById("arrayInput").value.trim();

    if (str === "") {
        document.getElementById("array").innerHTML =
            "Please enter a valid array";
        return;
    }

    arr = str.split(",");

    document.getElementById("array").innerHTML =
        "Array: " + arr + "<br>" +
        "Length: " + arr.length;

}

function Remove() {

    let remove = document.getElementById("remove").value.trim();

    let idx = arr.indexOf(remove);

    if (idx != -1) {

        arr.splice(idx, 1);

        document.getElementById("newarr").innerHTML =
            "Array: " + arr + "<br>" +
            "Length: " + arr.length;

    } else {

        document.getElementById("newarr").innerHTML =
            "Element not Found";
    }

}

function Check() {

    let value = document.getElementById("check").value.trim();

    if (arr.includes(value)) {

        document.getElementById("checkResult").innerHTML =
            value + " is present in the array";

    } else {

        document.getElementById("checkResult").innerHTML =
            value + " is not present in the array";
    }

}

function Empty() {

    while (arr.length > 0) {
        arr.pop();
    }

    document.getElementById("emptyResult").innerHTML =
        "Array: " + arr + "<br>" +
        "Length: " + arr.length;

}

function reset() {
    window.location.reload();
}
