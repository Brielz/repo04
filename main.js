let header = document.getElementById("header");
let tabla = document.getElementById("tabla");
let itemGen = document.createElement("p");
// let itemGen = document.getElementById("item-generator");
const arregloItems = ["item", "item", "item", "item", "item", "item", "item", "item", "item"];
let item ="";
const encabezado = () => {
    header.innerHTML = `
    <h1 class="titulo">Proyecto Fun<span class="title-style">dacio Esplai</span> </h1>
    <div class="contenedor-informativo">
        <p class="texto-informativo">Texto de prueba</p>
    </div>
    <h3 class="subtitulo">soy un subtitulo</h3>
    `
}

const iterar = (i) => {
    for (; i < arregloItems.length; i++) {
        item = '<p>' + arregloItems[i] + '</p>';
    }
    return item;
}
const tablaMet = () => {

    itemGen.innerHTML = "Hola";   
    
    tabla.innerHTML = `
        <div class="contenedor-tabla">
            <div class="tabla-grid">
            <p class="row">tabla 1</p>
            <p class="row">tabla 2</p>
            <p class="row">tabla 3</p>
            <p class="">Hola</p>
            <p class="">Mundo</p>
            <p class="">QueLoQue</p>
            </div>
        </div>
        `

    
}
// iterar(arregloItems.length)
encabezado();
tablaMet();