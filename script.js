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

        // letra faz parte ou nao da palavra
    }
})

function isLetra(codigo) {
    return codigo >= 65 && codigo <= 90;
}