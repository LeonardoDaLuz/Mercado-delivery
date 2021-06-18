
const { resolveInclude } = require('ejs');
var express = require('express');

module.exports = (app) => {
    app.get("/calculaCategoria", async function (req, resp) {
        console.log("calculando categorias");

        produtosColecao = await global.db.findAll("produtos");

        let hierarquia = {};

        produtosColecao.forEach(p => {
            hierarquia = inclui(p.categories, 0, hierarquia);

        });
        resp.json(hierarquia);
    });

    function inclui(listaCategorias, index, hierarquia) {
        if(listaCategorias[index] === undefined)
        {
            return hierarquia;
        }
    
        if (hierarquia[listaCategorias[index]] == undefined) {
            hierarquia[listaCategorias[index]] = inclui(listaCategorias, index + 1, {});
        } else {
            hierarquia[listaCategorias[index]] = inclui(listaCategorias, index + 1, hierarquia[listaCategorias[index]]);
        }

        return hierarquia;
    }
}