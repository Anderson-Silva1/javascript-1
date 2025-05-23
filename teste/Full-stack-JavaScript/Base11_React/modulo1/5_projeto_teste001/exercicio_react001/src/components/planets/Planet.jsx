import "./planets.css"

export function Planet(){
    return (
        <>
            <h4 className="titulo">Planeta Terra</h4>
            <p className="p_uperCase">A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos.</p>
            <img className="img_planet" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/450px-The_Blue_Marble_%28remastered%29.jpg" alt="planeta_terra" />
        </>
    )
}