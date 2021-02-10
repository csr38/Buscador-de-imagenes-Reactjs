import React from 'react'
import {ImagesItem} from './ImagesItem'
import useFetchImages from '../hooks/useFetchImages';

export const Gallery = ({search}) => {
    const {results:images, loading} = useFetchImages( search );

    const index = images.length;
    
    const divTres =  images.splice(index*2/3, index);

    const divDos = images.splice(index/3, (index*2/3));
    const divUno = images.splice(0,index/3);
    
   
    console.log(index)

    return(
        <>
            <h3>{ search}</h3>
            {loading && <p>Loading</p>}

            <div className="grid-gallery">
                {
                    divUno.map( img => (
                        
                        <ImagesItem 
                            key={ img.id}
                            {...img}
                        />
                    ))
                }
            </div>
            <div className="grid-gallery">
                {
                    divDos.map( img => (
                        
                        <ImagesItem 
                            key={ img.id}
                            {...img}
                        />
                    ))
                }
            </div>
            <div className="grid-gallery">
                {
                    divTres.map( img => (
                        
                        <ImagesItem 
                            key={ img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )

}

export default Gallery;