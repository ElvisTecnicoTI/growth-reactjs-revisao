import Title from '../src/components/title/title'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

export default function HomePage() {

    const handleSubmitForm = (event) => {
        event.preventDefault()
        console.log("Handle Submit Form")
    }
    
    let email = ''
    const handleChangeInput = (event) => {
        email = event.target.value
    }

    return(
        <>
         <Title>LOGIN</Title>
         <label>Voltar a página...</label>
         <form onSubmit={handleSubmitForm}>
            <Input type="email" placeholder="Digite seu e-mail" onChange={handleChangeInput} />
            <p>O e-mail digita foi: {email}</p>
            <Input type="password" placeholder="Digite a sua senha" onChange={handleChangeInput} />
            <Button type="submit">Login</Button>
         </form>
         <label>LABEL TESTE</label>
         <button>Button</button>
        </>
    )
}