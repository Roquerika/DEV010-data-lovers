import data from './data/breakingbad/breakingbad.js';
import { ordenarAZ, ordenarZA, temporada, filtrar, textoAASCII, encontrar } from './data.js';

function getData(data) {

  const main = document.querySelector('main')
  main.innerHTML = ''

  data.forEach(p => {
    /*Codigo para crear la tarjeta*/
    const characterCard = document.createElement('div')
    
    characterCard.className = "character-card"
    const img = document.createElement('img')
    img.src = p.img
    const titulo = document.createElement('h3')
    titulo.textContent = p.name
    characterCard.append(img, titulo)
    main.append(characterCard)
    return data.map(p=>({name:p.name, img:p.img}))
  });
}
// const characterArray = Object.values(data.breaking_bad);
// getData(characterArray);
// console.log(data.breaking_bad);
getData(data.breaking_bad) 

const btnOrdenarAZ = document.querySelector('#btnOrdenarAZ');
btnOrdenarAZ.addEventListener("click", ()=>{
// llamar
//  console.log(ordenarAZ);
// invocacion
// console.log(ordenarAZ(data.breaking_bad))
  const ejecutarOrdenarAZ = ordenarAZ(data.breaking_bad)
  getData(ejecutarOrdenarAZ)
}); 

const btnOrdenarZA = document.querySelector('#btnOrdenarZA');
btnOrdenarZA.addEventListener("click", ()=>{
  const ejecutarOrdenarZA = ordenarZA(data.breaking_bad)
  getData(ejecutarOrdenarZA)
}); 

const selectorTemporada= document.querySelector('#selectorTemporada');
selectorTemporada.addEventListener("change", ()=>{
  const ejecutarFiltarTemporada = temporada(data.breaking_bad, selectorTemporada.value)
  getData(ejecutarFiltarTemporada)
});

const btnBuscar = document.querySelector('#buscar');
const busquedaPersonaje = document.querySelector('#busquedaPersonaje');
const resultado = document.querySelector('#resultado');

btnBuscar.addEventListener('click', () => {
  const valorBusqueda = busquedaPersonaje.value.trim();
  resultado.textContent = '';
  
  if (valorBusqueda === '') {
    resultado.style.display='block';
  } else {
    const ejecutarFiltrar = filtrar(data.breaking_bad, busquedaPersonaje.value);

    if (ejecutarFiltrar.length > 0) {
      getData(ejecutarFiltrar);
    } else {
      resultado.style.display='block';
    }
  }
}
);

const btnCalculo = document.querySelector('#Calculo');
const calculoContainer = document.getElementById("calculoContainer");
btnCalculo.addEventListener('click', () => {
  if (calculoContainer.style.display === "none" || calculoContainer.style.display === "") {
    calculoContainer.style.display = "block";
  } else {
    calculoContainer.style.display = "none";
  }
});

document.getElementById('procesar').addEventListener('click', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario automáticamente
  const nombre = document.getElementById('Nombre').value;
  const signo = document.getElementById('Signo').value;
  const elemento = document.getElementById('Elemento').value;
  // Procesa los datos o envíalos al servidor

  const nombreASCII = textoAASCII(nombre);
  const elementoASCII = textoAASCII(elemento);
  const signoASCII = textoAASCII(signo);

  const promedioASCII = parseInt((nombreASCII.reduce((a, b) => a + b, 0) + signoASCII.reduce((a, b) => a + b, 0) + elementoASCII.reduce((a, b) => a + b, 0)) / 3);
  console.log(promedioASCII);
});

const btnProcesar = document.querySelector('#procesar');
btnProcesar.addEventListener("click", ()=>{
  const ejecutarEncontrar = encontrar(data.breaking_bad);
  console.log(ejecutarEncontrar);
  // getData(ejecutarEncontrar)
});

// function PlayAudio() {
//   document.getElementById("cancionBreakingBad").play();
// }
// PlayAudio(); // Llama a la función para reproducir el audio automáticamente