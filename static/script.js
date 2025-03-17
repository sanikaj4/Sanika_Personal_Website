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

function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const demo = document.getElementById("demo");

    if (!name.checkValidity() || !email.checkValidity() || !message.checkValidity()) {
        demo.innerHTML = "Please fill out the form correctly so I can get back to you :)";
        demo.style.color = "red";
    } else {
        demo.innerHTML = "Form submitted successfully!";
        demo.style.color = "green";
    }
}