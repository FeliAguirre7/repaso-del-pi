import { useState } from "react";

const CompDeDiego = ({ hijoAPadre }) => {
  const [estadoDiego, setEstadoDiego] = useState("estado vacio pero no vacio");

  const changeHandler = (event) => {
    setEstadoDiego(event.target.value);
  };

  return (
    <>
      <div>información de diego: {estadoDiego}</div>

      <input value={estadoDiego} onChange={changeHandler}></input>
      <button onClick={() => hijoAPadre(estadoDiego)}>Clic Hijo</button>
    </>
  );
};

export default CompDeDiego;
