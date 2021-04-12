import Carrinho from './Carrinho';



export default class Loja {
    constructor(parent) {
        parent.state = {
            ...parent.state,
            localizacaoLoja: { lat: -25.5187973, long: -48.5325122 },
            localizacaoCliente: { lat: 0, long: 0 },
            frete: 0,
            produtoCarregado: {
                _id: -1,
                titulo: '',
                categorias: [],
                descricao: '',
            }
        }

        this.setState = parent.setState.bind(parent);
        this.parent = parent;
        this.carrinho = new Carrinho(parent);
        this.carregaLocalizacaoCliente(this.setState);
    }

    get state() {
        return this.parent.state;
    }

    get localizacaoCliente() {
        return this.parent.state.localizacaoCliente;
    }

    get localizacaoLoja() {
        return this.parent.state.localizacaoLoja;
    }

    carregaProduto(id) {

        fetch('http://localhost:3001/produto2/' + id)
            .then(T => T.json())
            .then(p => {
                this.setState({ produtoCarregado: p })
            });
    }

    likeProduto(id) {
        let conta = 0;
        fetch(`http://localhost:3001/like/${conta}/${id}`, { method: 'POST'})
            .then(T => T.json())
            .then(p => {
                this.setState({ produtoCarregado: p })
            });
    }

    carregaLocalizacaoCliente(setState) {

        let localizacaoLoja = this.parent.state.localizacaoLoja;

        navigator.geolocation.getCurrentPosition(function (position) {
            const freteMinimo = 20;
            const custoPorKm = 2.5;
            let distancia = (Math.abs(position.coords.latitude - localizacaoLoja.lat) + Math.abs(position.coords.longitude - localizacaoLoja.long)) * 111.3194444444444;
            console.log(distancia);
            let frete = Math.max(distancia * custoPorKm, freteMinimo);

            setState({
                localizacaoCliente: { lat: position.coords.latitude, long: position.coords.longitude },
                frete
            });
        });
    }
}