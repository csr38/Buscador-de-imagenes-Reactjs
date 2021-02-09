import React, {useEffect, useState} from 'react'
import getImage from '../api/getImage';

const useFetchImages = ( busqueda ) => {
    
    const [state, setState] = useState({
        results: [],
        loading: true,
    });
    
    useEffect(() => {
        getImage(busqueda) 
            .then(imgs => {
            setState({
                results: imgs,
                loading:false,
            });
        });
    }, [busqueda])
    

    return state;
}

export default useFetchImages
