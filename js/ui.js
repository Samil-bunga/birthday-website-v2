/*
==================================
Aurora Birthday Website
UI Controller
==================================
*/

const loadingScreen = document.getElementById("loading-screen");
const app = document.getElementById("app");
const startButton = document.getElementById("startButton");

function showMainScreen() {

    loadingScreen.classList.add("hide");

    setTimeout(() => {

        app.classList.add("show");

    }, 500);

}

function setupUI() {

    startButton.addEventListener("click", () => {

        console.log("START clicked");

        showMainScreen();

        if (typeof startMusic === "function") {
            startMusic();
        }

    });

}
