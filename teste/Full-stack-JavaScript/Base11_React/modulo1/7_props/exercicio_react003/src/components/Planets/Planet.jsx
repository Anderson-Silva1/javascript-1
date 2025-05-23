import "./style.css";

// Podemos usar as props assim
// function Planet(props) {
//   return (
//     <>
//       <h2>{props.name}</h2>
//       <p>{props.descricao}</p>
//       <img src={props.img_url} alt="Planeta" />
//     </>
//   );
// }

// Mas podemos usar a desestruturação de Objetos...
function Planet({ name, descricao, link, link_text, img_url }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{descricao}</p>
      <p>
        <a className="link" href={link} target="_blank">
          {link_text}
        </a>
      </p>
      <img className="img_gray" src={img_url} alt="Planeta" />
    </>
  );
}

export default Planet;
