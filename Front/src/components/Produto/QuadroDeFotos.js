import configs from '@configs';

export function QuadroDeFotos(props) {
    return (
        <div className='quadro-de-foto mx-2'>
            <img src={configs.imgsPath + props.produto.img} />
        </div>
    )
}