import Title from '../src/components/title/title'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

export default function HomePage() {

  const handleLabelClick = () => {
    console.log('HANDLE LABEL CLICK')
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log('HANDLE SUBMIT FORM')
  }

  let email = ''
  const handleChangeInput = (event) => {
    email = event.target.value
  }


  return (
    <>
      <Title onClick={handleLabelClick}>Formulário de Login</Title>
      <label onClick={handleLabelClick}>Voltar a pagina...</label>
      <form onSubmit={handleSubmitForm}>
        <Input type="text" placeholder="Digite o seu email" onChange={handleChangeInput} />
        <p>O email digitado foi: {email}</p>
        <Input type="password" placeholder="Digite a sua senha" onChange={handleChangeInput}/>
        <Button type="submit">Botão form</Button>

      </form>

      <Button onClick={handleLabelClick}>Botão fora do form</Button>
    
      <label>Label Teste</label>
      <button>Button</button>
    </>
  )
}