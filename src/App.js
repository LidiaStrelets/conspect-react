// import logo from './logo.svg';
// import './App.css';
// import React from "react";
import Gallery from "./components/PaintingsGallery";
import paintingsData from "./paintings.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My app</h1>

        <Gallery paintings={paintingsData} />
      </header>
    </div>
  );
}

export default App;
