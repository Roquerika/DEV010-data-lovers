import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/breakingbad/breakingbad.js';
// import data from './data/rickandmorty/rickandmorty.js';

/*console.log(example, data);

const divRoot = document.getElementById('root');
const arr = ["KABCDEFGHIJKLMNOPQ","L","F"];
function draw(){
  let contentRoot="";
  for (let i=0; i<arr.length;i++){
    contentRoot+=`<p>${arr[i]}</p>`
  }
  console.log({contentRoot})
  divRoot.innerHTML=contentRoot;
}
draw()*/

// Array.prototype.forEach()

/*const dataFilms = {

};*/

const searchName = 'Walter White';
const foundName = data.breaking_bad.find((name)=> name.breaking_bad===searchName);
/*console.log(foundName); //Revisar para activar el buscador*/

function printdata(array){
    const container = document.querySelector('.character-card')
    for(let i=0 ; i<array.length; i++){
       // console.log(data.array[i]);
        container.innerHTML += `<figure>
        <img
        src="${array[i].img}"
        alt="${array[i].name}"
        />
        <figcaption>"${array[i].name}"</figcaption>
        </figure>` //template String (envío elementos de HTML como si fuesen de JS)
    }
  }
});

const btnCalculo = document.querySelector('#Calculo');
const calculoContainer = document.getElementById("calculoContainer");
btnCalculo.addEventListener('click', () => {
  if (calculoContainer.style.display === "none" || calculoContainer.style.display === "") {
    calculoContainer.style.display = "block";
  } else {
    calculoContainer.style.display = "none";
  }
});

function PlayAudio() {
  document.getElementById("cancionBreakingBad").play();
}
printdata(data.breaking_bad)

//Cuando tenga el buscador le puedo enviar foundName a print data para reutilizar el código, el bucle for repite una acción y la función nos permite reutilizar.

