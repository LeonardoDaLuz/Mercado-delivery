import { useEffect, useRef } from "react";

export const useLogChangedPropsWhenUpdate = (props, component = 'Component') => {

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