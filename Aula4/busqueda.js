const { listaLibros } = require('./arrays.js');

function busqueda(array, desde, hasta, valor) {
    const posicionMedio = Math.floor((desde + hasta) / 2);
    const analizado = array[posicionMedio];
    console.log('desde, hasta',desde,hasta);
    /*
    if (desde > hasta) {
        return -1;//Significa que no consiguió el elemento.
    }
    */

    if (valor === analizado.valor) {
        return posicionMedio;
    }

    if (valor < analizado.valor) {
        return busqueda(array,desde,(posicionMedio-1),valor);
    }

    if (valor > analizado.valor) {
        return busqueda(array,(posicionMedio+1),hasta,valor);
    }
}

console.log(busqueda(listaLibros,0,listaLibros.length-1,23));