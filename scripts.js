document.addEventListener("DOMContentLoaded", function () {
    let gift = document.getElementById("gift");
    let giftImage = document.getElementById("gift-image");
    let doll = document.getElementById("dancing-doll");

    gift.addEventListener("click", function () {
        giftImage.src = "gift-open.png";  // Imagen del regalo abierto
        doll.classList.add("dancing");
    });
});
        