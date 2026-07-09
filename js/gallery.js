/*
==================================
Aurora Birthday Website
Love Letter & Memory Gallery
==================================
*/

/* ==============================
   Love Letter
============================== */

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

const typingText = document.getElementById("typing-text");
const nextGalleryBtn = document.getElementById("nextGalleryBtn");

let typingIndex = 0;

function startTyping(){

    typingText.innerHTML = "";

    nextGalleryBtn.classList.add("hidden");

    typingIndex = 0;

    typeCharacter();

}

function typeCharacter(){

    if(typingIndex < letterText.length){

        typingText.innerHTML += letterText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeCharacter,35);

    }else{

        nextGalleryBtn.classList.remove("hidden");

    }

}

/* ==============================
   Gallery Data
============================== */

const memories = [

{
image:"assets/images/1.jpg",
caption:"Dari semua hal indah di dunia, senyummu tetap jadi favoritku. ❤️"
},

{
image:"assets/images/2.jpg",
caption:"Kamu cantik, bukan hanya karena wajahmu, tapi juga karena hatimu."
},

{
image:"assets/images/3.jpg",
caption:"Kalau ada definisi tentang rumah, mungkin itu adalah tempat di mana ada kamu."
},

{
image:"assets/images/4.jpg",
caption:"Melihatmu tersenyum selalu berhasil membuat hariku terasa lebih baik."
},

{
image:"assets/images/5.jpg",
caption:"Aku berharap senyum seindah ini akan selalu menghiasi setiap harimu."
},

{
image:"assets/images/6.jpg",
caption:"Terima kasih sudah menjadi seseorang yang begitu berarti dalam hidupku."
},

{
image:"assets/images/7.jpg",
caption:"Bertemu denganmu adalah salah satu hal terbaik yang pernah terjadi dalam hidupku."
},

{
image:"assets/images/8.jpg",
caption:"Di mataku, kamu selalu terlihat istimewa, apa pun keadaanmu."
},

{
image:"assets/images/9.jpg",
caption:"Semoga setiap impianmu menjadi kenyataan, karena kamu pantas mendapatkan semua kebahagiaan."
},

{
image:"assets/images/10.jpg",
caption:"Happy Birthday My Lovely Princess. I Love You Forever ❤️"
}

];

/* ==============================
   Gallery
============================== */

const gallerySection = document.getElementById("memory-gallery");
const galleryImage = document.getElementById("gallery-image");
const galleryCaption = document.getElementById("gallery-caption");

const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");
const galleryDots = document.getElementById("gallery-dots");
// Ending Elements
const ending = document.getElementById("ending");
const endingTitle = document.getElementById("ending-title");
const endingMessage = document.getElementById("ending-message");
const restartBtn = document.getElementById("restartBtn");

let currentPhoto = 0;

function loadPhoto(){

    galleryImage.style.opacity = 0;
    galleryCaption.style.opacity = 0;
    galleryImage.style.transform="scale(.95)";
    setTimeout(()=>{

        galleryImage.src = memories[currentPhoto].image;

        galleryCaption.textContent = memories[currentPhoto].caption;

        galleryImage.style.opacity = 1;
        galleryCaption.style.opacity = 1;
        galleryImage.style.transform="scale(1)";
       updateDots();
    },250);

}

function showGallery(){

    document.getElementById("love-letter").classList.add("hidden");

    gallerySection.classList.remove("hidden");

    createDots();

    loadPhoto();

}
function showEnding(){

    gallerySection.classList.add("hidden");

    ending.classList.remove("hidden");

    endingTitle.textContent = "Happy Birthday My Lovely Princess ❤️";

    endingMessage.innerHTML = `Before this day ends...

I just want you to know...

Thank you for every smile.
Thank you for every laugh.
Thank you for being part of my life.

No matter where life takes us...

I will always choose you.

Happy Birthday.

I Love You Forever ❤️`;

}
nextGalleryBtn.addEventListener("click",showGallery);

nextPhoto.addEventListener("click",()=>{

    currentPhoto++;

    if(currentPhoto>=memories.length){

        showEnding();

        return;

    }

    loadPhoto();

});

prevPhoto.addEventListener("click",()=>{

    currentPhoto--;

    if(currentPhoto<0){

        currentPhoto=memories.length-1;

    }

    loadPhoto();

});
restartBtn.addEventListener("click",()=>{

    currentPhoto = 0;

    ending.classList.add("hidden");

    gallerySection.classList.remove("hidden");
    createDots();
    loadPhoto();

});
function createDots(){

    galleryDots.innerHTML="";

    memories.forEach((_,index)=>{

        const dot=document.createElement("span");

        dot.className="gallery-dot";

        if(index===currentPhoto){

            dot.classList.add("active");

        }

        galleryDots.appendChild(dot);

    });

}

function updateDots(){

    const dots=document.querySelectorAll(".gallery-dot");

    dots.forEach((dot,index)=>{

        dot.classList.toggle("active",index===currentPhoto);

    });

}
let touchStartX=0;

gallerySection.addEventListener("touchstart",(e)=>{

    touchStartX=e.touches[0].clientX;

});

gallerySection.addEventListener("touchend",(e)=>{

    const touchEndX=e.changedTouches[0].clientX;

    if(touchStartX-touchEndX>50){

        nextPhoto.click();

    }

    if(touchEndX-touchStartX>50){

        prevPhoto.click();

    }

});
