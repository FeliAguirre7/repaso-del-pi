import CardsContainer from "../../components/CardsContainer/CardsContainer";
import CompDeDiego from "../../components/CompDeDiego/CompDeDiego";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const [datos, estableceDatos] = useState("todavia no recibi nada");

  const hijoAPadre = (datoshijo) => {
    estableceDatos(datoshijo);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <h1>Esta es la vista del home</h1>
      {/* <CardsContainer /> */}
      <CompDeDiego hijoAPadre={hijoAPadre}></CompDeDiego>
      <div>esta es la información: {datos}</div>
    </>
  );
};

export default Home;
