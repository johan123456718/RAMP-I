import React, {Image, Component } from 'react';
import './Input.css';
import { ButtonGroup, ToggleButton,ToggleButtonGroup, Form, Button, Navbar, Nav,
  FormControl, Col, Row, Popover, OverlayTrigger, Alert, Card  } from 'react-bootstrap'
import InputButton from './InputButton';

/*Authors: Emil Fjellström, Johan Challita, Niklas Höstklint, Jesper Larsson*/
class Input extends Component {
    constructor(props){
        super(props);
        this.evaluation_date = React.createRef();
        this.work_task = React.createRef();
        this.work_station = React.createRef();
        this.work_department = React.createRef();
        this.work_location = React.createRef();
        this.country = React.createRef();
        this.orderer_name = React.createRef();
        this.orderer_title = React.createRef();
        this.user_name = React.createRef();
        this.user_title = React.createRef();
        this.company_representative_name = React.createRef();
        this.company_representative_title = React.createRef();
        this.safety_representative_name = React.createRef();
        this.safety_representative_title = React.createRef();
        this.other_representative_name = React.createRef();
        this.other_representative_title = React.createRef();
        this.other_information = React.createRef();
        this.answer = React.createRef();
        this.state = {
            UUID : this.props.UUID,
            error : null,
            alert : false,
            invalidUUID : false,
            success : false,
            submit : true,
            isLoaded : true,
            inputChanged: false,
        };
    }

    componentDidMount(){
      if(this.state.UUID !== "UUID"){
          this.updateData();
        }
        this.setState({inputChanged: false});
    }
    /* To make sure old states dont stay when new ones are called */
    resetStates() {
      if (this.state.alert){
        this.state.alert = false;
      }
      if (this.state.success){
        this.state.success = false;
      }
      if (this.state.invalidUUID){
        this.state.invalidUUID = false;
      }
      if (this.state.submit){
        this.state.submit = false;
      }
   }

    changeDisplayAlert(){
      this.resetStates();
      this.setState({
        alert: !this.state.alert
      })
    }
    changeDisplaySuccess(){
      this.resetStates();
      this.setState({
        success: !this.state.success
      })
    }
    changeDisplayInvalidUUID(){
      this.resetStates();
      this.setState({
        invalidUUID: !this.state.invalidUUID
      })
    }
    changeDisplaySubmit(){
      this.resetStates();
      this.setState({
        submit: !this.state.submit
      })
    }

    changeInputState(){
      this.setState({inputChanged: true});
      this.props.updateInputChanges();
    }

