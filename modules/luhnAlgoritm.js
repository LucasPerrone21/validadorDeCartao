export default function luhnAlgoritmo(cartao) {
    let soma = 0;
    let devoDobrar = false;

    for (let i = cartao.length - 1; i >= 0; i--) {
        let valor = Number(cartao.charAt(i));
        if (devoDobrar) {
            valor *= 2;
            if (valor > 9) {
                valor -= 9;
            }
        }
        soma += valor;
        devoDobrar = !devoDobrar;
    }

    if (soma % 10 === 0) {
        return true;
    }
    return false;
}
