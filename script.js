const fName = document.getElementById("firstName");
const lName = document.getElementById("lastName");
const date = document.getElementById("date");
const gender = document.getElementById("gender");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const subject = document.getElementById("subject");
const form = document.getElementById("form");

const name_error = document.getElementById("name_error");
const name_error2 = document.getElementById("name_error2");
const email_error = document.getElementById("email_error");
const phoneNumber_error = document.getElementById("phoneNumber_error");
const gender_error = document.getElementById("gender");

form.addEventListener('submit',(e)=>{
    
    var email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var phNumber_check = /^\d{10}$/;
    var name_check = /^[a-zA-Z]+$/;

    //fname validation
    if(fName.value === '' || fName.value == null) {
        e.preventDefault();
        name_error.innerHTML = "first name is required";
    }

    else if(!fName.value.match(name_check)) {
        e.preventDefault();
        name_error.innerHTML = "first name must contain only alphabetical characters";
    }

    else if(fName.value.length < 6) {
        e.preventDefault();
        name_error.innerHTML = "first name must be atleast 6 characters long";
    }

    else {
        name_error.innerHTML = "";
    }
    
    //lName validation
    if(lName.value === '' || lName.value == null) {
        e.preventDefault();
        name_error2.innerHTML = "last name is required";
    }

    else if(!lName.value.match(name_check)) {
        e.preventDefault();
        name_error2.innerHTML = "last name must contain only alphabetical characters";
    }

    else if(lName.value.length < 6) {
        e.preventDefault();
        name_error2.innerHTML = "last name must be atleast 6 characters long";
    }

    else {
        name_error2.innerHTML = "";
    }
    
    //gender validation
    if(!gender.checked) {
        gender_error.innerHTML = "please select your gender";
    }
    else {
        gender_error.innerHTML = "";
    }

    //email validation
    if(!email.value.match(email_check)) {
        e.preventDefault();
        email_error.innerHTML = "valid email is required";
    }

    else {
        email_error.innerHTML = "";
    }
    
    //phnumber validation
    if(!phoneNumber.value.match(phNumber_check)) {
        e.preventDefault();
        phoneNumber_error.innerHTML = "valid phone number is required"
    }

    else {
        phoneNumber_error.innerHTML = "";
    }

})
