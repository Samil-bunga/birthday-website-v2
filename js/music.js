/*
==================================
Music Controller
==================================
*/

const music = document.getElementById("birthdayMusic");

function startMusic() {

    if (!music) return;

    music.src = CONFIG.music;

    music.volume = CONFIG.musicVolume;

    music.play().catch(() => {

        console.log("Music belum tersedia.");

    });

}
