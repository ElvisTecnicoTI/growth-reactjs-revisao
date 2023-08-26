import { Component, useRef } from 'react'
import Input from '../src/components/input/input'

export default function UseRefPage() {
    const numero = useRef(10)
    const inputRef = useRef(null)
    const componentInputRef = useRef(null)

    const handleButtonFocus = () => {
        inputRef.current.focus()
    }

    return (
        <>
            <div>
                <h4>UseRef exemplo</h4>
                <p>Número: {numero.current}</p>
            </div>
            <div>
                <h4>Exemplo com referência no input do HTML:</h4>
                <input type="text" ref={inputRef}/>
                <button onClick={handleButtonFocus}>Foco no input</button>
            </div>
            <div>
                <h4>referência com o componente input</h4>
                <Input type="text" ref={componentInputRef}/>
                <button type="text" onClick={() => componentInputRef.current.focus()}>Foco no input</button>
            </div>
        </>
    )
}