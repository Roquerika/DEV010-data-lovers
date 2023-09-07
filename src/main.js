import data from './data/breakingbad/breakingbad.js';
import { ordenarAZ, ordenarZA, temporada, filtrar, textoAASCII, encontrar } from './data.js';

/*Con esta función mostramos las tarjetas*/

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
    const nickname = document.createElement('h4')
    nickname.textContent = p.nickname
    nickname.className = 'caracteristicas'
    const occupation = document.createElement('h4')
    occupation.textContent = p.occupation
    occupation.className = 'caracteristicas'
    const status = document.createElement('h4')
    status.textContent = p.status
    status.className = 'caracteristicas'
    characterCard.append(img, titulo, nickname, occupation, status)
    main.append(characterCard)
  });
}
getData(data.breaking_bad) 

/*Podemos ejecutar la función ordenarAZ en data.js cuando el usuario haga click en el btn*/
const btnOrdenarAZ = document.querySelector('#btnOrdenarAZ');
btnOrdenarAZ.addEventListener("click", ()=>{
// llamar
//  console.log(ordenarAZ);
// invocacion
// console.log(ordenarAZ(data.breaking_bad))
  const ejecutarOrdenarAZ = ordenarAZ(data.breaking_bad)
  getData(ejecutarOrdenarAZ) /*se está usando la función getData inicial para generar las tarjetas ordenadas con ordenarAZ desde data.js*/
}); 

/*Podemos ejecutar la función ordenarZA en data.js cuando el usuario haga click en el btn*/
const btnOrdenarZA = document.querySelector('#btnOrdenarZA');
btnOrdenarZA.addEventListener("click", ()=>{
  const ejecutarOrdenarZA = ordenarZA(data.breaking_bad)
  getData(ejecutarOrdenarZA) /*se está usando la función getData inicial para generar las tarjetas ordenadas con ordenarZA desde data.js*/
}); 

/*Podemos ejecutar la función temporada en data.js cuando el usuario cambia el selector de temporada y elige una*/
const selectorTemporada= document.querySelector('#selectorTemporada');
selectorTemporada.addEventListener("change", ()=>{
  const ejecutarFiltarTemporada = temporada(data.breaking_bad, selectorTemporada.value)
  getData(ejecutarFiltarTemporada) /*se está usando la función getData inicial para generar las tarjetas de acuerdo a la temporada selecciona desde data.js*/
});

const btnBuscar = document.querySelector('#buscar');
const busquedaPersonaje = document.querySelector('#busquedaPersonaje');
const resultado = document.querySelector('#resultado');

/*Podemos ejecutar la función buscar personaje, actor, actriz, apodo, dato inválido, vacío en data.js cuando el usuario hace click en buscar después de ingresar o no datos en el buscador*/
btnBuscar.addEventListener('click', () => {
  const valorBusqueda = busquedaPersonaje.value.trim();
  resultado.textContent = '';
  
  if (valorBusqueda === '') { /*if es una setencia*/
    resultado.style.display='block';
  } else {
    const ejecutarFiltrar = filtrar(data.breaking_bad, busquedaPersonaje.value);

    if (ejecutarFiltrar.length > 0) {
      getData(ejecutarFiltrar); /*se está usando la función getData inicial para generar las tarjetas de acuerdo a el elemento a filtrar con la función filtrar en data.js*/
    } else {
      resultado.style.display='block';
    }
  }
}
);

const btnCalculo = document.querySelector('#Calculo');
const calculoContainer = document.getElementById("calculoContainer");

/*Podemos ejecutar la función mostrar calculoContainer en data.js a partir del click en ¿Qué personaje serías tú? */
btnCalculo.addEventListener('click', () => {
  if (calculoContainer.style.display === "none" || calculoContainer.style.display === "") {
    calculoContainer.style.display = "block";
  } else {
    calculoContainer.style.display = "none";
  }
});

/*Llenado de formulario en CalculoContainar sin enviar porque vamos a utilizar los datos ingresados para un cálculo*/
document.getElementById('procesar').addEventListener('click', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario automáticamente
  const nombre = document.getElementById('Nombre').value;
  const signo = document.getElementById('Signo').value;
  const elemento = document.getElementById('Elemento').value;
 
  /*Todos los datos ingresados pasan a ASCII llamando a la función textoAACII en data.js*/
  const nombreASCII = textoAASCII(nombre);
  // console.log (nombreASCII);
  const elementoASCII = textoAASCII(elemento);
  const signoASCII = textoAASCII(signo);

  const promedioASCII = parseInt((nombreASCII.reduce((a, b) => a + b, 0) + signoASCII.reduce((a, b) => a + b, 0) + elementoASCII.reduce((a, b) => a + b, 0)) / 3);
  console.log(promedioASCII); /*reduce permite reducir los elementos del array a uno solo sumandólos entre sí e inicialmente parte de cero, al final se hace un promedio y con parseInt se obtine un entero)*/
});

const btnProcesar = document.querySelector('#procesar');

/*Podemos ejecutar la función mostrar encontrar en data.js a partir del click en procesar en CalculoContainer */
btnProcesar.addEventListener("click", ()=>{
  const ejecutarEncontrar = encontrar(data.breaking_bad);
  if (calculoContainer.style.display === "block") {
    calculoContainer.style.display = "none";}
  getData([ejecutarEncontrar]) /*Expresión (genera un valor) compuesta de varias sentencias */ /*se está usando la función getData inicial para generar la carta aleatoria la función encontrar en data.js*/
});

// function PlayAudio() {
//   document.getElementById("cancionBreakingBad").play();
// }
// PlayAudio(); // Llama a la función para reproducir el audio automáticamente