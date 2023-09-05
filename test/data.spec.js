import { filtrar, ordenarAZ, ordenarZA, temporada, textoAASCII, encontrar } from "../src/data";

describe('ordenarAZ', () => {
  it('is a function', () => {
    expect(typeof ordenarAZ).toBe('function');
  });

  it('returns `Arreglo ordenado AZ`', () => {
    const data=[
      { name: 'C' },
      { name: 'A' },
      { name: 'B' },
    ];
    const resultadoOrdenado = [
      { name: 'A' },
      { name: 'B' },
      { name: 'C' },
    ];      
    expect(ordenarAZ(data)).toEqual(resultadoOrdenado);
  });
});

describe('ordenarZA', () => {
  it('is a function', () => {
    expect(typeof ordenarZA).toBe('function');
  });

  it('returns `Arreglo ordenado ZA`', () => {
    const data=[
      { name: 'C' },
      { name: 'A' },
      { name: 'B' },
    ];
    const resultadoOrdenado = [
      { name: 'C' },
      { name: 'B' },
      { name: 'A' },
    ];   
    expect(ordenarZA(data)).toEqual(resultadoOrdenado);
  });
});
   
describe('temporada', () => {
  it('is a function', () => {
    expect(typeof temporada).toBe('function');
  });

  it('returns `arreglo contiene temporadas indicadas`', () => {

    const data = [
      {
        "char_id": 1,
        "name": "Walter White",
        "birthday": "09-07-1958",
        "occupation": [
          "High School Chemistry Teacher",
          "Meth King Pin"
        ],
        "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
        "status": "Presumed dead",
        "nickname": "Heisenberg",
        "appearance": [
          2,
          3,
          4,
          5
        ],
        "portrayed": "Bryan Cranston",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
      },
      {
        "char_id": 2,
        "name": "Jesse Pinkman",
        "birthday": "09-24-1984",
        "occupation": [
          "Meth Dealer"
        ],
        "img": "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
        "status": "Alive",
        "nickname": "Cap n' Cook",
        "appearance": [
          1,
          2,
          3,
          4,
          5
        ],
        "portrayed": "Aaron Paul",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
      },
    ];
    const Temporada= [
      1,
      2,
      3,
      4,
      5
    ];
    const resultadoFiltrados=[{
      "char_id": 2,
      "name": "Jesse Pinkman",
      "birthday": "09-24-1984",
      "occupation": [
        "Meth Dealer"
      ],
      "img": "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
      "status": "Alive",
      "nickname": "Cap n' Cook",
      "appearance": [
        1,
        2,
        3,
        4,
        5
      ],
      "portrayed": "Aaron Paul",
      "category": "Breaking Bad",
      "better_call_saul_appearance": []
    },];

    expect(temporada(data, Temporada)).toEqual(resultadoFiltrados);

  });
});

describe('filtrar', () => {
  it('is a function', () => {
    expect(typeof filtrar).toBe('function');
  });

  it('returns `filtrado por nickname, name o portrayed`', () => {

    const data = [
      {
        "char_id": 1,
        "name": "Walter White",
        "birthday": "09-07-1958",
        "occupation": [
          "High School Chemistry Teacher",
          "Meth King Pin"
        ],
        "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
        "status": "Presumed dead",
        "nickname": "Heisenberg",
        "appearance": [
          2,
          3,
          4,
          5
        ],
        "portrayed": "Bryan Cranston",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
      },
      {
        "char_id": 2,
        "name": "Jesse Pinkman",
        "birthday": "09-24-1984",
        "occupation": [
          "Meth Dealer"
        ],
        "img": "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
        "status": "Alive",
        "nickname": "Cap n' Cook",
        "appearance": [
          1,
          2,
          3,
          4,
          5
        ],
        "portrayed": "Aaron Paul",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
      },
    ];
    const nickname= "Heisenberg";
    const name= "Walter White";
    const portrayed= "Aaron Paul";

    const resultadoFiltradoNickname= [
      {
        "char_id": 1,
        "name": "Walter White",
        "birthday": "09-07-1958",
        "occupation": [
          "High School Chemistry Teacher",
          "Meth King Pin"
        ],
        "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
        "status": "Presumed dead",
        "nickname": "Heisenberg",
        "appearance": [
          2,
          3,
          4,
          5
        ],
        "portrayed": "Bryan Cranston",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
      },];
    const resultadoFiltradoName= [
      {
        "char_id": 1,
        "name": "Walter White",
        "birthday": "09-07-1958",
        "occupation": [
          "High School Chemistry Teacher",
          "Meth King Pin"
        ],
        "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
        "status": "Presumed dead",
        "nickname": "Heisenberg",
        "appearance": [
          2,
          3,
          4,
          5
        ],
        "portrayed": "Bryan Cranston",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
      },];
    const resultadoPortrayed=[{
      "char_id": 2,
      "name": "Jesse Pinkman",
      "birthday": "09-24-1984",
      "occupation": [
        "Meth Dealer"
      ],
      "img": "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
      "status": "Alive",
      "nickname": "Cap n' Cook",
      "appearance": [
        1,
        2,
        3,
        4,
        5
      ],
      "portrayed": "Aaron Paul",
      "category": "Breaking Bad",
      "better_call_saul_appearance": []
    },
    ];

    expect(filtrar(data, nickname)).toEqual(resultadoFiltradoNickname);
    expect(filtrar(data, name)).toEqual(resultadoFiltradoName);
    expect(filtrar(data, portrayed)).toEqual(resultadoPortrayed);

  });
});

