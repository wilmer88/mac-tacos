import { Link } from "react-router-dom";
import React, {useState, useEffect } from "react";
import API from "../utils/API";
import NombreSelect from "./NombreSelect";
function Meat() {
  // const [orden, setOrden] = useState({
  //   nombreDeOrden: "",
  //   azada: 0,
  //   pollo: 0,
  //   barbacoa: 0,
  //   pastor: 0,
  //   chorizo: 0,
  // })
  // const [formObj, setFormObj] = useState({
  //   nombreDeOrden: "",
  //   azada: 0,
  //   pollo: 0,
  //   barbacoa: 0,
  //   pastor: 0,
  //   chorizo: 0,
  // })



  // function handleChangeI(e) {
  //  const {name, value} = e.target;
  //   // setOrden({...orden, [name]: value})
  //   setFormObj({...formObj, [name]: value})
  // };

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   API.saveOrden(
  //    { 
  //      nombreDeOrden: formObj.nombreDeOrden,
  //     azada: formObj.azada,
  //     pollo: formObj.pollo,
  //     barbacoa: formObj.barbacoa,
  //     pastor: formObj.pastor,
  //     chorizo: formObj.chorizo,
  //   }

  //   ).then((response)  => {
  //     console.log(response.data)
  //     // setOrden({
  //     //   nombreDeOrden: "",
  //     //   azada: 0,
  //     //   pollo: 0,
  //     //   barbacoa: 0,
  //     //   pastor: 0,
  //     //   chorizo: 0,
  //     // })
  //     setFormObj({
  //       nombreDeOrden: "",
  //       azada: 0,
  //       pollo: 0,
  //       barbacoa: 0,
  //       pastor: 0,
  //       chorizo: 0,
  //     })
  
  //       })
  //       .catch((err) =>{ 
  //         console.log(err)
  //       });
 
    //debugger
    // window.location.href="http://localhost:3000/ClientLine" ;
  //};
  
    return (
      <>
        <footer className="footer">
        
            
                      <div className="card">
                     <div className="card-content">
                      <div className="container">
                    <div className="box is-shadowless is-align-self-center">
                      <br></br>

                      <div className="field is-horizontal">
                        <div className="m-5 mr-8 media-content">
                     <NombreSelect/>
                          
                        </div>
                        <hr></hr>
                        
                        </div>

                      </div>
                    </div>
                  </div>
                 </div>
                 <footer className="card-footer">
                  <div className="card-footer-item">
                    <input
                      aria-label="order submit button"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                  <div className="card-footer-item">
                    <span>
                      Share on{" "}
                      <Link to="https://twitter.com/codinghorror/status/506010907021828096">
                        Facebook
                      </Link>
                    </span>
                  </div>
                  </footer>
                 
          
          
                   <div className="content has-text-centered">
                
                    <strong>Tacos Don Santos</strong> 
               <Link to="https://jgthms.com">Santos Alonzo</Link>. The source code is
               owned and developed by
               <Link to="http://opensource.org/licenses/mit-license.php">
              Wilmer Rivera
              </Link>
                The website content is exclusively made for
                <Link to="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              Tacos Don Santos
              </Link>
             
             </div>
             
        </footer>
      </>
    );
  
}
export default Meat;
