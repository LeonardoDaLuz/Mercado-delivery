import { useEffect, useRef } from "react";

export const LogRender = (propsAll, component = 'Component') => {

  console.log('<%c' + component + '%c> update with changes:', "color: lime", "color: none");
  Object.keys(propsAll).forEach(key=> {
    LogRender2(propsAll[key], key);
  }) 

  useEffect(() => {
    console.log("\n");
  })

}

const LogRender2 = (props, propsName) => {

  
  const prev = useRef(props);
  useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
      if (prev.current[k] !== v) {
        ps[k] = [prev.current[k], v];
      }
      return ps;
    }, {});
    if (Object.keys(changedProps).length > 0) {
      console.log('%c' + propsName + '%c: ', "color: orange", "color: none", changedProps);
    } else {

    }
    prev.current = props;
  });
}