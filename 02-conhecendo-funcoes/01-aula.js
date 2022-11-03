function syMyName(name) {
    console.log('Your name is '+ name);
}

function quadrado(valor) {
    return valor * valor;
}

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

function main() {
    console.log('Programa pricipal');

    syMyName('alerrandro');

    const quadradoDe10 = quadrado(10);
    console.log(quadradoDe10);
    console.log(quadradoDe10 + quadradoDe10);

    console.log(incrementarJuros(100, 10));
}

main();