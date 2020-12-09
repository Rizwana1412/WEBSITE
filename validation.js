function validate() {
    var email = document.StudentRegistration.email.value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    if (email == "" || atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID")
        document.StudentRegistration.email.focus();
        return false;
    }
}