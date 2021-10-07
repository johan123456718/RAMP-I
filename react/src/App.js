import React, { Component } from 'react';
import Checklist from './components/OnlinePosts/checklist';
import './App.css';
import IntroText from './components/OnlinePosts/IntroText';
import ActionModel from './components/OnlinePosts/ActionModel';
import ActionPlan from './components/OnlinePosts/ActionPlan';
import ActionSuggestion from './components/OnlinePosts/ActionSuggestion';
import Account from './components/OnlinePosts/Account';
import LoginPage from './components/OnlinePosts/LoginPage';
import Input from './components/OnlinePosts/Input';
import Result from './components/OnlinePosts/Result';
import { ButtonGroup, ToggleButton, Form, Button, Navbar, Nav, FormControl, NavDropdown, Modal } from 'react-bootstrap'
import UserComment from './components/OnlinePosts/UserComment';

//Authors: Emil Fjellström, Johan Challita, Niklas Höstklint, Jesper Larsson 

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      UUID: 'UUID',
      token: 'token',
      showQuestions: false,
      showLoginPage: true,
      displayName: '',
      showIntro: false,
      showWelcome: false,
      showActionModel: false,
      showInputPage: false,
      showResultPage: false,
      showActionplan: false,
      showAccount: false,
      checkListUpdated: false,
      inputUpdated: false,
      userLoggedIn: false,
      showContinueBoxIntro: false,
      showContinueBoxResult: false,
      showContinueBoxInput: false,
      showContinueBoxActionModel: false,
      showContinueBoxHandlingsplan: false,
      showContinueBoxActionSuggestion:false,
      showContinueBoxChecklist: false,
      showContinueBoxAccount: false
    };
  }

  setToken(token, displayName){
    this.setState({token: token, showLoginPage:false, showAccount: false, userLoggedIn: true, displayName: displayName});
    this.changeDisplayAccount();
  }


  logout(){
    this.resetStates();
    this.setState({token:'token', showLoginPage:true, UUID:'UUID', userLoggedIn: false, displayName: ''});
  }

  updateChanges(){
      this.setState({checkListUpdated: true});
    }
  updateInputChanges(){
      this.setState({inputUpdated: true});
    }
  resetChanges(){
    this.setState({checkListUpdated: false});
  }
  resetInputChanges(){
    this.setState({inputUpdated: false});
  }

  resetStates() {
    if (this.state.showQuestions){
      this.state.showQuestions = false;
    }
    if (this.state.showIntro){
      this.state.showIntro = false;
    }
    if(this.state.showWelcome){
      this.state.showWelcome = false;
    }
    if(this.state.showActionModel){
      this.state.showActionModel = false;
    }
    if(this.state.showInputPage){
      this.state.showInputPage = false;
    }
    if(this.state.showResultPage){
      this.state.showResultPage = false;
    }
    if(this.state.showActionplan){
      this.state.showActionplan = false;
    }
    if(this.state.showActionplan){
      this.state.showActionplan = false;
    }
    if(this.state.showAccount){
      this.state.showAccount = false;
    }
    if(this.state.showLoginPage){
      this.state.showLoginPage = false;
  }
 }

  resetContinueBoxes(){
    this.state.showContinueBoxIntro = false;
    this.state.showContinueBoxResult= false;
    this.state.showContinueBoxInput= false;
    this.state.showContinueBoxActionModel= false;
    this.state.showContinueBoxHandlingsplan= false;
    this.state.showContinueBoxActionSuggestion= false;
    this.state.showContinueBoxChecklist = false;
    this.state.showContinueBoxLoginPage = false;
    this.state.showContinueBoxAccount = false;
  }

 changeDisplayInput(){
   this.setState({inputUpdated: false, checklistUpdated: false, showContinueBoxInput: false, showContinueBoxChecklist: false});
   this.resetChanges();
   this.resetInputChanges();
   this.resetStates();
   this.setState({
     showInputPage: !this.state.showInputPage
   })
 }

 changeDisplayWelcome(){
   this.setState({inputUpdated: false, checklistUpdated: false, showContinueBoxActionSuggestion: false, showContinueBoxChecklist: false});
   this.resetChanges();
   this.resetInputChanges();
   this.resetStates();
   this.setState({
     showWelcome: !this.state.showWelcome
   })
 }

 changeDisplayIntro(){
   this.setState({inputUpdated: false, checklistUpdated: false, showContinueBoxIntro: false, showContinueBoxChecklist: false});
   this.resetChanges();
   this.resetInputChanges();
   this.resetStates();
   this.setState({
     showIntro: !this.state.showIntro
   })
 }

 changeDisplayQuestion(){
   this.setState({inputUpdated: false, showContinueBoxChecklist: false, checklistUpdated: false, showContinueBoxInput: false});
   this.resetChanges();
   this.resetInputChanges();
   this.resetStates();
   this.setState({
     showQuestions: !this.state.showQuestions
   })
 }

 changeDisplayActionModel(){
   this.setState({inputUpdated: false,checklistUpdated: false, showContinueBoxActionModel: false, showContinueBoxChecklist: false});
   this.resetChanges();
   this.resetInputChanges();
   this.resetStates();
   this.setState({
     showActionModel: !this.state.showActionModel
   })
 }

 changeDisplayResultat(){
   this.setState({inputUpdated: false,checklistUpdated: false, showContinueBoxResult: false, showContinueBoxChecklist: false});
   this.resetChanges();
   this.resetInputChanges();
   this.resetStates();
   this.setState({
     showResultPage: !this.state.showResultPage
   })
 }

 changeDisplayActionplan(){
   this.setState({inputUpdated: false,checklistUpdated: false, showContinueBoxHandlingsplan: false, showContinueBoxChecklist: false});
   this.resetChanges();
   this.resetInputChanges();
   this.resetStates();
   this.setState({
     showActionplan: !this.state.showActionplan
   })
 }

 changeDisplayAccount(){
  this.setState({checklistUpdated: false, showContinueBoxAccount: false, inputUpdated: false, showContinueBoxChecklist: false});
  this.resetChanges();
  this.resetInputChanges();
  this.resetStates();
  this.setState({
    showAccount: !this.state.showAccount
  })
}

