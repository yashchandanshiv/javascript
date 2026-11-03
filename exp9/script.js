
function validateForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;

    let gender = document.querySelector('input[name="gender"]:checked');

    let valid = true;

    

    // Name
    if (!/^[A-Za-z ]+$/.test(name.trim())) {
        document.getElementById("nameError").innerText = "Invalid name";
        valid = false;
    }

    // Address
    if (address.trim() == "") {
        document.getElementById("addressError").innerText = "Enter address";
        valid = false;
    }

    // City
    if (!/^[A-Za-z ]+$/.test(city.trim())) {
        document.getElementById("cityError").innerText = "Invalid city";
        valid = false;
    }

    // State
    if (!/^[A-Za-z ]+$/.test(state.trim())) {
        document.getElementById("stateError").innerText = "Invalid state";
        valid = false;
    }

    // Gender
    if (gender == null) {
        document.getElementById("genderError").innerText = "Select gender";
        valid = false;
    }

    // Mobile
    if (!/^[0-9]{10}$/.test(mobile)) {
        document.getElementById("mobileError").innerText = "Enter valid 10 digit mobile";
        valid = false;
    }

    // Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email";
        valid = false;
    }

    // Show welcome page
    if (valid) {
        document.getElementById("formPage").style.display = "none";
        document.getElementById("welcomePage").style.display = "block";
    }
}

function resetForm() {
    document.querySelector("form").reset();

}

function showForm() {
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("formPage").style.display = "block";

    resetForm();
}
