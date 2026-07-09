/*
==================================
Love Letter & Gallery Controller
==================================
*/

// ================================
// Love Letter Text
// ================================

const letterText = `Happy Birthday, My Lovely Princess ❤️

Hari ini adalah hari yang spesial, karena seseorang yang paling berarti dalam hidupku bertambah usia.

Terima kasih sudah hadir di hidupku.
Terima kasih sudah menjadi alasan aku tersenyum.

Aku berharap semua impianmu tercapai.
Semoga kamu selalu sehat, bahagia, dan selalu dikelilingi oleh orang-orang yang menyayangimu.

Dan semoga...
aku selalu menjadi salah satu alasan di balik senyum indahmu.

I Love You.
Forever and Always. ❤️`;

// ================================
// Element
// ================================

const typingText = document.getElementById("typing-text");
const nextGalleryBtn = document.getElementById("nextGalleryBtn");

let index = 0;

// ================================
// Typing Effect
// ================================

function startTyping() {

    typingText.innerHTML = "";

    nextGalleryBtn.classList.add("hidden");

    index = 0;

    typeCharacter();

}

function typeCharacter() {

    if (index < letterText.length) {

        typingText.innerHTML += letterText.charAt(index);

        index++;

        setTimeout(typeCharacter, 35);

    } else {

        nextGalleryBtn.classList.remove("hidden");

    }

}

// ================================
// Continue Button
// ================================

nextGalleryBtn.addEventListener("click", () => {

    if (typeof showGallery === "function") {

        showGallery();

    }

});
