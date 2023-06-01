const tecnologias = [ 
    "java", "react", "node", "python", "php"
];
const palavraSecreta = tecnologias[Math.floor(Math.random() * tecnologias.length)];

document.addEventListener("keydown", (evento) => {
    const codigo = evento.keyCode; // 65 - 90 (intervalo)
    if(isLetra(codigo)){
        //...
    }
})

function isLetra(codigo) {
    return codigo >= 65 && codigo <= 90;
}