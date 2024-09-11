import React from 'react'
import { useState } from 'react';

const GalleryApp = (props) => {
   const[indice,setIndice]= useState(0)
    const {esculturas} = props
  return (
    <article>
        <button>Siguiente</button>
        <section>
            <h3> {esculturas[indice].name}</h3>
            <small>{esculturas[indice].artist}</small>
        </section>
        <section>
            <img src={esculturas[indice].url} alt={esculturas[indice].alt} />
        </section>
        <section><p>{esculturas[indice].description}</p></section>
    </article>
  )
}

export default GalleryApp