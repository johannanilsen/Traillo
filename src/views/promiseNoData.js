import loading1 from "../images/loading1.gif";

export function promiseNoData(promise, data, error) {
  return (
    (!promise && "no data") || // case "0"
    (error && <h1>error</h1>) || // case 3
    (!data && (
      <center>
        <img
          alt="loading"
          style={{ align: "left", height: "150px", width: "150px" }}
          src={loading1}
        />
      </center>
    ))
  ); // case 1
}
