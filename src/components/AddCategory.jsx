import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    //armo una función manejadora del input para luego llamarla
    //en el onChange del input
    //le paso como argumento un e(evento) y con su target.value
    //pasado como argumento de setinputValue me aseguro que siempre
    //se actualice
   
    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    //ahora creo una función manejadora que dispare una acción con lo que 
    //el usuario escribe en el input

    const handleSubmit = (e) => {
        e.preventDefault(); //aquí prevengo el refresh de la página
        
        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue, ...categories ]) //debo traerme al arreglo de categories, hacer una copia y agregarle el input
            setInputValue('');
        }
        
    }

    return ( 
        <form onSubmit={handleSubmit} >
            
            <input
                type='text'
                value={inputValue}
                onChange={ handleInputValue }
            />
        </form>
     );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;