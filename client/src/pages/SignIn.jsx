// import { Form, Button, Container, Notification} from 'react-bulma-components';
// import UserContext from '../userContext';
// import React, {useContext, useState} from 'react';
// import UserContext from '../userContext';

function SignIn() {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const user = useContext(UserContext);

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   const data = { token: 'ergerter',
  // userName: "chango"}

  // user.setUserName(data.userName);
  // user.setToken(data.token);
  // window.location.href="http://localhost:3000/" 
  // }

  return (<>


<div>


<div className='columns is-mobile'>
<div className="column is-two-fifth"></div>

<div className= "column is-three-quarters-mobile" >
  
<div className="field is-grouped">
  <p className="control is-expanded">
    <input className="input" type="text" placeholder="Find a repository"/>
    
  </p>

  <p class="control">
    <link class="button is-info">
      Search
    </link>
  </p>
</div>

{/* <Container >
<form onSubmit={handleSubmit}>
<Form.Field>
<Form.Label>Name</Form.Label>
<Form.Control>
  <Form.Input type="username" id="example-email" value={userName}  onChange={(e) => {
    setUserName(e.target.value)
  }}  placeholder="Username" name="name"  />
 
</Form.Control>
</Form.Field>
<Form.Field>
<Form.Label>Password</Form.Label>
<Form.Control>
  <Form.Input placeholder="Password" name="password" type="password" value={password} onChange={(e) => {
    setPassword(e.target.value)
  }}  />

</Form.Control>
</Form.Field>
<Button.Group>
<Button  type="submit" value="Submit" className='control' fullwidth rounded color="dark" >Login</Button>
</Button.Group>
</form>


  <Notification color="primary">
    This container will strech depending of the breakpoint you choose
  </Notification>
</Container> */}

</div>

<div className="column is-two-fifth"></div>
</div>
</div>

  </>)
  

}

export default SignIn;
