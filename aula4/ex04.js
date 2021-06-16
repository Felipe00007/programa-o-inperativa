function podeSubir(altura, estarAcompanhada) {

    if (altura < 1.20) {
        return console.log("Acesso Negado");

    } else if (altura < 1.40 && estarAcompanhada) {
        return console.log("Acesso autorizado somente com acompanhante");

    } else if (altura > 1.40 && altura < 2.00) {
        return console.log("Acesso autorizado");

    } else {
        return console.log("Acesso Negado")
    }
}

altura = 1.3
estarAcompanhada = false;


podeSubir(altura, estarAcompanhada)