    submitData(){
      /* mandatory fields */
      if (this.user_name.current.value === '' || this.evaluation_date.current.value === ''
         || this.work_task.current.value === '' || this.work_station.current.value === ''
        || this.work_department.current.value === '' || this.work_location.current.value === '' || this.country.current.value === ''
        || this.orderer_name.current.value === '' || this.orderer_title.current.value === '' || this.user_title.current.value === '' || this.eval_refers_to === 0){
        return (
          this.changeDisplayAlert()
        )
      }
      /* Sending user info to REST API */
      else{
        /* Sending user info to REST API */
        fetch('http://localhost:8080/demo/addUser?UUID=' + this.state.UUID + '&evaluation_date=' + this.evaluation_date.current.value +
        '&work_task=' + this.work_task.current.value + '&work_station=' + this.work_station.current.value +
        '&work_department=' + this.work_department.current.value + '&work_location=' + this.work_location.current.value +
        '&country=' + this.country.current.value + '&orderer_name=' + this.orderer_name.current.value +
        '&orderer_title=' + this.orderer_title.current.value + '&user_name=' + this.user_name.current.value +
        '&user_title=' + this.user_title.current.value + '&company_representative_name=' + this.company_representative_name.current.value +
        '&company_representative_title=' + this.company_representative_title.current.value + '&safety_representative_name=' + this.safety_representative_name.current.value +
        '&safety_representative_title=' + this.safety_representative_title.current.value + '&other_representative_name=' + this.other_representative_name.current.value +
        '&other_representative_title=' + this.other_representative_title.current.value + '&other_information=' + this.other_information.current.value
        + '&eval_refers_to=' + this.answer.current.getAnswer(),{
          method: 'POST',
          headers:{
            'Authorization': 'Bearer ' + this.props.token}
        }
       )
        .then(
          // handle the result
          (result) => {
              this.setState({
                  isLoaded : true,
              });
              this.changeDisplaySuccess()
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
      this.setState({inputChanged : false});
      this.props.resetInputChanges();
    }

    updateData(){
        /* Sending user info to REST API */
          this.setState({isLoaded : false})
            fetch('http://localhost:8080/demo/InputData?UUID=' + this.state.UUID,{
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
                  });
                  if (result === null){
                    return (
                      this.changeDisplayInvalidUUID()
                    )
                  }
                  else{
                  this.user_name.current.value = result.user_name;
                  this.evaluation_date.current.value = result.evaluation_date;
                  this.answer.current.changeAnswer(result.eval_refers_to);
                  this.work_task.current.value = result.work_task;
                  this.work_station.current.value = result.work_station;
                  this.work_department.current.value = result.work_department;
                  this.work_location.current.value = result.work_location;
                  this.country.current.value = result.country;
                  this.orderer_name.current.value = result.orderer_name;
                  this.orderer_title.current.value = result.orderer_title;
                  this.user_title.current.value = result.user_title;

                  if  (result.company_representative_name !== undefined){
                    this.company_representative_name.current.value = result.company_representative_name;
                  }
                  if  (result.company_representative_title !== undefined){
                    this.company_representative_title.current.value = result.company_representative_title;
                  }

                  if  (result.safety_representative_name !== undefined){
                    this.safety_representative_name.current.value = result.safety_representative_name;
                  }
                  if  (result.safety_representative_title !== undefined){
                    this.safety_representative_title.current.value = result.safety_representative_title;
                  }
                  if  (result.other_representative_name !== undefined){
                    this.other_representative_name.current.value = result.other_representative_name;
                  }
                  if  (result.other_representative_title !== undefined){
                    this.other_representative_title.current.value = result.other_representative_title;
                  }
                  if  (result.other_information !== undefined){
                    this.other_information.current.value = result.other_information;
                  }
                }
              },

              // Handle error
              (error) => {
                  this.setState({
                      isLoaded: true,
                      error
                  })
              },
          )
          this.setState({inputChanged : false});
          this.props.resetInputChanges();
        }


    /* Page for entering all information about the user taking the survey */

      render(){
        const {error, isLoaded} = this.state;
        if(error){
            return <div>Du behöver vara inloggad för åtkomst till denna sida</div>
        } if (!isLoaded) {
          return <div>Loading ...</div>
        }
        if(this.state.UUID === "UUID"){
          return(<div>
                  Ingen Bedömning vald. Välj befintlig eller skapa en ny under fliken "Konto".
                </div>)
        }
        else{
          return(
          <div class="container-fluid p-0">

            <div class="flex-grid-input">
              <div class="col-flex-input-date">
                <p className="label-input-text" align="start"><strong>*Datum</strong> </p>
                <Form.Control type="date" ref={this.evaluation_date} onChange ={()=> this.changeInputState()} placeholder="datum" />
              </div>
              <div class="col-flex-input-button" >
                <p className="label-input-text" align="center"> <strong> *Bedömningen avser </strong><InputButton changeState ={()=> this.changeInputState()} val1="Arbete/arbetsuppgift" val2= "Arbetstagarens belastning" ref={this.answer}/>
                </p>
              </div>
            </div>

            <div class="flex-grid-input">
              <div class="col-flex-input">
                <Form.Label className="label-input-text" align="start"> <strong> *Arbete/Arbetsuppgift </strong></Form.Label>
                <Form.Control ref={this.work_task} onChange ={()=> this.changeInputState()} placeholder="Arbete/Arbetsuppgift" />
              </div>
            </div>

            <div class="flex-grid-input">
              <div class="col-flex-input">
                <Form.Label className="label-input-text" align="start"><strong>*Arbetsstation/Arbetstagares belastning</strong></Form.Label>
                <Form.Control ref={this.work_station}  onChange ={()=> this.changeInputState()} placeholder="Arbetsstation/Arbetstagares belastning" />
              </div>
              <div class="col-flex-input" align="start">
                <Form.Label className="label-input-text"><strong>*Avdelning</strong></Form.Label>
                <Form.Control ref={this.work_department} onChange ={()=> this.changeInputState()} placeholder="Avdelning" />
              </div>
            </div>

            <div class="flex-grid-input">
              <div class="col-flex-input">
                <Form.Label className="label-input-text" align="start"><strong>*Anläggning/Arbetsplats</strong></Form.Label>
                <Form.Control ref={this.work_location} onChange ={()=> this.changeInputState()} placeholder="Anläggning/Arbetsplats" />
              </div>
              <div class="col-flex-input" >
                <Form.Label className="label-input-text" align="start"><strong>*Land</strong></Form.Label>
                <Form.Control ref={this.country} onChange ={()=> this.changeInputState()} placeholder="Land" />
              </div>
            </div>

            <div class="flex-grid-input">
              <div class="col-flex-input">
                <Form.Label className="label-input-text" align="start"><strong>*Bedömning beställd av</strong></Form.Label>
                <Form.Control ref={this.orderer_name} onChange ={()=> this.changeInputState()} placeholder="Bedömning beställd av" />
              </div>
              <div class="col-flex-input" >
                <Form.Label className="label-input-text" align="start"><strong>*Befattning</strong></Form.Label>
                <Form.Control ref={this.orderer_title} onChange ={()=> this.changeInputState()} placeholder="Befattning" />
              </div>
            </div>

            <div class="flex-grid-input">
              <div class="col-flex-input">
                <Form.Label className="label-input-text" align="start"><strong>*Bedömning genomförd av</strong></Form.Label>
                <Form.Control ref={this.user_name} onChange ={()=> this.changeInputState()} placeholder="Bedömning genomförd av" />
              </div>
              <div class="col-flex-input">
                <Form.Label className="label-input-text" align="start"><strong>*Befattning</strong></Form.Label>
                <Form.Control ref={this.user_title} onChange ={()=> this.changeInputState()} placeholder="Befattning" />
              </div>
            </div>

            <div class="flex-grid-input">
              <div class="col-flex-input">
                <Form.Label className="label-input-text" align="start"><strong>Företagsrepresentant</strong></Form.Label>
                <Form.Control ref={this.company_representative_name} onChange ={()=> this.changeInputState()} placeholder="Företagsrepresentant" />
              </div>
              <div class="col-flex-input">
                <Form.Label className="label-input-text" align="start"><strong>Befattning</strong></Form.Label>
                <Form.Control ref={this.company_representative_title} onChange ={()=> this.changeInputState()} placeholder="Befattning" />
              </div>
            </div>

            <div class="flex-grid-input">
              <div class="col-flex-input">
                <Form.Label className="label-input-text" align="start"><strong>Skydds-/arbetsmiljöombud/medarbetare</strong></Form.Label>
                <Form.Control ref={this.safety_representative_name} onChange ={()=> this.changeInputState()} placeholder="Skydds-/arbetsmiljöombud/medarbetare" />
              </div>
              <div class="col-flex-input">
                <Form.Label className="label-input-text" align="start"><strong>Befattning</strong></Form.Label>
                <Form.Control ref={this.safety_representative_title} onChange ={()=> this.changeInputState()} placeholder="Befattning" />
              </div>
            </div>

            <div class="flex-grid-input">
              <div class="col-flex-input">
                <Form.Label className="label-input-text" align="start"><strong>Övriga</strong></Form.Label>
                <Form.Control ref={this.other_representative_name} onChange ={()=> this.changeInputState()} placeholder="Övriga" />
              </div>
              <div class="col-flex-input">
                <Form.Label className="label-input-text" align="start"><strong>Befattning</strong></Form.Label>
                <Form.Control ref={this.other_representative_title} onChange ={()=> this.changeInputState()} placeholder="Befattning" />
              </div>
            </div>

            <div class="flex-grid-input">
              <div class="col-flex-input">
                <Form.Label className="label-input-text" align="start"><strong>Övriga uppgifter</strong></Form.Label>
                <Form.Control ref={this.other_information} onChange ={()=> this.changeInputState()} placeholder="Övriga uppgifter" />
              </div>
            </div>

            <div class="flex-input-spacer"></div>

          <div class="flex-grid-input-footer">
            <Card className = "footer" variant="none">
            {/* In case mandatory fields are missing */}
            {
              this.state.alert?
                <div class="alert alert-danger" className="input-alert-red" role="alert">
                  ERROR: Obligatoriska fält saknas (*)
                  <ButtonGroup className="input-button-grp-single">
                    <Button className="mobileButtonDELUX" align = "start" variant="choiceButton"  onClick ={()=>this.setState({alert : false, submit : true})}>Ok</Button>
                  </ButtonGroup>
                </div>
              :null
            }
            {
              this.state.invalidUUID?
                <div class="alert alert-danger" className="input-alert" role="alert">
                  Felaktig UUID
                </div>
              :null
            }
            {/* If a succesfully database entry has been made */}
            {
              this.state.success?
                <div class="alert alert-success" className="input-alert-green" role="alert">
                  Information uppdaterad!
                  <ButtonGroup className="input-button-grp-single">
                    <Button className="mobileButtonDELUX" align = "start" variant="choiceButton"  onClick ={()=>this.setState({success : false, submit : true})}>Ok</Button>
                  </ButtonGroup>
                </div>
              :null
            }
            {
              this.state.submit?
                <div class="flex-grid-input-footer">
                  <Card.Body className="input-card-body">
                    <ButtonGroup className="input-button-grp-single">
                      <Button className="mobileButton" align="center" variant="choiceButton" onClick = {()=>this.submitData()}>
                        <a className="inputButtonText">{"Spara"}</a>
                      </Button>
                    </ButtonGroup>
                  </Card.Body>
                </div>
              :null
            }
            </Card>
          </div>
        </div>

          );
      }
  }
}

export default Input;
