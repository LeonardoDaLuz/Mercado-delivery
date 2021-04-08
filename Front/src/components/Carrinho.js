export default class Carrinho {
    load(callback) {
        let resp = await fetch("http://localhost:3001/carrinho");
        if (resp.ok)
            throw new error(resp.status);

        let carrinho = resp.json();
        callback(carrinho);
    }
}