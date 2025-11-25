console.log("JavaScript is working!");
function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const userType = document.getElementById("userType").value;

    // Simple prototype login check
    if(userType === "alumni"){
        alert("Login successful as Alumni!");
        window.location.href = "dashboard.html"; // we will create this next
    } else if(userType === "admin"){
        alert("Login successful as Admin!");
        window.location.href = "admin.html"; // we will create this next
    } else if(userType === "staff"){
        alert("Login successful as Staff!");
        window.location.href = "staff.html"; // we will create this next
    } else {
        alert("Invalid login!");
    }
}
