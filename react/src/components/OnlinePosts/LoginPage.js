import React, {Component } from 'react';
import {Button, Form, FormGroup, ButtonGroup} from 'react-bootstrap';
import './LoginPage.css';

/*Authors: Emil Fjellström, Johan Challita*/
class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            wrongEntry: false
        };
        this.passwordRef = React.createRef();
        this.userNameRef = React.createRef();
    }

    login(){
      fetch('http://localhost:8080/demo/signin?username=' + this.userNameRef.current.value + '&password=' + this.passwordRef.current.value,{
        method: 'POST',}).then( response => response.json())
        .then(
          // handle the result
          (result) => {
            if(result.token !== undefined){
              this.props.setToken(result.token, this.userNameRef.current.value);
            } else this.setState({wrongEntry: true});
          },

          // Handle error
          (error) => {
              this.setState({
                  error
              })
          },
      );
    }



      render(){
        /*Error checker */
        const {error} = this.state;
        if(error){
            return <div>Error in loading </div>
        }else{
          return(
          <div class = "container-fluid p-0">
            <div class = "flex-grid-loginPage">
              <div class = "col-flex-loginPage" align = "start">
                  <div className = "container-loginPage">
                    <Form className = "login-form">
                      <h1 className = "loginHeader">RAMP I</h1>
                      <h1><span className = "loginText"> Logga in </span> </h1>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Användarnamn</Form.Label>
                        <Form.Control type="text" placeholder="Användarnamn" ref={this.userNameRef}/>
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword" >
                        <Form.Label>Lösenord</Form.Label>
                        <Form.Control type="password" placeholder="Lösenord" ref={this.passwordRef}/>
                        {this.state.wrongEntry?
                          <Form.Text className="redText">
                            Användarnamn eller lösenord felaktigt.
                          </Form.Text>
                        :null}
                      </Form.Group>
                      <ButtonGroup className="login-button-grp-single">
                        <Button variant="choiceButton" className = "mobileButton" onClick = {() => this.login()}>
                          <a className="loginButtonText">{"Logga in"}</a>
                        </Button>
                      </ButtonGroup>
                    </Form>
                </div>
              </div>
            </div>
          </div>
          );
      }
  }
}
export default LoginPage;
