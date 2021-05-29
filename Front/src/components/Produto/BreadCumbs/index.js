export function BreadCumbs(props) {

    var breadLis = props.produto.categorias.map(function (cat, index) { return (<li key={index}>{cat}</li>); });

    return (
        <nav className='bread mx-2 mt-4' aria-label="breadcrumb">
            <ol>
                <li>Home</li>
                {breadLis}
            </ol>
        </nav>
    )
}
