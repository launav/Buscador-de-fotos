//encargada de capturar la categoria y distribuirla

import { useState} from 'react'
import { FormAddCategory } from './FormAddCategory'
import { GridCategory } from './GridCategory'



export const Galeria = () => {

    const [categories, setCategories] = useState([])
    

    //evento que va disparar nuestro boton
    const onNewCategory = (newCategory) => {
        const encontrada = categories.find(item => item.toLowerCase() === newCategory.toLowerCase())
        if (encontrada) return
        // console.log(newCategory)
        //categorias tiene qe ser un array, ya que lo vamos a recorrer, por defecto lo hemos iniciado como una array vacio
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>Buscador de fotos</h1>

            {/* FORMULARIO */}

            <FormAddCategory onNewCategory={onNewCategory} />

            {/* GRID DE CADA CATEGORÍA */}
           
            {
                    categories.map(category => (
                        <GridCategory  key={category} category={category}/>
                    ))
                }
        
            {/* GIRD-ITEMS */}
        </>
    )
}

export default Galeria
