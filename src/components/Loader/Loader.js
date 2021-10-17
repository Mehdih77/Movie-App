import spinner from "../../img/spinner.svg";

export default function Loader() {
  return (
    <div>
      <img className='img-fluid' src={spinner} alt='spinner' />
    </div>
  );
}
