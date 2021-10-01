import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();

  
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
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
      )}
    </div>
  );
}

export default App;
