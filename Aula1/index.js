const { edtPlaneta, edtSuperTecno } = require('./arrays.js');

function mezclarListas(lista1, lista2) {
    let posicionLista1 = 0;
    let posicionLista2 = 0;
    let actual = 0;
    const listaGeneral = [];

    while (posicionLista1 < lista1.length && posicionLista2 < lista2.length) {
        if (lista1[posicionLista1].valor <= lista2[posicionLista2].valor) {
            listaGeneral[actual] = lista1[posicionLista1];
            posicionLista1++;
        } else {
            listaGeneral[actual] = lista2[posicionLista2];
            posicionLista2++;
        }
        actual++;
    }

    while(posicionLista1 < lista1.length) {
        listaGeneral[actual] = lista1[posicionLista1];
        posicionLista1++;
        actual++;
    }

    while(posicionLista2 < lista2.length) {
        listaGeneral[actual] = lista2[posicionLista2];
        posicionLista2++;
        actual++;
    }

    console.log(listaGeneral);
}

mezclarListas(edtPlaneta, edtSuperTecno);