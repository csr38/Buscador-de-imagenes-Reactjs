import React from 'react'

export const ImagesItem = ({id, description, alt_description, url}) => {
    

    
    return (
        <>
            <div className="cuadro-fotos">
                <img src={url} alt={ alt_description }/>
            </div>
        </>

        
    )
}

export default ImagesItem
