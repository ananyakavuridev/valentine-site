window.onload = function() {

    const mainText = document.getElementById("mainText");
    const secondText = document.getElementById("secondText");
    const button = document.getElementById("loveBtn");
    const scanner = document.getElementById("scannerBox");

    setTimeout(() => {
        mainText.classList.add("fade-out");

        setTimeout(() => {
            mainText.style.display = "none";
            secondText.style.display = "block";
            button.style.display = "inline-block";
        }, 1000);

    }, 6000);

    window.showScanner = function() {
        secondText.style.display = "none";
        button.style.display = "none";
        scanner.style.display = "block";
    };

    window.scanLove = function() {
    window.open("https://www.youtube.com/watch?v=YOUR_LINK", "_blank");
    };

};
