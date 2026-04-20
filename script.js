function mostrar(id) {
    document.querySelectorAll(".seccion").forEach(s => s.classList.remove("activa"));
    document.getElementById(id).classList.add("activa");
}

function abrirSobre() {
    let contenedor = document.querySelector(".sobre-container");
    contenedor.classList.add("abierto");

    setTimeout(() => {
        mostrar("carta");
        escribir();
    }, 1200);
}

let mensaje = "Gracias por haberle dado sentido a mi vida, eres lo mejor que me pudo pasar y no quiero irme de tu lado, te quiero de una manera que me cuesta expresar de tal manera que apenas te vi ayer y ya quiero verte denuevo de una manera que me hace querer pasar cada dia, minuto y segundo a tu lado, se que no ofrezco mucho pero si te ofrezco el cariño sincero de un chico enamorado que lo unico que hace es pensar en ti todo el dia todos los dias, tu eres esa persona que vale la pena, una persona por la cual vale la pena esperar y si asi tiene que hacer yo esty dispuesto a hacerlo ❤️";
let i = 0;

function escribir() {
    let texto = document.getElementById("texto");
    texto.innerHTML = "";
    i = 0;

    function escribirLetra() {
        if (i < mensaje.length) {
            texto.innerHTML += mensaje.charAt(i);
            i++;
            setTimeout(escribirLetra, 40);
        }
    }

    escribirLetra();
}

function moverNo() {
    let no = document.getElementById("no");
    let si = document.getElementById("si");
    let area = document.querySelector(".botones-area");

    let maxX = area.clientWidth - no.offsetWidth;
    let maxY = area.clientHeight - no.offsetHeight;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    no.style.left = x + "px";
    no.style.top = y + "px";

    let escala = si.getAttribute("data-scale") || 1;
    escala = parseFloat(escala) + 0.2;

    si.style.transform = "scale(" + escala + ")";
    si.setAttribute("data-scale", escala);
}

function final() {
    mostrar("final");

    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-10px";
        heart.style.fontSize = "20px";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }, 200);
}