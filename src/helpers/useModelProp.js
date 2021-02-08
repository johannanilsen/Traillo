import React from "react";
export function useModelProp(model, prop) {
  //ordinary func, not component!

  const [propValue, setPropValue] = React.useState(model[prop]);

  React.useEffect(
    function () {
      const obs = () => setPropValue(model[prop]);
      model.addObserver(obs);
      return () => model.removeObserver(obs);
    },
    [model, prop]
  );

  return propValue;
}
