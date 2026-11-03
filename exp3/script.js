
function reverse() {
    let str = document.getElementById("ip").value;
    let rev = "";

    for (let i = str.length - 1; i >= 0; i--) {
        rev = rev + str[i];
    }

    document.getElementById("s1").innerText = rev;
}

function replace() {
    let str = document.getElementById("ip").value;
    let oldChar = document.getElementById("c1").value;
    let newChar = document.getElementById("c2").value;

    let result = str.replaceAll(oldChar, newChar);

    document.getElementById("s2").innerText = result;
}

function check() {
    let str = document.getElementById("ip").value;
    let rev = "";

    for (let i = str.length - 1; i >= 0; i--) {
        rev = rev + str[i];
    }

    if (str == rev && str != "") {
        document.getElementById("s3").innerText = "Palindrome";
    } else {
        document.getElementById("s3").innerText = "Not a palindrome";
    }
}

function reset() {
    document.getElementById("ip").value = "";
    document.getElementById("c1").value = "";
    document.getElementById("c2").value = "";

    document.getElementById("s1").innerText = "";
    document.getElementById("s2").innerText = "";
    document.getElementById("s3").innerText = "";
}
