import { filtrar, ordenarAZ, ordenarZA, temporada } from "../src/data";

describe('ordenarAZ', () => {
  it('is a function', () => {
    expect(typeof ordenarAZ).toBe('function');
  });

  it('returns `ordenadoAZ`', () => {
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

  it('returns `example`', () => {
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

  it('returns `contieneTemporadas`', () => {

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

  it('returns `filtrado`', () => {

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
