import React, {Component}from 'react';
import {Button, ButtonGroup} from 'react-bootstrap'
import './Account.css';

/*Authors: Emil Fjellström, Johan Challita, Niklas Höstklint, Jesper Larsson*/
class Account extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            image: null,
            UUIDs: []
        };
    }

    componentDidMount() {
            /*Collects data from Springboot */
            fetch("http://localhost:8080/demo/myAssessments",{
              method: 'GET',
              headers:{
                'Authorization': 'Bearer ' + this.props.token}
            })
            .then( response => response.json())
            .then(
                // handle the result
                (result) => {
                    this.setState({
                        isLoaded : true,
                        UUIDs : result
                    });
                },

                // Handle error
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                },
            )

        }
      createNewInput(){
              /*Collects data from Springboot */
              fetch("http://localhost:8080/demo/createInput",{
                method: 'POST',
                headers:{
                  'Authorization': 'Bearer ' + this.props.token}
              })
              .then( response => response.text())
              .then(
                  // handle the result
                  (result) => {
                      this.setUUID(result);
                    },

                  // Handle error
                  (error) => {
                      this.setState({
                          isLoaded: true,
                          error
                      })
                  },
              )

      }

      setUUID(UUID){
        this.props.setUUID(UUID);
        this.props.changeDisplayInput();
      }
      render(){
        /*Error checker */
        const {error, isLoaded, textFile, image} = this.state;
        if(error){
            return <div>Du behöver vara inloggad för åtkomst till denna sida</div>
        }if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
          return(
          <div class = "container-fluid p-0">
            <div class = "flex-grid-account" align="start">
              {"Välkommen "} <strong>{this.props.displayName}</strong> {" till ditt konto. Välj en befintlig bedömning eller skapa en ny genom att klicka på +."}
            </div>
              {
                this.state.UUIDs.map((UUID)=>
                <div class = "flex-grid-account-UUID">
                  <div class="col-flex-UUID" align="start">
                    <strong>Bedömningens ID:</strong> {UUID}
                  </div>
                  <div class = "col-flex-account-button" align = "start">
                  <ButtonGroup className="account-button-grp-single" align="end">
                    <Button className="mobileButton" variant="choiceButton" onClick={()=>this.setUUID(UUID)}><a className="inputButtonText">{"Välj"}</a></Button>
                  </ButtonGroup>
                  </div>
                </div>
                )
              }
            <div class="flex-grid-account-button">
              <div class="col-flex-account-newButton" align="start">
                <strong></strong>
              </div>
              <div class = "col-flex-account-button" align = "start">
                <ButtonGroup className="account-button-grp-single" align="end">
                  <Button className="mobileButton" variant="choiceButton" onClick={()=>this.createNewInput()}><a className="inputButtonText">{"+"}</a></Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          );
      }
  }
}
export default Account;
