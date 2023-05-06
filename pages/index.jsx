import Title from '../src/components/title/title'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

export default function HomePage() {

  const handleLabelClick = () => {
    console.log('HANDLE LABEL CLICK')
  }

  return (
    <>
      <Title onClick={handleLabelClick}>Formulário de Login</Title>
      <label onClick={handleLabelClick}>Voltar a pagina...</label>
      <form>
        <Input type="email" placeholder="Digite o seu email" />
        <Input type="password" placeholder="Digite a sua senha"/>
        <Button onClick={handleLabelClick}>Botão</Button>

      </form>
    
      <label>Label Teste</label>
      <button>Button</button>
    </>
  )
}