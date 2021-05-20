export function filtraFloat(valor) {
    let val = parseFloat(valor);
    return isNaN(val) ? 0 : val;
}