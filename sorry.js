const text = document.getElementById("text");
const extras = document.getElementById("extras");
const music = document.getElementById("bgMusic");
const button = document.getElementById("nextBtn");

const messages = [
    "heheheh",
    "jokes apart...",
    "i think ur really cool...",
    "i kind of have a...",
    "...",
    "little bit... of a",
    "crush on you 🥺💖"
];

let index = 0;

function showFinalScene() {
    text.style.display = "none";

    extras.innerHTML = `
        <img src="bf1.jpeg" class="cute">
        <img src="bf2.jpeg" class="cute">
        <img src="bf3.jpeg" class="cute">
    `;

    music.play().catch(() => {
    console.log("Autoplay blocked");
    });

    music.onended = function() {
    button.style.display = "inline-block";
    };


    createHearts();
}
function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 100 + "vw";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 500);
}


function goToValentine() {
    window.location.href = "valentine.html";
}
function showNextMessage() {
    if (index < messages.length) {
        text.classList.add("fade-out");

        setTimeout(() => {
            text.textContent = messages[index];
            text.classList.remove("fade-out");
            index++;

            setTimeout(showNextMessage, 2500);
        }, 800);
    } else {
        showFinalScene();
    }
}
showNextMessage();


