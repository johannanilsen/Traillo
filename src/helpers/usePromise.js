import React from "react";

export function usePromise(promise) {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(
    function () {
      setData(null);
      setError(null);
      if (promise) {
        promise.then((result) => setData(result)).catch((err) => setError(err));
      }
    },
    [promise]
  );
  return [data, error];
}
