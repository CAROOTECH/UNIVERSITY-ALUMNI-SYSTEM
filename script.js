<<<<<<< HEAD
// Load profile from localStorage when the page loads
window.onload = function() {
    if(localStorage.getItem("name")){
        document.getElementById("name").value = localStorage.getItem("name");
        document.getElementById("email").value = localStorage.getItem("email");
        document.getElementById("program").value = localStorage.getItem("program");
        document.getElementById("year").value = localStorage.getItem("year");
    }
}

// Save profile function
function saveProfile() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const program = document.getElementById("program").value;
    const year = document.getElementById("year").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("program", program);
    localStorage.setItem("year", year);

    alert("Profile saved successfully!");
    window.location.href = "profile.html"; // Go back to profile page
}
=======
// Load profile from localStorage when the page loads
window.onload = function() {
    if(localStorage.getItem("name")){
        document.getElementById("name").value = localStorage.getItem("name");
        document.getElementById("email").value = localStorage.getItem("email");
        document.getElementById("program").value = localStorage.getItem("program");
        document.getElementById("year").value = localStorage.getItem("year");
    }
}

// Save profile function
function saveProfile() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const program = document.getElementById("program").value;
    const year = document.getElementById("year").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("program", program);
    localStorage.setItem("year", year);

    alert("Profile saved successfully!");
    window.location.href = "profile.html"; // Go back to profile page
}
>>>>>>> 289a2532c0a06b1ef6b89a0746b8e1bffc0c0fe0
