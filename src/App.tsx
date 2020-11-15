import React from 'react';
import "./styles/App.css";
import {AppRouter} from "./router";

function App() {
  return (
    <div className="App">
      <div className="App__content">
        <AppRouter/>
      </div>
    </div>
  );
}

export default App;
