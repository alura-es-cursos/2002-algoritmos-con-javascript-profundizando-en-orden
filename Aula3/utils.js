const { listaLibros } = require('./arrays.js');

function encontrarMenores(pivote, array) {
    let menores = 0;
    const posicionPivote = array.indexOf(pivote);

    for(let i = 0;i < array.length;i++) {
        if (array[i].valor <= pivote.valor && posicionPivote != i) {
            menores++;
        }
    }

    cambiarLugar(array,posicionPivote,menores);

    return array;
}

function cambiarLugar(array,desde,para) {
    const ele1 = array[desde];
    const ele2 = array[para];

    array[desde] = ele2;
    array[para] = ele1;
}

function dividePorPivote(array) {
    const pivote = array[Math.floor(array.length/2)];
    encontrarMenores(pivote,array);
    let posMenor = 0;

    for(let i = 0; i < array.length; i++ ) {
        if (array[i].valor <= pivote.valor && array[i] != pivote) {
            cambiarLugar(array,i,posMenor);
            posMenor++;
        }
    }
    return array;
}


//console.log(encontrarMenores(listaLibros[5],listaLibros));
//console.log(dividePorPivote(listaLibros));

module.exports = { cambiarLugar }

