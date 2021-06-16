function podeSubir(altura, estarAcompanhada) {

    if (altura < 1.20) {
        return false;

    } else if (altura < 1.40 && estarAcompanhada) {
        return true;

    } else if (altura >= 1.40 && altura < 2.00) {
        return true;

    } else {
        return false
    }
}

altura = 1.3
estarAcompanhada = false;
console.log(podeSubir(1,3,true))
