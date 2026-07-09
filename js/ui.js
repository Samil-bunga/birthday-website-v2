/*
==================================
Aurora Birthday Website
UI Controller
==================================
*/

const loadingScreen = document.getElementById("loading-screen");
const app = document.getElementById("app");
const startButton = document.getElementById("startButton");

const story = document.getElementById("story");
const loveLetter = document.getElementById("love-letter");
const memoryGallery = document.getElementById("memory-gallery");

/*
==================================
Show Main Screen
==================================
*/

function showMainScreen() {

    loadingScreen.classList.add("hide");

    setTimeout(() => {

        app.classList.add("show");

        // Setelah Story tampil beberapa detik,
        // lanjut ke Love Letter
        setTimeout(showLoveLetter, 5000);

    }, 500);

}

/*
==================================
Show Love Letter
==================================
*/

function showLoveLetter() {

    story.classList.add("hidden");

    loveLetter.classList.remove("hidden");

    if (typeof startTyping === "function") {

        startTyping();

    }

}
/*
==================================
Show Gallery
==================================
*/

function showGallery() {

    loveLetter.classList.add("hidden");

    memoryGallery.classList.remove("hidden");

}

/*
==================================
Setup UI
==================================
*/

function setupUI() {

    startButton.addEventListener("click", () => {

        console.log("START clicked");

        showMainScreen();

        if (typeof startMusic === "function") {
            startMusic();
        }

    });

}
