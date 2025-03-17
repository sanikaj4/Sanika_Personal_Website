function addYear() {
    var yearElement = document.getElementById("copyYear");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function showList() {
    document.getElementById("hiddenList").style.display = "block";
    document.getElementById("showButton").style.display = "none";
}

$(document).ready(function() {
    $("#readMore").click(function() {
        $("#shortBio").hide();
        $("#longBio").show();
        $("#readMore").hide();
        $("#readLess").show();
    });
    $("#readLess").click(function() {
        $("#shortBio").show();
        $("#longBio").hide();
        $("#readMore").show();
        $("#readLess").hide();
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    if (!name.value || !email.value || !message.value) {
        document.getElementById("validationMessage").style.display = "block";
    } else {
        document.getElementById("validationMessage").style.display = "none";
        alert("Form submitted successfully!");
        }

    checkField("name", "nameError", "Please enter your name.");
    checkField("email", "emailError", "Please enter a valid email.");
    checkField("message", "messageError", "Please enter a message.");

    if (!valid) {
        event.preventDefault();
    }
});