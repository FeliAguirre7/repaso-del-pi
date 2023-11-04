import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <h1>Esta es la vista del landing</h1>

      <Link to="/home">
        <button>Start</button>
      </Link>
    </>
  );
};

export default Landing;
