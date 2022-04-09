import { Link } from "react-router-dom";
import React, {useState } from "react";
import API from "../utils/API"
// import axios from "axios";
const numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,]

function Meat() {
  // const [orden, setOrden] = useState({
  //   nombreDeOrden: "",
  //   azada: 0,
  //   pollo: 0,
  //   barbacoa: 0,
  //   pastor: 0,
  //   chorizo: 0,
  // })
  const [formObj, setFormObj] = useState({
    nombreDeOrden: "",
    azada: 0,
    pollo: 0,
    barbacoa: 0,
    pastor: 0,
    chorizo: 0,
  })



  function handleChangeI(e) {
   const {name, value} = e.target;
    // setOrden({...orden, [name]: value})
    setFormObj({...formObj, [name]: value})
  };

  function handleSubmit(e) {
    e.preventDefault();
    API.saveOrden(
     { 
       nombreDeOrden: formObj.nombreDeOrden,
      azada: formObj.azada,
      pollo: formObj.pollo,
      barbacoa: formObj.barbacoa,
      pastor: formObj.pastor,
      chorizo: formObj.chorizo,
    }

    ).then((response)  => {
      console.log(response.data)
      // setOrden({
      //   nombreDeOrden: "",
      //   azada: 0,
      //   pollo: 0,
      //   barbacoa: 0,
      //   pastor: 0,
      //   chorizo: 0,
      // })
      setFormObj({
        nombreDeOrden: "",
        azada: 0,
        pollo: 0,
        barbacoa: 0,
        pastor: 0,
        chorizo: 0,
      })
  
        })
        .catch((err) =>{ 
          console.log(err)
        });
 
    //debugger
    // window.location.href="http://localhost:3000/ClientLine" ;
  };
  
    return (
      <>
        <footer className="footer">
          <div className="content has-text-centered">
            <form onSubmit={handleSubmit}>
              <div className="card">
                <div className="card-content">
                  <div className="container">
                    <div className="box is-shadowless is-align-self-center">
                      <br></br>

                      <div className="field is-horizontal">
                        <div className="m-5 mr-8 media-content">
                          <label className="label">
                            Nombre Para La Orden
                            <div className="is-mobile">
                              <input
                           
                                onChange={handleChangeI}
                                aria-label="iput for order name"
                                className="input is-normal is-rounded"
                                type="nombre"
                                id="orden-name"
                                name="nombreDeOrden"
                                placeholder="Gonzalo"
                                // value={orden.nombreDeOrden}
                              />
                            </div>
                          </label>
                          <hr></hr>
                        </div>

                        <label className="mr-2 label ">
                         Azada
                        </label>
                        <div className="mr-6  select is-small">
                          <select
                          
                            name="azada"
                            // value={orden.azada}
                            onChange={handleChangeI}
                          >
                            {numeros.map((nume) => (
                              <option key={nume.toString()} value={nume}>
                                {nume}
                              </option>
                            ))}
                          </select>
                        </div>

                        <label className="label">Pollo</label>
                        <div className="mr-6 select is-small">
                          <select
                            
                            name="pollo"
                            // value={orden.pollo}
                            onChange={handleChangeI}
                          >
                            {numeros.map((nume) => (
                              <option key={nume.toString()} value={nume}>
                                {nume}
                              </option>
                            ))}
                          </select>
                        </div>

                        <label className="label is-normal">Barbacoa</label>
                        <div className="mr-6 select is-small">
                          <select    
                          name="barbacoa"
                            // value={orden.barbacoa}
                            onChange={handleChangeI}
                            >
                            {numeros.map((nume) => (
                              <option key={nume.toString()} value={nume}>
                                {nume}
                              </option>
                            ))}
                          </select>
                        </div>

                        <label className="label is-normal">Pastor</label>
                        <div className="mr-6 select is-small">
                          <select  
                          name="pastor"
                            // value={orden.pastor}
                            onChange={handleChangeI}
                            >
                            {numeros.map((nume) => (
                              <option key={nume.toString()} value={nume}>
                                {nume}
                              </option>
                            ))}
                          </select>
                        </div>

                        <label className="label is-normal">Chorizo</label>
                        <div className="mr-6 select is-small">
                          <select
                           name="chorizo"
                          //  value={orden.chorizo}
                           onChange={handleChangeI}
                          >
                            {numeros.map((nume) => (
                              <option key={nume.toString()} value={nume}>
                                {nume}
                              </option>
                            ))}
                          </select>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <input
                      aria-label="order submit button"
                      type="submit"
                      value="Submit"
                    />
                  </p>
                  <p className="card-footer-item">
                    <span>
                      Share on{" "}
                      <Link to="https://twitter.com/codinghorror/status/506010907021828096">
                        Facebook
                      </Link>
                    </span>
                  </p>
                </footer>
              </div>
            </form>
          </div>
          <p className="content has-text-centered">
            <strong>Tacos Don Santos</strong> by{" "}
            <a href="https://jgthms.com">Santos Alonzo</a>. The source code is
            owned and developed by
            <a href="http://opensource.org/licenses/mit-license.php">
              Wilmer Rivera
            </a>
            . The website content is exclusively made for{" "}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              Tacos Don Santos
            </a>
            .
          </p>
        </footer>
      </>
    );
  
}
export default Meat;
