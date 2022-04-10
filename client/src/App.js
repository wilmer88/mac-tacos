import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import UserContext from "./userContext";
// import React, {useState} from "react";
import OrdenLevel from './components/OrdenLevel';
// import SignIn from "./pages/SignIn";
// import CajaPage from "./pages/CajaPage";
//import Contador from "./components/Contador";
import OrdenPage  from "./pages/OrdenPage";
// import ClientLine from "./pages/ClientLine";
// import Editar from "./pages/Editar";
// import { Component } from "react";


function App () {
  // const [token, setToken] = useState("");
  // const [userName, setUserName] = useState("")
  return(
    <>
    {/* <UserContext.Provider value={{token, userName, setToken, setUserName}}> */}
    <Router>
        <OrdenLevel />
    <Routes>
    {/* <Route exact path="/signIn" element={<SignIn/>}></Route> */}
      {/* <Route exact path="/cajaPage" element={<CajaPage/>}></Route> */}
      <Route exact path="/" element={<OrdenPage/>}></Route>
      {/* <Route exact path="/ClientLine" element={<ClientLine/>}></Route> */}
      {/* <Route exact path="/orden/:ordenId" element={<Editar/>}></Route> */}
    </Routes>  
     </Router>

    {/* </UserContext.Provider> */}
    
      </>

  
)
}

export default  App;
