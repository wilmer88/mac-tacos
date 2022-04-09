import { Link } from "react-router-dom";
const estilo = {
 nombre: {
   background: "#e8eaf6",


 },

 cambio: {
   borderRadius: "50%"
 },
 altura: {

 }
}

const OrdenLevel = () => {
 
    return (
<>

<div className="columns is-mobile is-12">
  <div className="column is-12">  
  
  <nav className="level">
<p className="level-item has-text-centered" style={estilo.nombre}>
  <Link to="/signIn"> Registrarse</Link>
 </p>
        <p className="level-item has-text-centered" style={estilo.altura}>
        Inicio
        <Link to="/"><img id="santos" src="https://www.placecage.com/g/200/300"  alt="" style={{ height: "60px" } }/> </Link> 
        
        </p>
 
        <p className="level-item has-text-centered" style={estilo.nombre}>
        <Link to="/ClientLine"> Lista de espera</Link>
        </p>
      </nav>
      </div>
</div>

</>
     
    );
  
}

export default OrdenLevel;

