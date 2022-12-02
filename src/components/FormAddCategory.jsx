import React from 'react'
import { useState } from 'react'

export const FormAddCategory = ({onNewCategory}) => {

    const [valorInput, setValorInput] = useState('')
    

    const handleChange = ({ target }) => {
        // console.log(ev.target.value)
        setValorInput(target.value)
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        if (valorInput.trim().length <= 0) return
        onNewCategory(valorInput.trim())
        setValorInput('')
        // console.log(category)

    }

    return (

        <form className='row my-3' onSubmit={handleSubmit}>
            <div className="col-md-10">
                <input type="text"
                    name="buscar"
                    id="buscar"
                    placeholder="Buscar"
                    className="form-control mb-2"
                    value={valorInput}
                    onChange={handleChange} />
            </div>
            <div className="col-md-2">
                <button
                    className="form-control btn btn-dark"
                    type="submit">
                    Buscar
                </button>
            </div>
        </form>

    )
}
