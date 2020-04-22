import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ChatBot from "./pages/ChatBot";
import Home from "./pages/Home";
import { AppContainer } from "./styles";

function App() {
  return (
    <div className="app">
      <Header />
      <Router basename="/">
        <AppContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:shortName" component={ChatBot} />
            <Redirect to="/" />
          </Switch>
        </AppContainer>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
