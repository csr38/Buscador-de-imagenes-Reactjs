import React from 'react'
import {ImagesItem} from './ImagesItem'
import useFetchImages from '../hooks/useFetchImages';

export const Gallery = ({search}) => {
    const {results:images, loading} = useFetchImages( search );

 
   
    return(
        <>
            <h3>{ search}</h3>
            {loading && <p>Loading</p>}

            <div className="grid-gallery">
                {
                    images.map( img => (
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