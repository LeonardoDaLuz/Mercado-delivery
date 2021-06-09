import { useEffect, useRef } from "react";

export const LogRender = function () {

  let component = arguments[arguments.length-1];
 

  for(let i=0; i<arguments.length-1; i++) {
    LogRender2(arguments[i], component);
  }
}

export const LogRender2 = function () {

  let component = arguments[arguments.length-1];
  let props= arguments[0];
  
  const prev = useRef(props);
  useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
      if (prev.current[k] !== v) {
        ps[k] = [prev.current[k], v];
      }
      return ps;
    }, {});
    if (Object.keys(changedProps).length > 0) {
      console.log('<%c' + component + '%c> update when Changed props:', "color: lime", "color: none", changedProps);
    } else {
      console.log('<%c' + component + '%c> update without Changed props:', "color: lime", "color: none", props);
    }
    prev.current = props;
  });
}