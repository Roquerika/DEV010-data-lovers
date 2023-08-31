export function ordenarAZ(data) {
  const ordenarAZdata = data.sort((a, b) => a.name.localeCompare(b.name)); 
  return ordenarAZdata
}

export function ordenarZA(data) {
  const ordenarZAdata = data.slice().sort((a, b) => b.name.localeCompare(a.name));
  return ordenarZAdata
}

export function temporada(data, Temporada) {
  const temporadaAFiltrar = parseInt(Temporada, 10);
  const filtroTemporada = data.filter((personaje)=> personaje.appearance.includes(temporadaAFiltrar));
  return filtroTemporada
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
};
 