changeDisplayLoginPage(){
  this.setState({checklistUpdated: false, showContinueBoxLoginPage: false, inputUpdated: false, showContinueBoxChecklist: false});
  this.resetChanges();
  this.resetInputChanges();
  this.resetStates();
  this.setState({
    showLoginPage: !this.state.showLoginPage
  })
}

setUUID(UUID){
   this.setState({UUID: UUID});
 }
 changeTokenState(text){
   this.setState({token: text});
 }

 changeCommentState(text){
   this.setState({UUID: text});
 }

 checklistToIntroState(text){
   this.resetContinueBoxes();
   this.setState({showContinueBoxIntro: true});
 }
 checklistToResultState(text){
   this.resetContinueBoxes();
   this.setState({showContinueBoxResult: true});
 }
 checklistToInputState(text){
   this.resetContinueBoxes();
   this.setState({showContinueBoxInput: true});
 }
 checklistToActionModelState(text){
   this.resetContinueBoxes();
   this.setState({showContinueBoxActionModel: true});
 }
 checklistToActionSuggestionState(text){
   this.resetContinueBoxes();
   this.setState({showContinueBoxActionSuggestion: true});
 }
 checklistToHandlingsplanState(text){
   this.resetContinueBoxes();
   this.setState({showContinueBoxHandlingsplan: true});
 }
 inputToChecklistState(text){
   this.resetContinueBoxes();
   this.setState({showContinueBoxChecklist: true});
 }
 checklistToLoginPageState(text){
   this.resetContinueBoxes();
   this.setState({showContinueBoxLoginPage: true});
 }
 checklistToAccountState(text){
   this.resetContinueBoxes();
   this.setState({showContinueBoxAccount: true});
 }


  render() {
    return (
      <div className="App">
        <div class="navBar">
          <Navbar>
            <Navbar.Brand className="navBrand">RAMP I</Navbar.Brand>
            <Nav className="mr-auto">
            {this.state.checkListUpdated || this.state.inputUpdated?
              <Nav.Link className="navItem" href="#intro" onClick = {()=>this.checklistToIntroState()}>Introduktion</Nav.Link>
            :null}
            {!this.state.checkListUpdated && !this.state.inputUpdated?
              <Nav.Link className="navItem" href="#intro" onClick = {()=>this.changeDisplayIntro()} >Introduktion</Nav.Link>
            :null}

            {this.state.checkListUpdated?
              <Nav.Link className="navItem" href="#input" onClick = {()=>this.checklistToInputState()} >Indata</Nav.Link>
            :null}
            {!this.state.checkListUpdated?
              <Nav.Link className="navItem" href="#input" onClick = {()=>this.changeDisplayInput()} >Indata</Nav.Link>
            :null}

            {this.state.inputUpdated?
              <Nav.Link className="navItem" href="#checklist" onClick = {()=>this.inputToChecklistState()} >Checklista</Nav.Link>
            :null}
            {!this.state.inputUpdated?
              <Nav.Link className="navItem" href="#checklist" onClick = {()=>this.changeDisplayQuestion()} >Checklista</Nav.Link>
            :null}

            {this.state.checkListUpdated || this.state.inputUpdated?
              <Nav.Link className="navItem" href="#result" onClick = {()=>this.checklistToResultState()} >Resultat</Nav.Link>
            :null}
            {!this.state.checkListUpdated && !this.state.inputUpdated?
              <Nav.Link className="navItem" href="#result" onClick = {()=>this.changeDisplayResultat() }>Resultat</Nav.Link>
            :null}

            {this.state.checkListUpdated || this.state.inputUpdated?
              <Nav.Link className="navItem" href="#actionModel" onClick = {()=>this.checklistToActionModelState()} >Åtgärdsmodell</Nav.Link>
            :null}
            {!this.state.checkListUpdated && !this.state.inputUpdated?
              <Nav.Link className="navItem" href="#actionModel" onClick = {()=>this.changeDisplayActionModel()} >Åtgärdsmodell</Nav.Link>
            :null}

            {this.state.checkListUpdated ||this.state.inputUpdated?
              <Nav.Link className="navItem" href="#actionSuggestion" onClick = {()=>this.checklistToActionSuggestionState()} >Åtgärdsförslag</Nav.Link>
            :null}
            {!this.state.checkListUpdated && !this.state.inputUpdated?
              <Nav.Link className="navItem" href="#actionSuggestion" onClick = {()=>this.changeDisplayWelcome() }>Åtgärdsförslag</Nav.Link>
            :null}

            {this.state.checkListUpdated || this.state.inputUpdated?
              <Nav.Link className="navItem" href="#actionSuggestion" onClick = {()=>this.checklistToHandlingsplanState()} >Handlingsplan</Nav.Link>
            :null}
            {!this.state.checkListUpdated && !this.state.inputUpdated?
              <Nav.Link className="navItem" href="#handlingsplan" onClick = {()=>this.changeDisplayActionplan() }>Handlingsplan</Nav.Link>
            :null}

            {this.state.checkListUpdated ||this.state.inputUpdated?
              <Nav.Link className="navItem" href="#konto" onClick = {()=>this.checklistToAccountState() }>Konto</Nav.Link>
            :null}
            {!this.state.checkListUpdated && !this.state.inputUpdated?
              <Nav.Link className="navItem" href="#konto" onClick = {()=>this.changeDisplayAccount() }>Konto</Nav.Link>
            :null}

            {this.state.userLoggedIn?
              <Nav.Link className="navItem" onClick={()=>this.logout()}><strong>Logga ut</strong></Nav.Link>
            :null}
            {!this.state.userLoggedIn?
              <Nav.Link className="navItem" onClick={()=>this.changeDisplayLoginPage()}><strong>Logga in</strong></Nav.Link>
            :null}

            </Nav>
          </Navbar>
        </div>
        <Navbar collapseOnSelect expand="lg" className = "mobileNavBar">
                <Navbar.Brand className="navBrand">RAMP I</Navbar.Brand>

                {this.state.checkListUpdated?
                  <Nav.Link className="navItem" href="#input" onClick = {()=>this.checklistToInputState()} >Indata</Nav.Link>
                :null}
                {!this.state.checkListUpdated?
                  <Nav.Link className="navItem" href="#input" onClick = {()=>this.changeDisplayInput()} >Indata</Nav.Link>
                :null}

                {this.state.inputUpdated?
                  <Nav.Link className="navItem" href="#checklist" onClick = {()=>this.inputToChecklistState()} >Checklista</Nav.Link>
                :null}
                {!this.state.inputUpdated?
                  <Nav.Link className="navItem" href="#checklist" onClick = {()=>this.changeDisplayQuestion()} >Checklista</Nav.Link>
                :null}

                {this.state.checkListUpdated || this.state.inputUpdated?
                  <Nav.Link className="navItem" href="#result" onClick = {()=>this.checklistToResultState()} >Resultat</Nav.Link>
                :null}
                {!this.state.checkListUpdated && !this.state.inputUpdated?
                  <Nav.Link className="navItem" href="#result" onClick = {()=>this.changeDisplayResultat() }>Resultat</Nav.Link>
                :null}

                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto">
                          {this.state.checkListUpdated || this.state.inputUpdated?
                            <Nav.Link className="navItem" href="#intro" onClick = {()=>this.checklistToIntroState()}>Introduktion</Nav.Link>
                          :null}
                          {!this.state.checkListUpdated && !this.state.inputUpdated?
                            <Nav.Link className="navItem" href="#intro" onClick = {()=>this.changeDisplayIntro()} >Introduktion</Nav.Link>
                          :null}

                          {this.state.checkListUpdated || this.state.inputUpdated?
                            <Nav.Link className="navItem" href="#actionModel" onClick = {()=>this.checklistToActionModelState()} >Åtgärdsmodell</Nav.Link>
                          :null}
                          {!this.state.checkListUpdated && !this.state.inputUpdated?
                            <Nav.Link className="navItem" href="#actionModel" onClick = {()=>this.changeDisplayActionModel()} >Åtgärdsmodell</Nav.Link>
                          :null}

                          {this.state.checkListUpdated ||this.state.inputUpdated?
                            <Nav.Link className="navItem" href="#actionSuggestion" onClick = {()=>this.checklistToActionSuggestionState()} >Åtgärdsförslag</Nav.Link>
                          :null}
                          {!this.state.checkListUpdated && !this.state.inputUpdated?
                            <Nav.Link className="navItem" href="#actionSuggestion" onClick = {()=>this.changeDisplayWelcome() }>Åtgärdsförslag</Nav.Link>
                          :null}

                          {this.state.checkListUpdated || this.state.inputUpdated?
                            <Nav.Link className="navItem" href="#actionSuggestion" onClick = {()=>this.checklistToHandlingsplanState()} >Handlingsplan</Nav.Link>
                          :null}
                          {!this.state.checkListUpdated && !this.state.inputUpdated?
                            <Nav.Link className="navItem" href="#handlingsplan" onClick = {()=>this.changeDisplayActionplan() }>Handlingsplan</Nav.Link>
                          :null}

                          {this.state.checkListUpdated ||this.state.inputUpdated?
                            <Nav.Link className="navItem" href="#konto" onClick = {()=>this.checklistToAccountState() }>Konto</Nav.Link>
                          :null}
                          {!this.state.checkListUpdated && !this.state.inputUpdated?
                            <Nav.Link className="navItem" href="#konto" onClick = {()=>this.changeDisplayAccount() }>Konto</Nav.Link>
                          :null}
                          {this.state.userLoggedIn?
                            <Nav.Link className="navItem" onClick={()=>this.logout()}><strong>Logga ut</strong></Nav.Link>
                          :null}
                          {!this.state.userLoggedIn?
                            <Nav.Link className="navItem" onClick={()=>this.changeDisplayLoginPage()}><strong>Logga in</strong></Nav.Link>
                          :null}
                          <NavDropdown.Divider />

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        {
          this.state.showLoginPage?
          <div>
            <LoginPage setToken={(e, f)=>this.setToken(e, f)}/>
          </div>
        :null}
        {
          this.state.showInputPage?
          <div>
          <h1 className="header">Indata för bedömning med RAMP I</h1>
          {this.state.showContinueBoxResult?
            <Modal.Dialog>
              <Modal.Header closeButton onClick ={()=>this.setState({inputUpdated: true, showContinueBoxResult: false})}>
                <Modal.Title>Osparade ändringar</Modal.Title>
              </Modal.Header>

              <Modal.Footer>
              Är du säker på att du vill lämna utan att spara?
                <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.changeDisplayResultat()}>Ja</Button>
                <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.setState({inputUpdated: true, showContinueBoxResult: false})}>Nej</Button>
              </Modal.Footer>
            </Modal.Dialog>
          :null}
          {this.state.showContinueBoxIntro?
            <Modal.Dialog>
              <Modal.Header closeButton onClick ={()=>this.setState({inputUpdated: true, showContinueBoxIntro: false})}>
                <Modal.Title>Osparade ändringar</Modal.Title>
              </Modal.Header>

              <Modal.Footer>
              Är du säker på att du vill lämna utan att spara?
                <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.changeDisplayIntro()}>Ja</Button>
                <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.setState({inputUpdated: true, showContinueBoxIntro: false})}>Nej</Button>
              </Modal.Footer>
            </Modal.Dialog>
          :null}
          {this.state.showContinueBoxChecklist?
            <Modal.Dialog>
              <Modal.Header closeButton onClick ={()=>this.setState({inputUpdated: true, showContinueBoxChecklist: false})}>
                <Modal.Title>Osparade ändringar</Modal.Title>
              </Modal.Header>

              <Modal.Footer>
              Är du säker på att du vill lämna utan att spara?
                <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.changeDisplayQuestion()}>Ja</Button>
                <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.setState({inputUpdated: true, showContinueBoxChecklist: false})}>Nej</Button>
              </Modal.Footer>
            </Modal.Dialog>
          :null}
          {this.state.showContinueBoxActionModel?
            <Modal.Dialog>
              <Modal.Header closeButton onClick ={()=>this.setState({inputUpdated: true, showContinueBoxActionModel: false})}>
                <Modal.Title>Osparade ändringar</Modal.Title>
              </Modal.Header>

              <Modal.Footer>
              Är du säker på att du vill lämna utan att spara?
                <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.changeDisplayActionModel()}>Ja</Button>
                <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.setState({inputUpdated: true, showContinueBoxActionModel: false})}>Nej</Button>
              </Modal.Footer>
            </Modal.Dialog>
          :null}
          {this.state.showContinueBoxActionSuggestion?
            <Modal.Dialog>
              <Modal.Header closeButton onClick ={()=>this.setState({inputUpdated: true, showContinueBoxActionSuggestion: false})}>
                <Modal.Title>Osparade ändringar</Modal.Title>
              </Modal.Header>

              <Modal.Footer>
              Är du säker på att du vill lämna utan att spara?
                <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.changeDisplayWelcome()}>Ja</Button>
                <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.setState({inputUpdated: true, showContinueBoxActionSuggestion: false})}>Nej</Button>
              </Modal.Footer>
            </Modal.Dialog>
          :null}
          {this.state.showContinueBoxHandlingsplan?
            <Modal.Dialog>
              <Modal.Header closeButton onClick ={()=>this.setState({inputUpdated: true, showContinueBoxHandlingsplan: false})}>
                <Modal.Title>Osparade ändringar</Modal.Title>
              </Modal.Header>

              <Modal.Footer>
                Är du säker på att du vill lämna utan att spara?
                <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.changeDisplayActionplan()}>Ja</Button>
                <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.setState({inputUpdated: true, showContinueBoxHandlingsplan: false})}>Nej</Button>
              </Modal.Footer>
            </Modal.Dialog>
          :null}
          {this.state.showContinueBoxAccount?
            <Modal.Dialog>
              <Modal.Header closeButton onClick ={()=>this.setState({inputUpdated: true, showContinueBoxAccount: false})}>
                <Modal.Title>Osparade ändringar</Modal.Title>
              </Modal.Header>

              <Modal.Footer>
              Är du säker på att du vill lämna utan att spara?
                <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.changeDisplayAccount()}>Ja</Button>
                <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.setState({inputUpdated: true, showContinueBoxAccount: false})}>Nej</Button>
              </Modal.Footer>
            </Modal.Dialog>
          :null}
          <Input UUID={this.state.UUID} updateInputChanges = {() => this.updateInputChanges()} resetInputChanges = {() => this.resetInputChanges()} token={this.state.token}/>

          </div>
          :null
        }
        {
          this.state.showIntro?
          <div>
          <h1 className="header">RAMP I Introduktion</h1>
          <IntroText token={this.state.token}/>

          </div>
          :null
        }
        {
          this.state.showQuestions?
          <div>
            <h1 className="header" >RAMP I Checklista</h1>
            {this.state.showContinueBoxResult?
              <Modal.Dialog>
                <Modal.Header closeButton onClick ={()=>this.setState({checklistUpdated: true, showContinueBoxResult: false})}>
                  <Modal.Title>Osparade ändringar</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                Är du säker på att du vill lämna utan att spara?
                  <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.changeDisplayResultat()}>Ja</Button>
                  <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.setState({checklistUpdated: true, showContinueBoxResult: false})}>Nej</Button>
                </Modal.Footer>
              </Modal.Dialog>
            :null}
            {this.state.showContinueBoxIntro?
              <Modal.Dialog>
                <Modal.Header closeButton onClick ={()=>this.setState({checklistUpdated: true, showContinueBoxIntro: false})}>
                  <Modal.Title>Osparade ändringar</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                Är du säker på att du vill lämna utan att spara?
                  <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.changeDisplayIntro()}>Ja</Button>
                  <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.setState({checklistUpdated: true, showContinueBoxIntro: false})}>Nej</Button>
                </Modal.Footer>
              </Modal.Dialog>
            :null}
            {this.state.showContinueBoxInput?
              <Modal.Dialog>
                <Modal.Header closeButton onClick ={()=>this.setState({checklistUpdated: true, showContinueBoxInput: false})}>
                  <Modal.Title>Osparade ändringar</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                Är du säker på att du vill lämna utan att spara?
                  <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.changeDisplayInput()}>Ja</Button>
                  <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.setState({checklistUpdated: true, showContinueBoxInput: false})}>Nej</Button>
                </Modal.Footer>
              </Modal.Dialog>
            :null}
            {this.state.showContinueBoxActionModel?
              <Modal.Dialog>
                <Modal.Header closeButton onClick ={()=>this.setState({checklistUpdated: true, showContinueBoxActionModel: false})}>
                  <Modal.Title>Osparade ändringar</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                Är du säker på att du vill lämna utan att spara?
                  <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.changeDisplayActionModel()}>Ja</Button>
                  <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.setState({checklistUpdated: true, showContinueBoxActionModel: false})}>Nej</Button>
                </Modal.Footer>
              </Modal.Dialog>
            :null}
            {this.state.showContinueBoxActionSuggestion?
              <Modal.Dialog>
                <Modal.Header closeButton onClick ={()=>this.setState({checklistUpdated: true, showContinueBoxActionSuggestion: false})}>
                  <Modal.Title>Osparade ändringar</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                Är du säker på att du vill lämna utan att spara?
                  <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.changeDisplayWelcome()}>Ja</Button>
                  <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.setState({checklistUpdated: true, showContinueBoxActionSuggestion: false})}>Nej</Button>
                </Modal.Footer>
              </Modal.Dialog>
            :null}
            {this.state.showContinueBoxHandlingsplan?
              <Modal.Dialog>
                <Modal.Header closeButton onClick ={()=>this.setState({checklistUpdated: true, showContinueBoxHandlingsplan: false})}>
                  <Modal.Title>Osparade ändringar</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                  Är du säker på att du vill lämna utan att spara?
                  <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.changeDisplayActionplan()}>Ja</Button>
                  <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.setState({checklistUpdated: true, showContinueBoxHandlingsplan: false})}>Nej</Button>
                </Modal.Footer>
              </Modal.Dialog>
            :null}
            {this.state.showContinueBoxAccount?
              <Modal.Dialog>
                <Modal.Header closeButton onClick ={()=>this.setState({checklistUpdated: true, showContinueBoxAccount: false})}>
                  <Modal.Title>Osparade ändringar</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                Är du säker på att du vill lämna utan att spara?
                  <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.changeDisplayAccount()}>Ja</Button>
                  <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.setState({checklistUpdated: true, showContinueBoxAccount: false})}>Nej</Button>
                </Modal.Footer>
              </Modal.Dialog>
            :null}
            <Checklist UUID={this.state.UUID} updateChanges = {() => this.updateChanges()} resetChanges = {() => this.resetChanges()} token={this.state.token}/>
          </div>
          :null
        }
        {

          this.state.showWelcome?
          <div>
            <h1 className="header" >Åtgärdsförslag från Åtgärdsmodulen i RAMP I</h1>
            <ActionSuggestion UUID={this.state.UUID} token={this.state.token}/>
          </div>
          :null
        }
        {
          this.state.showActionModel?
          <div>
            <ActionModel token={this.state.token}/>

          </div>
          :null
        }
        {
          this.state.showResultPage?
          <div>
            <h1 className="header" >RAMP I Resultat</h1>
            <Result UUID={this.state.UUID} token={this.state.token}/>
          </div>
          :null
        }
        {
          this.state.showActionplan?
          <div>
            <h1 className="header" >RAMP I Handlingsplan</h1>
            <ActionPlan token={this.state.token}/>

          </div>
          :null
        }
        {
          this.state.showAccount?
          <div>
            <h1 className="header">Mina bedömningar</h1>
              <Account UUID={this.state.UUID} token={this.state.token} displayName={this.state.displayName} setUUID={(e) => this.setUUID(e)} changeDisplayInput={() => this.changeDisplayInput()}/>
          </div>
          :null
        }
      </div>
    );
  }
}

export default App;
