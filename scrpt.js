const butao = document.getElementById("btn");
const imag = document.getElementById("image-gift");
const image_fechar = document.getElementById("image-fechar");
var imageEstatica = "img/SofaboraCodar.png";
var imageDinamica = "img/SofáboraCodar.gif";
let aux1, aux2;

butao.addEventListener('click', (event) => {
    manipular();
})

function manipular(){
    document.getElementById("image").src=imageEstatica;
    aux1 = imageEstatica;
    imageEstatica = imageDinamica;
    imageDinamica = aux1;
    if(imag.style.display === "block" && image_fechar.style.display === "none"){
       imag.style.display = "none";
       image_fechar.style.display = "block";
    }
    else{
        imag.style.display = "block";
       image_fechar.style.display = "none";
    }
}