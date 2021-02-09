import React, {useState} from "react";

import Nav from './Nav'
import BuscadorImagenes from './BuscadorImagenes'
import Gallery from './Gallery'
const Contenido = () => {
    const [busqueda, setBusqueda] = useState([]);

    return (
        <>
            <Nav />
            <BuscadorImagenes setBusqueda={ setBusqueda }/>
            <div className="gallery">
                {
                    
                    busqueda.map( search => (

                        <Gallery 
                            key={search}
                            search={ search }

                        />
                    ))
                }
            </div>
            
         
        </>
    )
}

export default Contenido
