function App() {
  function message() {
    console.log("Fui clicado");
  } // Criamos uma função que será execultada quando um evento for chamado

  return (
    <>
      <button onClick={message}>Boão</button>
      {/* Dessa forma criamos um chamamento de evento no React */}
    </>
  );
}

export default App;
