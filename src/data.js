export function ordenarAZ(data) {
  const ordenarAZdata = data.sort((a, b) => a.name.localeCompare(b.name)); 
  return ordenarAZdata;
}

export function ordenarZA(data) {
  const ordenarZAdata = data.slice().sort((a, b) => b.name.localeCompare(a.name));
  return ordenarZAdata;
}

export function temporada(data, Temporada) {
  const temporadaAFiltrar = parseInt(Temporada, 10);
  const filtroTemporada = data.filter((personaje)=> personaje.appearance.includes(temporadaAFiltrar));
  return filtroTemporada;
}

export const filtrar = (data, busquedaPersonaje) =>{
  // console.log(personaje.value);
  const texto = busquedaPersonaje.toLowerCase();
  const resultadosFiltrados = data.filter(personaje =>
    personaje.portrayed.toLowerCase().includes(texto) ||
    personaje.name.toLowerCase().includes(texto) ||
    personaje.nickname.toLowerCase().includes(texto)
  );
  return resultadosFiltrados.length > 0 ? resultadosFiltrados : [];
}
 
export function textoAASCII(texto) {
  const caracteresASCII = [];
  for (let i = 0; i < texto.length; i++) {
    const codigoASCII = texto.charCodeAt(i);
    caracteresASCII.push(codigoASCII);
    console.log(caracteresASCII);
  }
  return caracteresASCII;
}

export const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 62) + 1;
}

export const encontrar = (data) => {
  const numeroAleatorio = generarNumeroAleatorio();
  const cartaSeleccionada = data.find((personaje) => personaje.char_id === numeroAleatorio);
  return cartaSeleccionada;
} 

