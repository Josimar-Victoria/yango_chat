import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route path="/rooms/:roomId">
            <Chat />
          </Route>
          <Route exact path="/">
            <Chat />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
