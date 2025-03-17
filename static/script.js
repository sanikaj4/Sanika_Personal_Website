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

function validateForm(event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    var validationMessage = document.getElementById("validationMessage");
    var successMessage = document.getElementById("successMessage");

    if (name === "" || email === "" || message === "") {
        validationMessage.style.display = "block";
        successMessage.style.display = "none";
    } else {
        validationMessage.style.display = "none";
        successMessage.style.display = "block";
        document.getElementById("contactForm").reset();
    }
}

function validateForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var comment = document.getElementById("comment");
    var message = document.getElementById("message");

    if (!name.checkValidity() || !email.checkValidity() || !comment.checkValidity()) {
        message.innerHTML = "Please fill out the form correctly so I can get back to you :)";
        message.style.color = "red";
    } else {
        message.innerHTML = "Form submitted successfully!";
        message.style.color = "green";
    }
}