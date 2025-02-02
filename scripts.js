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
    document.getElementById("canvas").style.display = "block";
    animarFlor();
    setTimeout(() => {
        document.getElementById("canvas").style.display = "none";
        document.getElementById("galeria").style.display = "block";
    }, 5000);
});

function animarFlor() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    let t = 0;
    const maxT = 2 * Math.PI;
    
    function dibujarFlor() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.translate(250, 250); // Centrar la flor

        for (let i = 0; i < 6; i++) {
            let petaloX = 100 * Math.sin(4 * t) * Math.cos(t);
            let petaloY = 100 * Math.sin(4 * t) * Math.sin(t);

            ctx.beginPath();
            ctx.arc(petaloX, petaloY, 30, 0, Math.PI * 2);
            ctx.fillStyle = "pink";
            ctx.fill();
            ctx.closePath();

            t += 0.1;
        }

        ctx.setTransform(1, 0, 0, 1, 0, 0); // Resetear la transformación

        if (t < maxT) {
            requestAnimationFrame(dibujarFlor);
        }
    }

    dibujarFlor();
}