describe('textoAASCII', () => {
  it('is a function', () => {
    expect(typeof textoAASCII).toBe('function');
  });

  it('returns `texto en ASCII`', () => {
    const data='Erika'
    const arrayASCII = [69, 114, 105, 107, 97];      
    expect(textoAASCII(data)).toEqual(arrayASCII);
  });
});

describe('encontrar', () => {
  it('is a function', () => {
    expect(typeof encontrar).toBe('function');
  });
  it('returns `char_id encontrado`', () => {
    const datosJson = [
      { "char_id": 1, "name": "Personaje 1" },
      { "char_id": 2, "name": "Personaje 2" },
      { "char_id": 3, "name": "Personaje 3" },
      { "char_id": 4, "name": "Personaje 4" },
      { "char_id": 5, "name": "Personaje 5" },
      { "char_id": 6, "name": "Personaje 6" },
      { "char_id": 7, "name": "Personaje 7" },
      { "char_id": 8, "name": "Personaje 8" },
      { "char_id": 9, "name": "Personaje 9" },
      { "char_id": 10, "name": "Personaje 10" },
      { "char_id": 11, "name": "Personaje 11" },
      { "char_id": 12, "name": "Personaje 12" },
      { "char_id": 13, "name": "Personaje 13" },
      { "char_id": 14, "name": "Personaje 14" },
      { "char_id": 15, "name": "Personaje 15" },
      { "char_id": 16, "name": "Personaje 16" },
      { "char_id": 17, "name": "Personaje 17" },
      { "char_id": 18, "name": "Personaje 18" },
      { "char_id": 19, "name": "Personaje 19" },
      { "char_id": 20, "name": "Personaje 20" },
      { "char_id": 21, "name": "Personaje 21" },
      { "char_id": 22, "name": "Personaje 22" },
      { "char_id": 23, "name": "Personaje 23" },
      { "char_id": 24, "name": "Personaje 24" },
      { "char_id": 25, "name": "Personaje 25" },
      { "char_id": 26, "name": "Personaje 26" },
      { "char_id": 27, "name": "Personaje 27" },
      { "char_id": 28, "name": "Personaje 28" },
      { "char_id": 29, "name": "Personaje 29" },
      { "char_id": 30, "name": "Personaje 30" },
      { "char_id": 31, "name": "Personaje 31" },
      { "char_id": 32, "name": "Personaje 32" },
      { "char_id": 33, "name": "Personaje 33" },
      { "char_id": 34, "name": "Personaje 34" },
      { "char_id": 35, "name": "Personaje 35" },
      { "char_id": 36, "name": "Personaje 36" },
      { "char_id": 37, "name": "Personaje 37" },
      { "char_id": 38, "name": "Personaje 38" },
      { "char_id": 39, "name": "Personaje 39" },
      { "char_id": 40, "name": "Personaje 40" },
      { "char_id": 41, "name": "Personaje 41" },
      { "char_id": 42, "name": "Personaje 42" },
      { "char_id": 43, "name": "Personaje 43" },
      { "char_id": 44, "name": "Personaje 44" },
      { "char_id": 45, "name": "Personaje 45" },
      { "char_id": 46, "name": "Personaje 46" },
      { "char_id": 47, "name": "Personaje 47" },
      { "char_id": 48, "name": "Personaje 48" },
      { "char_id": 49, "name": "Personaje 49" },
      { "char_id": 50, "name": "Personaje 50" },
      { "char_id": 51, "name": "Personaje 51" },
      { "char_id": 52, "name": "Personaje 52" },
      { "char_id": 53, "name": "Personaje 53" },
      { "char_id": 54, "name": "Personaje 54" },
      { "char_id": 55, "name": "Personaje 55" },
      { "char_id": 56, "name": "Personaje 56" },
      { "char_id": 57, "name": "Personaje 57" },
      { "char_id": 58, "name": "Personaje 58" },
      { "char_id": 59, "name": "Personaje 59" },
      { "char_id": 60, "name": "Personaje 60" },
      { "char_id": 61, "name": "Personaje 61" },
      { "char_id": 62, "name": "Personaje 62" },
    ];
    expect(encontrar(datosJson)).toBeDefined();
  });
});
  