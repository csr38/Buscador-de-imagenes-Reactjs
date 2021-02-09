import React, { useState } from 'react'; 

const BuscadorImagenes = ( {setBusqueda} ) => {

    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length >1){
            setBusqueda([inputValue]);
            setInputValue('');
        }else{
            alert('El valor es muy corto');
        }
    }
   
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                className="search" 
                value={ inputValue }
                onChange= { handleChange }/>
        </form>
    )
}

export default BuscadorImagenes

