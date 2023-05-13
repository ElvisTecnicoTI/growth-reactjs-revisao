import { useState } from 'react'

import Title from '../src/components/title/title'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

export default function HomePage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLabelClick = () => {
    console.log('HANDLE LABEL CLICK')
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log('HANDLE SUBMIT FORM')
    console.log({ email, password })
  }
  
  const handleChangeInput = (event, onChange) => {
    onChange(event.target.value)
  }

  return (
    <>
      <Title onClick={handleLabelClick}>Formulário de Login</Title>
      <label onClick={handleLabelClick}>Voltar a pagina...</label>
      <form onSubmit={handleSubmitForm}>
        <Input 
          type="text" 
          placeholder="Digite o seu email" 
          onChange={(e) => handleChangeInput(e, setEmail)} 
        />
        <p>O email digitado foi: {email}</p>
        <Input 
          type="password" 
          placeholder="Digite a sua senha" 
          onChange={(e) => handleChangeInput(e, setPassword)}
        />
        <Button type="submit">Botão form</Button>

      </form>

      <Button onClick={handleLabelClick}>Botão fora do form</Button>
    
      <label>Label Teste</label>
      <button>Button</button>
    </>
  )
}