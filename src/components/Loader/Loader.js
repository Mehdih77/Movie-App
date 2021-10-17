import spinner from "../../img/spinner.svg";

export default function Loader() {
  return (
    <div
      style={{
        margin:"0 50px",
        width: "20px",
        height: "20px",
      }}>
      <img src={spinner} alt='spinner' />
    </div>
  );
}
