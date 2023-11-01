import { Home, Landing, Detail, Form } from "./views";
import NavBar from "./components/NavBar/NavBar";

import { Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route path="/home" render={() => <Home />} />
      <Route path="/detail" render={() => <Detail />} />
      <Route path="/create" render={() => <Form />} />
      <Route exact path="/" render={() => <Landing />} />
    </div>
  );
}

export default App;
