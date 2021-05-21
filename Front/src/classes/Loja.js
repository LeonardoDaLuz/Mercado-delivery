import Carrinho from './Carrinho';



export default class Loja {
    constructor(parent) {
        parent.state = {
            ...parent.state,
            localizacaoLoja: { lat: -25.5187973, long: -48.5325122 },
            localizacaoCliente: { lat: 0, long: 0 },
            frete: 0,
            listaProdutos: [],
            produtoCarregado: {
                _id: -1,
                titulo: '',
                categorias: [],
                descricao: '',
            },
            seletorListaDeProdutos: {
                faixaPreco: {
                    min: "",
                    max: ""
                }
            },
            categorias: {}
        }

        this.setState = parent.setState.bind(parent);
        this.parent = parent;
        this.carrinho = new Carrinho(parent);
        this.carregaLocalizacaoCliente(this.setState);
    }

    get state() {
        return this.parent.state;
    }
    get props() {
        return this.parent.props;
    }

    get localizacaoCliente() {
        return this.parent.state.localizacaoCliente;
    }

    get localizacaoLoja() {
        return this.parent.state.localizacaoLoja;
    }
/*
    carregaProduto(id) {
        fetch('http://localhost:3001/produto2/' + id)
            .then(T => T.json())
            .then(p => {
                this.setState({ produtoCarregado: p })
            });
    }

    likeProduto(id) {
        let conta = 0;
        fetch(`http://localhost:3001/like/${conta}/${id}`, { method: 'POST' })
            .then(T => T.json())
            .then(p => {
                this.setState({ produtoCarregado: p })
            });
    }
*/
    carregaLocalizacaoCliente(setState) {

        let localizacaoLoja = this.parent.state.localizacaoLoja;

        navigator.geolocation.getCurrentPosition(function (position) {
            const freteMinimo = 20;
            const custoPorKm = 2.5;
            let distancia = (Math.abs(position.coords.latitude - localizacaoLoja.lat) + Math.abs(position.coords.longitude - localizacaoLoja.long)) * 111.3194444444444;
//            console.log(distancia);
            let frete = Math.max(distancia * custoPorKm, freteMinimo);

            setState({
                localizacaoCliente: { lat: position.coords.latitude, long: position.coords.longitude },
                frete
            });
        });
    }
/*
    carregaCategorias() {

        fetch(`http://localhost:3001/calculaCategoria`)
            .then(T => T.json())
            .then(p => {
                this.setState({ categorias: p })
            });
    }

    reiniciaListaDeProdutos(path = this.props.location.pathname, quantidade = 12) {
        this.setState({ listaProdutos: [] });
        this.carregarMaisProdutos(path, quantidade, 0);
    }

    async carregarMaisProdutos(path, quantidade = 12, aPartirDe = this.state.listaProdutos.length) {

        if (path[path.length - 1] !== "/")
            path += "/";

        let seletor = this.state.seletorListaDeProdutos;
        let query = "?minPrice=" + seletor.faixaPreco.min + "&maxPrice=" + seletor.faixaPreco.max;

        let url = "http://localhost:3001" + path + aPartirDe + "/" + (aPartirDe + quantidade) + query;
        await fetch(url)
            .then(x => x.json())
            .then(data => {
                let oldProdutos = this.state.listaProdutos;
                this.setState({ listaProdutos: oldProdutos.concat(data) });
            })
    }
*/
    updateFaixaPreco(e) {
        let obj = this.state.seletorListaDeProdutos;
        return {
            min: (e) => {
                obj.faixaPreco.min = filtraFloat(e.target.value);
                this.setState({ seletorListaDeProdutos: obj });
            },
            max: (e) => {
                obj.faixaPreco.max = filtraFloat(e.target.value);
                this.setState({ seletorListaDeProdutos: obj });
            }
        }
    }

}

function filtraFloat(valor) {
    let val = parseFloat(valor);
    return val == 0 || isNaN(val) ? "" : val;
}