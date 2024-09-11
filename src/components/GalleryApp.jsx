import React from "react";
import { useState } from "react";

const GalleryApp = (props) => {
  const [indice, setIndice] = useState(0);
  const { esculturas } = props;

  const [show, setShow] = useState(false);

  const handleNext = () => {
    if (indice < esculturas.length - 1) setIndice(indice + 1);
  };
  const handlePrev = () => {
    if (indice > 0) {
      setIndice(indice + 1);
    }
  };
  return (
    <article>
      <button onClick={handlePrev}>Anterior</button>
      <button onClick={handleNext}>Siguiente</button>
      <section>
        <h3> {esculturas[indice].name}</h3>
        <small>{esculturas[indice].artist}</small>
      </section>
      <section>
        <img src={esculturas[indice].url} alt={esculturas[indice].alt} />
      </section>
      <section>
        <button onClick={()=> setShow(!show)}>Descripcion</button>
        {show && <p>{esculturas[indice].description}</p>}
      </section>
    </article>
  );
};

export default GalleryApp;
