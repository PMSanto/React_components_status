import React from "react";
import { sculptureList } from "./data/data.js";
import GalleryApp from "./components/GalleryApp.jsx";

const App = () => {
  return (
    <main>
      <h1>Galeria de arte</h1>
      <section>
        <GalleryApp esculturas={sculptureList} />
      </section>
    </main>
  );
};

export default App;
