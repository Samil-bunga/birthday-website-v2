/**
 * ============================================
 * Aurora Birthday Website
 * Configuration File
 * ============================================
 * Semua pengaturan website ada di sini.
 * Kamu cukup mengubah nilai di file ini tanpa
 * perlu menyentuh file JavaScript lainnya.
 */

const CONFIG = {

    // =============================
    // Informasi Website
    // =============================

    title: "Happy Birthday My Lovely Princess 🎂",

    recipient: "Aulia Nurmayanti",

    subtitle: "A Special Gift Made With ❤️",

    // =============================
    // Pesan Utama
    // =============================

    message: `

Selamat ulang tahun sayangkuu cintakuu.

Semoga semua impianmu satu per satu menjadi kenyataan, aamiinn.

Terima kasih sudah menjadi seseorang yang begitu berarti dlm hidup aku.

Semoga hari ini dipenuhi kebahagiaan, keceriaan, dan segala hal baik lainnya.

Dan semoga senyummu tidak pernah hilang.

Happy Birthday My Lovely Princess ❤️

`,

    // =============================
    // Tema
    // =============================

    theme: "aurora",

    // pilihan nanti:
    // aurora
    // sakura
    // galaxy
    // luxury

    // =============================
    // Musik
    // =============================

    music: "assets/music/birthday.mp3",

    autoPlayMusic: true,

    musicVolume: 0.7,

    // =============================
    // Galeri Foto
    // =============================

    photos: [

        "assets/images/1.jpg",
        "assets/images/2.jpg",
        "assets/images/3.jpg",
        "assets/images/4.jpg",
        "assets/images/5.jpg"

    ],

    // =============================
    // Efek
    // =============================

    typingSpeed: 45,

    floatingSpeed: 20,

    particleCount: 80,

    sparkle: true,

    confetti: true,

    // =============================
    // Animasi
    // =============================

    loadingDuration: 1200,

    fadeDuration: 800

};

// Mencegah perubahan konfigurasi saat runtime
Object.freeze(CONFIG);
