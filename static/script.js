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
        validationMessage.classList.remove("hidden");
        successMessage.classList.add("hidden");
    } else {
        validationMessage.classList.add("hidden");
        successMessage.classList.remove("hidden");

        document.getElementById("contactForm").reset();
    }
}
}