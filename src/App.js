import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Landing } from "./components/Landing/Landing.jsx";
import Videogames from "./components/Videogames/Videogames.jsx";
import { CreateGame } from "./components/CreateVideoGames/CreateGame.jsx";
import GameDetails from "./components/GameDetails/GameDetails.jsx";
import { About } from "./components/About/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/videogames" component={Videogames} />
        <Route exact path="/crearjuego" component={CreateGame} />
        <Route exact path="/videogame/:idVideogame" component={GameDetails} />;
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
