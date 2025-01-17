import spinner from '../../assets/spinnerAnimation.gif';

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        className="mx-auto text-center"
        src={spinner}
        alt="loading icon"
      />
    </div>
  );
}

export default Spinner;
