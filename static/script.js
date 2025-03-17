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

    var validationMessage = document.getElementById("validationMessage");
    var successMessage = document.getElementById("successMessage");

    if (!name.checkValidity() || !email.checkValidity() || !message.checkValidity()) {
        validationMessage.style.display = "block";
    } else {
        validationMessage.style.display = "none";
        successMessage.style.display = "block";
    }
});