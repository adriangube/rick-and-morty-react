import React from 'react';
import "./styles/App.css";
import {AppHeader} from "./components/AppHeader";
import {AppRouter} from "./router";

function App() {
  return (
    <div className="App">
        <AppHeader/>
      <div className="App__content">
        <AppRouter/>
      </div>
    </div>
  );
}

export default App;
