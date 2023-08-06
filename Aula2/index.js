const { listaLibros } = require('./arrays.js');

function mergetSort(array, nivel = 0) {

    console.log('Nivel de profunidad:',nivel);
    console.log(array);
    if (array.length > 1) {
        const mitad = Math.floor(array.length / 2);
        const lista1 = mergetSort(array.slice(0,mitad), nivel + 1);
        const lista2 = mergetSort(array.slice(mitad), nivel + 1);

        array = ordenarListas(lista1, lista2);
    }

    return array;
}

function ordenarListas(lista1, lista2) {
    let posicionLista1 = 0;
    let posicionLista2 = 0;

    const listaGeneral = [];

    while (posicionLista1 < lista1.length && posicionLista2 < lista2.length) {
        if (lista1[posicionLista1].valor <= lista2[posicionLista2].valor) {
            listaGeneral.push(lista1[posicionLista1]);
            posicionLista1++;
        } else {
            listaGeneral.push(lista2[posicionLista2]);
            posicionLista2++;
        }
    }

    return listaGeneral.concat(
        posicionLista1 < lista1.length ?
        lista1.slice(posicionLista1) :
        lista2.slice(posicionLista2)
    )

}

console.log(mergetSort(listaLibros));