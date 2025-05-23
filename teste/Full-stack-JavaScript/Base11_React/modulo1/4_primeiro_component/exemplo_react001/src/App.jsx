import './App.css'
import LorenIpsun from './components/LorenIpsun'
import Button from './components/Button'
import InputText from './components/InputText'
import InputPassword from './components/InputPassword'
InputPassword

function HelloWorld(){
  return <h1>Hello World</h1>
} // Nosso primeiro component de Função

function App() {

  return (
    <>
      <HelloWorld /> {/* Usamos nosso componente como uma Tag HTML */}
      <LorenIpsun />
      <InputText />
      <InputPassword />
      <Button />

      <HelloWorld /> {/* Podemos reultilizar quantas vezes forem necessárias */}
      <LorenIpsun />
      <InputText />
      <InputPassword />
      <Button />
      
      <HelloWorld />
      <LorenIpsun />
      <InputText />
      <InputPassword />
      <Button />

      {/* Exemplo de reutilização dos componentes do React */}
    </>
  )
}

export default App
