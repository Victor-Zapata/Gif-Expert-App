import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {
    //primero cree mis categorias así, pero no las puedo actualizar
    //ya que es una constante y no muta. Preciso hacerlo con useState
  
    //const categories = ['One Punch','Samurai X','Dragon Ball'];

    const [categories, setCategories] = useState(['Simpsons']);

    //luego creo una función para agregar categorias y lo hago de 2 maneras

    // const handleAdd = () => {
    //     //setcategories([...categories, 'ViejaXHunter']) 'esta es una forma posible'
    //     setcategories(categories => [...categories, 'ViejaXHunter']) //esta es otra forma
    // }    

    return ( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            

            <ol>
                {               
                 categories.map( category => 
                    <GifGrid 
                    category={category}
                    key={category}
                    />
                )                 
                }
            </ol>
            
        </>
     );
}
 
export default GifExpertApp;