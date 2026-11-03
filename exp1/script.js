
function triangle() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);

    if (a <= 0 || b <= 0 || c <= 0) {
        document.getElementById("tri").innerText =
            "Enter positive numbers";
    }
    else if (a + b <= c || a + c <= b || b + c <= a) {
        document.getElementById("tri").innerText =
            "Invalid triangle";
    }
    else {
        let s = (a + b + c) / 2;
        let area = Math.sqrt(s * (s-a) * (s-b) * (s-c));

        document.getElementById("tri").innerText =
            "Area = " + area.toFixed(2);
    }
}

function rectangle() {
    let l = Number(document.getElementById("l").value);
    let w = Number(document.getElementById("w").value);

    if (l <= 0 || w <= 0) {
        document.getElementById("rect").innerText =
            "Enter positive numbers";
    }
    else {
        let area = l * w;

        document.getElementById("rect").innerText =
            "Area = " + area.toFixed(2);
    }
}

function circle() {
    let r = Number(document.getElementById("r").value);

    if (r <= 0) {
        document.getElementById("circle").innerText =
            "Enter a positive number";
    }
    else {
        let area = Math.PI * r * r;

        document.getElementById("circle").innerText =
            "Area = " + area.toFixed(2);
    }
}

function reset(shape) {
    if (shape == "tri") {
        document.getElementById("a").value = "";
        document.getElementById("b").value = "";
        document.getElementById("c").value = "";
        document.getElementById("tri").innerText = "";
    }
    else if (shape == "rect") {
        document.getElementById("l").value = "";
        document.getElementById("w").value = "";
        document.getElementById("rect").innerText = "";
    }
    else {
        document.getElementById("r").value = "";
        document.getElementById("circle").innerText = "";
    }
}
