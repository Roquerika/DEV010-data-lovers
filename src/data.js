export function ordenarAZ(data) {
  const ordenarAZdata = data.sort((a, b) => a.name.localeCompare(b.name));
  console.log(ordenarAZdata) /*sort ordena alfabéticamente la comparación de localeCompare para los nombres de los personajes*/
  return ordenarAZdata;
}

export function ordenarZA(data) {
  const ordenarZAdata = data.slice().sort((a, b) => b.name.localeCompare(a.name));/*data.slice permite realizar una copia del array orginal para ordenarlo sin alterarlo*/
  return ordenarZAdata;
}

export function temporada(data, Temporada) {
  const temporadaAFiltrar = parseInt(Temporada, 10); /*convierte la selleción en número*/
  const filtroTemporada = data.filter((personaje)=> personaje.appearance.includes(temporadaAFiltrar)); /*se filtra por la función personaje de acuerdo a que el número seleccionado en temporada coincida con la aparición en appareance del arreglo y lo mantenga con includes() al mostrar los resultados*/
  return filtroTemporada;
}


/*función de filtrar para búsqueda*/
export const filtrar = (data, busquedaPersonaje) =>{
  // console.log(personaje.value);
  const texto = busquedaPersonaje.toLowerCase();
  const resultadosFiltrados = data.filter(personaje =>
    personaje.portrayed.toLowerCase().includes(texto) ||
    personaje.name.toLowerCase().includes(texto) ||
    personaje.nickname.toLowerCase().includes(texto)
  );
  return resultadosFiltrados.length > 0 ? resultadosFiltrados : []; /*un operador ternario (?:) es análogo a un if, si se cumple la primera condición donde la longitud del texto en el buscador >0 y coincide con uno o más atributos del arreglo devuelve la o las tarjetas asociadas de lo contrario genera un arreglo vacío que en el DOM está vinculado a una pantalla de ERROR)*/
}
 
export function textoAASCII(texto) { /*Permite pasar los valores ingresados por el usuario a ASCII*/
  const caracteresASCII = []; /*Inicialmente definimos un arrelo vacío porque aquí se almacenará los valores ASCII*/
  for (let i = 0; i < texto.length; i++) {
    const codigoASCII = texto.charCodeAt(i); /*charCodeAt permite pasar de un letra a su equivalente es ASCII*/
    caracteresASCII.push(codigoASCII);/*.push agrega un elemento al final del arreglo*/
  }
  return caracteresASCII;
}

export const generarNumeroAleatorio = () => { /*genera un número aleatorio*/
  return Math.floor(Math.random() * 62) + 1; /*Math.random() va de 0 a 1 y .floor permite que la expresión sea un entero (finalmente queremos obtener un número aleatorio entre 1 y 62)*/
}

export const encontrar = (data) => {
  const numeroAleatorio = generarNumeroAleatorio();
  const cartaSeleccionada = data.find((personaje) => personaje.char_id === numeroAleatorio); /*.find permite encontrar un personaje cuyo char_id del arreglo sea extrictamente igual al numero aleatorio*/
  return cartaSeleccionada;
} 

