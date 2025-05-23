function PlanetContent(props){
    return (
        <>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <img src={props.img_url} alt="Imagem_Planeta" />
        </>
    )
}

export default PlanetContent