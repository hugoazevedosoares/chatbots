import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatBot from "./pages/ChatBot";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppContainer } from "./styles";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter basename="chatbots">
        <AppContainer>
          <Route exact path="/" component={Home} />
          <Route path="/:shortName" component={ChatBot} />
        </AppContainer>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
