import spinner from "../../img/spinner.svg";

export default function LazyLoader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "520px",
      }}>
      <img src={spinner} alt="spinner" />
    </div>
  );
}
