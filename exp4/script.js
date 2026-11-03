
function compareStrict() {
    let a = document.getElementById("str1").value;
    let b = document.getElementById("str2").value;

    if (a === b)
        document.getElementById("result1").innerText = "Strings are Equal";
    else
        document.getElementById("result1").innerText = "Strings are Not Equal";
}

function compareLoose() {
    let a = document.getElementById("str1").value;
    let b = document.getElementById("str2").value;

    if (a == b)
        document.getElementById("result2").innerText = "Strings are Equal";
    else
        document.getElementById("result2").innerText = "Strings are Not Equal";
}

function compareLocale() {
    let a = document.getElementById("str1").value;
    let b = document.getElementById("str2").value;

    let result = a.localeCompare(b);

    if (result == 0)
        document.getElementById("result3").innerText = "Strings are Equal";
    else if (result < 0)
        document.getElementById("result3").innerText = "String 1 comes before String 2";
    else
        document.getElementById("result3").innerText = "String 1 comes after String 2";
}

function compareRegex() {
    let a = document.getElementById("str1").value;
    let b = document.getElementById("str2").value;

    let regex = new RegExp("^" + b + "$");

    if (regex.test(a))
        document.getElementById("result4").innerText = "Strings Match";
    else
        document.getElementById("result4").innerText = "Strings Do Not Match";
}

function reset() {
    document.getElementById("str1").value = "";
    document.getElementById("str2").value = "";

    document.getElementById("result1").innerText = "";
    document.getElementById("result2").innerText = "";
    document.getElementById("result3").innerText = "";
    document.getElementById("result4").innerText = "";
}
