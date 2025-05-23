import Planet from "./components/Planets/Planet";

function App() {
  return (
    <>
      <h1>Planetas do Sistema Solar</h1>

      <Planet
        name="Terra"
        descricao="A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos,[13] incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida. O planeta formou-se há 4,56 bilhões de anos,[14][15][16][17] e a vida surgiu na sua superfície um bilhão de anos depois."
        link="https://pt.wikipedia.org/wiki/Terra"
        link_text="Mais informações"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/450px-The_Blue_Marble_%28remastered%29.jpg"
      />

      <Planet
        name="Marte"
        descricao='Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar, atrás apenas de Mercúrio. Batizado em homenagem a divindade romana da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada'
        link="https://pt.wikipedia.org/wiki/Marte"
        link_text="Mais informações"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/420px-OSIRIS_Mars_true_color.jpg"
      />

      <Planet
        name="Vénus"
        descricao="Vénus (português europeu) ou Vênus (português brasileiro) (AO 1990: Vénus ou Vênus)[1] é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite."
        link="https://pt.wikipedia.org/wiki/Vénus"
        link_text="Mais informações"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/330px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg"
      />

      <Planet
        name="Mercúrio"
        descricao="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas."
        link="https://pt.wikipedia.org/wiki/Mercúrio"
        link_text="Mais informações"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/420px-Mercury_in_color_-_Prockter07-edit1.jpg"
      />
    </>
  );
}

export default App;
