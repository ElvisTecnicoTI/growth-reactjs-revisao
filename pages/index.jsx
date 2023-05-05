import Title from '../src/components/title/title'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

export default function HomePage() {
  return (
    <>
      <Title>Formulário de Login</Title>
      <label>Voltar a pagina...</label>
      <form>
        <Input type="email" placeholder="Digite o seu email" />
        <Input type="password" placeholder="Digite a sua senha"/>
        <Button>Botão</Button>

      </form>
    
      <label>Label Teste</label>
      <button>Button</button>
    </>
  )
}