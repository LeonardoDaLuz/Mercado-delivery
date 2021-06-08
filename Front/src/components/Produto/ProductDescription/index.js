import { useEffect, useRef } from "react";

export function ProductDescription(props) {
    console.log("render");
    console.log(props);
    useTraceUpdate(props);
    return (
        <div className="descricao-pg-produto">
            <div><h3 >Descrição do produto</h3></div>
            <div
                dangerouslySetInnerHTML={{
                    __html: props.produto.descricao
                }}></div>

        </div>
    )
}

function useTraceUpdate(props) {
    const prev = useRef(props);
    useEffect(() => {
      const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
        if (prev.current[k] !== v) {
          ps[k] = [prev.current[k], v];
        }
        return ps;
      }, {});
      if (Object.keys(changedProps).length > 0) {
        console.log('Changed props:', changedProps);
      }
      prev.current = props;
    });
  }