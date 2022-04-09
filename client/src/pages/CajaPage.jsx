
import Caja from '../components/Caja';
import Contador from "../components/Contador"
import React, { Component } from 'react';

// arrayOfpics[
//   "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
//   "https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png"
// ]

class CajaPage extends Component {
    
pollitoImg = () => {

}

    state = {
        tacosOrdenados:16,
    azadaCount: 8,
    polloCount: 2,
    caja1: 0,
    cajaPollo: 0,
    cajaNum1: 1,
     };

   handleIncrementPollo = () => {
    
    if(this.state.polloCount > 0 && this.state.caja1 < 6 && this.state.tacosOrdenados > 0){
        this.setState({ cajaPollo: this.state.cajaPollo + 1 });
      this.setState({ tacosOrdenados: this.state.tacosOrdenados - 1 });
      this.setState({ polloCount: this.state.polloCount - 1 });
      this.setState({ cajaNum1: this.state.caja1 + 1 });
     
    
    } else {
      
        alert("caja llena o no mas tacos de pollo en esta orden")
    
    }
  
  };

    render() {
             return (
      <>
          
      <Contador tacosOrdenados = {this.state.tacosOrdenados}      polloCount = {this.state.polloCount}      />

                <Caja 
                cajaNum1 = {this.state.cajaNum1}
                handleIncrementPollo = {this.handleIncrementPollo}
                cajaPollo= {this.state.cajaPollo} />


                
<Caja caja1 = {this.state.caja1}
                handleIncrementPollo = {this.handleIncrementPollo}
                cajaPollo= {this.state.cajaPollo} />
            
            
            <Caja caja1 = {this.state.caja1}
                handleIncrementPollo = {this.handleIncrementPollo}
                cajaPollo= {this.state.cajaPollo} />
          
      
      </>
                       
        )}}


export default CajaPage;