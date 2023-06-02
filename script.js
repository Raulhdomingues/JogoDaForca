const tecnologias = [ 
    "java", "react", "node", "python", "php"
];
const palavraSecreta = tecnologias[Math.floor(Math.random() * tecnologias.length)];
const letrasErradas = [];
const letrasCorretas = [];

document.addEventListener("keydown", (evento) => {
    const codigo = evento.keyCode; // 65 - 90 (intervalo)
    if(isLetra(codigo)){
        const letra = evento.key;
        isLetra(letrasErradas.includes(letra)) {
            mostrarAvisoLetraRepetida();
        } else {
            if(palavraSecreta.includes(letra)){
                letrasCorretas.push(letra);
            } else {
                letrasErradas.push(letra);
            }
        }

        // atualizarJogo();
    }
})

function mostrarAvisoLetraRepetida () {
    const aviso = document.querySelector(".aviso-palavra-repetida");
    aviso.classList.add("show");
    setTimeout(() => {
        aviso.classList.remove("show");
    }, 1000);
}

function isLetra(codigo) {
    return codigo >= 65 && codigo <= 90;
}