import spinner from "../../img/spinner.svg";

export default function LazyLoader() {
  return (
    <div
      style={{
        margin:"100px auto",
        width: "30px",
        height: "30px",
      }}>
      <img src={spinner} alt='spinner' />
    </div>
  );
}
