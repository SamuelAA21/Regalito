document.getElementById("ingresar-btn").addEventListener("click", function() {
    document.getElementById("pantalla-negra").style.display = "block";
    setTimeout(() => {
        document.getElementById("pantalla-negra").style.opacity = "1";
    }, 100);
    setTimeout(() => {
        document.getElementById("pantalla-negra").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("pantalla-negra").style.display = "none";
            document.getElementById("contenedor-regalo").style.display = "block";
        }, 1000);
    }, 3000);
});

document.getElementById("regalo").addEventListener("click", function() {
    document.getElementById("contenedor-regalo").style.display = "none";
    document.getElementById("flor-container").style.display = "block";

    setTimeout(() => {
        document.getElementById("flor-container").style.display = "none";
        document.getElementById("galeria").style.display = "block";
    }, 5000);
});
