function isAuthorized() {
    signInStatus = JSON.stringify(localStorage.getItem("userID"));

    if (signInStatus == null || signInStatus === "") {
        document.getElementById("");
    }
}