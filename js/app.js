/*
==================================
Main App
==================================
*/

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("title").textContent = CONFIG.title;

    document.getElementById("subtitle").textContent = CONFIG.subtitle;

    document.getElementById("message").innerText = CONFIG.message;

    setupUI();

});
