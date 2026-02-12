console.log("JS connected");
function goTroll(){
    window.location.href="troll.html";
}
if (window.location.pathname.includes("troll.html")) {
    setTimeout(function() {
        document.getElementById("nextArrow").style.opacity = "1";
    }, 15000);
}
function goSorry() {
    window.location.href = "sorry.html";
}