const photos = [
    "Photos/photo1.jpg",
    "Photos/photo2.jpg",
    "Photos/photo3.jpg",
    "Photos/photo4.jpg",
    "Photos/photo5.jpg",
    "Photos/photo6.jpg",
    "Photos/photo7.jpg",
    "Photos/photo8.jpg"
];

const messages = [
    "The first time I drove you home",
    "My favourite photo of us",
    "Us and our mini pumpkins",
    "The photo that brings a smile to my face",
    "All the random convos we've had on your bed",
    "Camping trip",
    "Every kiss lights up my heart",
    "I love you Mira <3"
];

const compliments = [
    "Fact #27: Mira is illegally cute.",
    "Fact #42: Scientists are studying her smile.",
    "Fact #103: Halibut approved.",
    "Fact #88: She is 100% boyfriend certified.",
    "Fact #12: Too powerful for this planet."
];

const wrongPasswords = [
    "The password is something I call you",
    "From a very special day",
    "Not your name",
    "Salmon? No, not that",
    "Hint: The nickname from our first date <3"
];

let currentIndex = 0;
let loveLevel = 0;

/* PASSWORD CHECK */

function checkPassword() {
    const input = document.getElementById("passwordInput").value;

    if (input === "halibut++") {
        unlockApp();
        document.getElementById("app").classList.add("hidden");
        document.getElementById("secretMode").classList.remove("hidden");
    }
    else if (input.toLowerCase() === "halibut") {
        unlockApp();
    }
    else {
        const randomMsg = wrongPasswords[Math.floor(Math.random() * wrongPasswords.length)];
        document.getElementById("errorMsg").innerText = randomMsg;
    }
}

function unlockApp() {
    document.getElementById("lockScreen").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");

    document.body.classList.add("app-background");

    document.getElementById("heartsContainer").classList.remove("hidden");

    document.getElementById("bgMusic").play();

    setTimeout(() => {
        const notif = document.getElementById("notification");
        notif.classList.remove("hidden");
        notif.classList.add("show");

        setTimeout(() => {
            notif.classList.remove("show");
        }, 4000);
    }, 1000);
}

/* SLIDER */

function nextSlide() {
    currentIndex++;
    if (currentIndex >= photos.length) currentIndex = 0;

    document.getElementById("slide").src = photos[currentIndex];
    document.getElementById("loveText").innerText = messages[currentIndex];
}

/* LOVE METER */

function increaseLove() {
    if (loveLevel < 100) {
        loveLevel += 10;
        document.getElementById("loveFill").style.width = loveLevel + "%";
    }

    if (loveLevel >= 100) {
        document.getElementById("loveStatus").innerText = "Love Level: To the Moon and Back <3";
    }
}

/* COMPLIMENT */

function generateCompliment() {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    document.getElementById("complimentText").innerText = randomCompliment;
}

/* HEARTS */

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.getElementById("heartsContainer").appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 500);
