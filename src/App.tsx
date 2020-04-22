import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import ChatBot from "./pages/ChatBot";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
