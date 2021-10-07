import React, { Component } from 'react';
import { ButtonGroup, ToggleButton, Form, ToggleButtonGroup, Button } from 'react-bootstrap';
import './Result.css';
import ColorBox from './ColorBox';
import CheckedBox from './CheckedBox';

//Authors: Emil Fjellström, Johan Challita

class Result extends Component {
    constructor(props){
        super(props);
        this.user_name = "";
        this.evaluation_date = "";
        this.eval_refers_to = "";
        this.work_task ="";
        this.work_station = "";
        this.work_department ="";
        this.work_location = "";
        this.country = "";
        this.orderer_name = "";
        this.orderer_title = "";
        this.user_title = "";
        this.company_representative_name = "";
        this.company_representative_title = "";
        this.safety_representative_name ="";
        this.safety_representative_title = "";
        this.other_representative_name = "";
        this.other_representative_title = "";
        this.other_information = "";
        this.results = [];
        this.comments = [];
        this.state = {
          UUID : this.props.UUID,
            notCompleted : true,
            error : null,
            isLoaded : false,
            posts : [],
            nrOfReds: 0,
            nrOfGreys: 0,
            nrOfGreens: 0,
            showQuestionOne : false,
            showQuestionTwo : false,
            showQuestionThree : false,
            showQuestionFour : false,
            showQuestionFive : false,
            showQuestionSix : false,
            showQuestionSeven : false,
            showCompilation: false,
            showIntro : false,
            showBoxIntro : false,
            showBoxOne : false,
            showBoxTwo : false,
            showBoxThree : false,
            showBoxFour : false,
            showBoxFive : false,
            showBoxSix : false,
            showBoxSeven : false,
            showBoxCompilation: false,
            textValueIntro: '+',
            textValueOne: '+',
            textValueTwo: '+',
            textValueThree: '+',
            textValueFour: '+',
            textValueFive: '+',
            textValueSix: '+',
            textValueSeven: '+',
            textValueCompilation: '+'
        };
    }

  changeDisplayIntro(){
    this.changeEvalIntro();
    this.setState({
      showIntro: !this.state.showIntro,
      showBoxIntro: !this.state.showBoxIntro,
    })
  }
  changeDisplayQuestionOne(){
    this.changeEvalOne();
    this.setState({
      showQuestionOne: !this.state.showQuestionOne,
      showBoxOne: !this.state.showBoxOne,
    })
  }
  changeDisplayQuestionTwo(){
    this.changeEvalTwo();
    this.setState({
      showQuestionTwo: !this.state.showQuestionTwo,
      showBoxTwo : !this.state.showBoxTwo
    })
  }
  changeDisplayQuestionThree(){
    this.changeEvalThree();
    this.setState({
      showQuestionThree: !this.state.showQuestionThree,
      showBoxThree : !this.state.showBoxThree
    })
  }
  changeDisplayQuestionFour(){
    this.changeEvalFour();
    this.setState({
      showQuestionFour: !this.state.showQuestionFour,
      showBoxFour : !this.state.showBoxFour
    })
  }
  changeDisplayQuestionFive(){
    this.changeEvalFive();
    this.setState({
      showQuestionFive: !this.state.showQuestionFive,
      showBoxFive : !this.state.showBoxFive
    })
  }
  changeDisplayQuestionSix(){
    this.changeEvalSix();
    this.setState({
      showQuestionSix: !this.state.showQuestionSix,
      showBoxSix : !this.state.showBoxSix
    })
  }
  changeDisplayQuestionSeven(){
    this.changeEvalSeven();
    this.setState({
      showQuestionSeven: !this.state.showQuestionSeven,
      showBoxSeven : !this.state.showBoxSeven
    })
  }
  changeDisplayCompilation(){
    this.changeEvalCompilation();
    this.setState({
      showCompilation: !this.state.showCompilation,
      showBoxCompilation: !this.state.showBoxCompilation,
    })
  }

  changeEvalIntro() {
  if (this.state.textValueIntro === '+'){
    this.state.textValueIntro = '-';
  }else{
     this.state.textValueIntro = '+';
   }
  }
  changeEvalOne() {
  if (this.state.textValueOne === '+'){
    this.state.textValueOne = '-';
  }else{
     this.state.textValueOne = '+';
   }
  }
  changeEvalTwo(){
  if (this.state.textValueTwo === '+'){
   this.state.textValueTwo = '-';
  }else{
    this.state.textValueTwo = '+';
  }
  }

  changeEvalThree(){
  if (this.state.textValueThree === '+'){
   this.state.textValueThree = '-';
  }else{
    this.state.textValueThree = '+';
  }
  }

  changeEvalFour(){
  if (this.state.textValueFour === '+'){
   this.state.textValueFour = '-';
  }else{
    this.state.textValueFour = '+';
  }
  }

  changeEvalFive(){
  if (this.state.textValueFive === '+'){
   this.state.textValueFive = '-';
  }else{
    this.state.textValueFive = '+';
  }
  }

  changeEvalSix(){
  if (this.state.textValueSix === '+'){
   this.state.textValueSix = '-';
  }else{
    this.state.textValueSix = '+';
  }
  }

    changeEvalSeven(){
    if (this.state.textValueSeven === '+'){
     this.state.textValueSeven = '-';
    }else{
      this.state.textValueSeven = '+';
    }
  }

  changeEvalCompilation(){
  if (this.state.textValueCompilation === '+'){
   this.state.textValueCompilation = '-';
  }else{
    this.state.textValueCompilation = '+';
  }
}

  componentDidMount() {
     /*Collects data from Springboot */
     fetch("http://localhost:8080/demo/ResultCategory", {
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
                 posts : result
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
     if(this.state.UUID !== 'UUID'){
     this.updateData();
   }
  }

  updateData(){
   /* Sending user info to REST API */
     this.setState({isLoaded : false})
       fetch('http://localhost:8080/demo/InputData?UUID=' + this.state.UUID, {
         method: 'GET',
         headers:{
           'Authorization': 'Bearer ' + this.props.token}
       })
       .then( response => response.json())
       .then(
         // handle the result
         (result) => {
             this.setState({
             });
             if (result === null){
               return
             }
             else{
               if (result.is_completed === 1){
                 this.setState({notCompleted : false});
               } else{
                 this.setState({notCompleted : true});
               }
             this.user_name = result.user_name;
             this.evaluation_date = result.evaluation_date;
             if (result.eval_refers_to === 1){
                 this.eval_refers_to = "Arbete/Arbetsuppgift";
             }
             if(result.eval_refers_to === 2){
               this.eval_refers_to = "Arbetstagarens belastning";
             }
             this.work_task = result.work_task;
             this.work_station = result.work_station;
             this.work_department = result.work_department;
             this.work_location = result.work_location;
             this.country = result.country;
             this.orderer_name = result.orderer_name;
             this.orderer_title = result.orderer_title;
             this.user_title = result.user_title;

             if  (result.company_representative_name !== undefined){
               this.company_representative_name = result.company_representative_name;
             }
             if  (result.company_representative_title !== undefined){
               this.company_representative_title = result.company_representative_title;
             }

             if  (result.safety_representative_name !== undefined){
               this.safety_representative_name = result.safety_representative_name;
             }
             if  (result.safety_representative_title !== undefined){
               this.safety_representative_title = result.safety_representative_title;
             }
             if  (result.other_representative_name !== undefined){
               this.other_representative_name = result.other_representative_name;
             }
             if  (result.other_representative_title !== undefined){
               this.other_representative_title = result.other_representative_title;
             }
             if  (result.other_information !== undefined){
               this.other_information = result.other_information;
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

     this.setState({isLoaded : false})
       fetch('http://localhost:8080/demo/createResult?UUID=' + this.state.UUID, {
         method: 'GET',
         headers:{
           'Authorization': 'Bearer ' + this.props.token}
       })
       .then( response => response.json())
       .then(
         // handle the result
         (result) => {
             this.setState({
             });
             if (result === null){
               return
             }
             else{
               this.setState({nrOfReds: result.nrOfReds, nrOfGreys: result.nrOfGreys, nrOfGreens: result.nrOfGreens})
               for(var i = 0; i <83 ; i++){
                 if(result.resultList[i] !== undefined){
                   this.results[i] = result.resultList[i];
                 }
                 if(result.comments[i] !== undefined){
                   this.comments[i] = result.comments[i];
                 }

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
   }

    render() {
            /*Error checker */
            const {error, isLoaded, posts} = this.state;
            if(error){
                return <div>Du behöver vara inloggad för åtkomst till denna sida</div>
            }if (!isLoaded) {
                return <div>Loading ...</div>
            }
            if(this.state.UUID === "UUID"){
              return(<div>
                      Ingen Bedömning vald. Välj befintlig eller skapa en ny under fliken "Konto".
                    </div>)
            }else{
            return(
            <div class = "container-fluid p-0">
            {
              this.state.notCompleted?
              <div class="alert alert-danger" role="alert">
              Ej avslutad checklista
              </div>
              :null
            }

            <div class="flex-grid-result-grey-statement">
              <div class="col-flex-result-grey">
              {this.state.showQuestionOne || this.state.showQuestionTwo || this.state.showQuestionThree || this.state.showQuestionFour ||this.state.showQuestionFive ||this.state.showQuestionSix ||this.state.showQuestionSeven?
                <div>
                  <p className = "statementText" align="start"><strong>{""}</strong></p>
                </div>
              :<div>
                <p className = "statementText" align="start"><strong>{"Klicka på någon av kategorierna för att öppna."}</strong></p>
              </div>}
              </div>
              {this.state.showQuestionOne || this.state.showQuestionTwo || this.state.showQuestionThree || this.state.showQuestionFour ||this.state.showQuestionFive ||this.state.showQuestionSix ||this.state.showQuestionSeven?
                <div class="col-flex-grey-button" >
                  <p className = "statementText" align="start"><strong>{"Bedömning"}</strong></p>
                </div>
                :<div>
                  <p className = "statementText" align="start"><strong>{""}</strong></p>
                </div>}
              <div class="col-flex-result-grey">
              {this.state.showQuestionOne || this.state.showQuestionTwo || this.state.showQuestionThree || this.state.showQuestionFour ||this.state.showQuestionFive ||this.state.showQuestionSix ||this.state.showQuestionSeven?
                <div>
                  <p className = "statementText" align="start"><strong>{"Användarkommentarer"}</strong></p>
                </div>
              :null}
              </div>
            </div>

            <div class="flex-grid-result-category" align="start">
              <div class="col-flex-result-blue" onClick = {()=>this.changeDisplayIntro()}>
                <p className="title" align ="start">{"Resultat av RAMP-I analysen"} </p>
                <Button className="resultCategoryButton" align="start" variant="none">{this.state.textValueIntro}</Button>
              </div>
            </div>
{ this.state.showIntro?
  <div>
            <div class="flex-grid-result-white-statement-input" align="start">
              <div class="col-flex-result-box" >
                <p><strong>{"Datum: "}</strong>{this.evaluation_date}</p>
              </div>
              <div class="col-flex-result-box" >
              <p><strong>{"Bedömningen avser: " }</strong> {this.eval_refers_to}</p>
              </div>
            </div>

            <div class="flex-grid-result-white-statement-input" align="start">
              <div class="col-flex-result-box" >
              <p><strong>{"Arbete/Arbetsuppgift: " }</strong> {this.work_task}</p>
              </div>
            </div>

            <div class="flex-grid-result-white-statement-input" align="start">
              <div class="col-flex-result-box" >
                <p><strong>{"Arbetsstation/Arbetstagarens belastning: "}</strong> {this.work_station}</p>
              </div>
              <div class="col-flex-result-box" >
                <p><strong>{"Avdelning: "}</strong>  {this.work_department}</p>
              </div>
            </div>

            <div class="flex-grid-result-white-statement-input" align="start">
              <div class="col-flex-result-box" >
                <p><strong>{"Anläggning/Arbetsplats: "} </strong> {this.work_location}</p>
              </div>
              <div class="col-flex-result-box" >
                <p><strong>{"Land: "}</strong> {this.country}</p>
              </div>
            </div>

            <div class="flex-grid-result-white-statement-input" align="start">
              <div class="col-flex-result-box" >
                <p><strong>{"Bedömningen beställd av: "}</strong>{this.orderer_name} </p>
              </div>
              <div class="col-flex-result-box" >
                <p><strong>{"Befattning: "}</strong>{this.orderer_title}</p>
              </div>
            </div>

            <div class="flex-grid-result-white-statement-input" align="start">
              <div class="col-flex-result-box" >
                <p><strong>{"Bedömningen genomförd av: "}</strong>{this.user_name}</p>
              </div>
              <div class="col-flex-result-box" >
                <p><strong>{"Befattning: "}</strong>{this.user_title}</p>
              </div>
            </div>

            <div class="flex-grid-result-white-statement-input" align="start">
              <div class="col-flex-result-box" >
                <p><strong>{"Företagsrepresentant: "}</strong>{this.company_representative_name}</p>
              </div>
              <div class="col-flex-result-box" >
                <p><strong>{"Befattning: "}</strong>{this.company_representative_title}</p>
              </div>
            </div>

            <div class="flex-grid-result-white-statement-input" align="start">
              <div class="col-flex-result-box" >
                <p><strong>{"Skydds-/arbetsmiljöombud/medarbare: "}</strong>{this.safety_representative_name}</p>
              </div>
              <div class="col-flex-result-box" >
                <p><strong>{"Befattning: "}</strong>{this.safety_representative_title}</p>
              </div>
            </div>

            <div class="flex-grid-result-white-statement-input" align="start">
              <div class="col-flex-result-box" >
                <p><strong>{"Övriga: "}</strong>{this.other_representative_name} </p>
              </div>
              <div class="col-flex-result-box" >
                <p><strong>{"Befattning: "}</strong>{this.other_representative_title}</p>
              </div>
            </div>

            <div class="flex-grid-result-white-statement-input" align="start">
              <div class="col-flex-result-box" >
                <p><strong>{"Övriga uppgifter: "}</strong>{this.other_information}</p>
              </div>
            </div>
</div>
:null}

            {/*Arbetsställningar*/}
            <div class="flex-grid-result-category" align="start">
              <div class="col-flex-result-blue" onClick = {()=>this.changeDisplayQuestionOne()}>
                <p className="title">{"1. " + this.state.posts[0].categoryName} </p>
                <Button className="resultCategoryButton" align="start" variant="none">{this.state.textValueOne}</Button>
              </div>
            </div>
            {
              this.state.showQuestionOne?
              <div>
                <div class="flex-grid-result-question" align="center">
                  <div class="col-flex32-result" >
                    <p className="title"  align="start">{this.state.posts[0].questions[0].questionData}</p>
                  </div>
                </div>
                <div>
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[0].questions[0].statements[0]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[0]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[0]}</p>
                    </div>
                  </div>
                }

                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[0].questions[0].statements[1]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[1]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[1]}</p>
                    </div>
                  </div>
                }

                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[0].questions[0].statements[2]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[2]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[2]}</p>
                    </div>
                  </div>
                }

                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[0].questions[0].statements[3]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[3]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[3]}</p>
                    </div>
                  </div>
                }

                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[0].questions[0].statements[4]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[4]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[4]}</p>
                    </div>
                  </div>
                }
              </div>
              <div class="flex-grid-question" align="start">
                <div class="col-flex32-result" >
                  <p className="title"  align="start">{this.state.posts[0].questions[1].questionData}</p>
                </div>
              </div>
              <div>
              {
                <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.state.posts[0].questions[1].statements[0]}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <ColorBox color={this.results[5]}/>
                  </div>
                  <div class="col-flex-result" align="center">
                    <p className="bodyResultText"  align="start">{this.comments[5]}</p>
                  </div>
                </div>
              }

              {
                <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.state.posts[0].questions[1].statements[1]}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <ColorBox color={this.results[6]}/>
                  </div>
                  <div class="col-flex-result" align="center">
                    <p className="bodyResultText"  align="start">{this.comments[6]}</p>
                  </div>
                </div>
              }

              {
                <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.state.posts[0].questions[1].statements[2]}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <ColorBox color={this.results[7]}/>
                  </div>
                  <div class="col-flex-result" align="center">
                    <p className="bodyResultText"  align="start">{this.comments[7]}</p>
                  </div>
                </div>
              }

            </div>
          </div>
          :null}

            {/*Arbetsrörelser och repetitivt arbete*/}
            <div class="flex-grid-result-category" align="start">
              <div class="col-flex-result-blue" onClick = {()=>this.changeDisplayQuestionTwo()}>
                <p className="title">{" 2. " + this.state.posts[1].categoryName} </p>
                <Button className="resultCategoryButton" align="start" variant="none">{this.state.textValueTwo}</Button>
              </div>
            </div>
            {
              this.state.showQuestionTwo?
              <div>
                <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="title"  align="start">{this.state.posts[1].questions[0].questionData}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <ColorBox color={this.results[8]}/>
                  </div>
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.comments[8]}</p>
                  </div>
                </div>
            </div>
            :null}

            {/*Lyftarbete*/}
            <div class="flex-grid-result-category" align="start">
              <div class="col-flex-result-blue" onClick = {()=>this.changeDisplayQuestionThree()}>
                <p className="title">{"3. " + this.state.posts[2].categoryName} </p>
                <Button className="resultCategoryButton" align="start" variant="none">{this.state.textValueThree}</Button>
              </div>
            </div>
            {
              this.state.showQuestionThree?
              <div>
              <div class="flex-grid-result-question" align="start">
                <div class="col-flex32-result" >
                  <p className="title"  align="start">{this.state.posts[2].questions[0].questionData}</p>
                </div>
              </div>

                <div class="flex-grid-result-question" align="start">
                  <div class="col-flex32-result" >
                    <p className="title"  align="start">{this.state.posts[2].questions[1].questionData}</p>
                  </div>
                </div>
                <div>
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[2].questions[1].statements[0]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[9]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[15]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[2].questions[1].statements[1]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[10]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[17]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[2].questions[1].statements[2]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[11]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[19]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[2].questions[1].statements[3]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[12]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[21]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[2].questions[1].statements[4]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[13]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[23]}</p>
                    </div>
                  </div>
                }

                </div>
                <div class="flex-grid-result-question" align="start">
                  <div class="col-flex32-result" >
                    <p className="title"  align="start">{this.state.posts[2].questions[2].questionData}</p>
                  </div>
                </div>
                <div>
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[2].questions[2].statements[0]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[14]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[24]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[2].questions[2].statements[1]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[15]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[25]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[2].questions[2].statements[2]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[16]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[26]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[2].questions[2].statements[3]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[17]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[27]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[2].questions[2].statements[4]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[18]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[28]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[2].questions[2].statements[5]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[19]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[29]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[2].questions[2].statements[6]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[20]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[30]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[2].questions[2].statements[7]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[21]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[31]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[2].questions[2].statements[8]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[22]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[32]}</p>
                    </div>
                  </div>
                }
              </div>
            </div>
            :null}

            {/*Lyftarbete*/}
            <div class="flex-grid-result-category" align="start">
              <div class="col-flex-result-blue" onClick = {()=>this.changeDisplayQuestionFour()}>
                <p className="title">{"4. " + this.state.posts[3].categoryName} </p>
                <Button className="resultCategoryButton" align="start" variant="none">{this.state.textValueFour}</Button>
              </div>
            </div>
            {
              this.state.showQuestionFour?
              <div>
              <div class="flex-grid-result-question" align="start">
                <div class="col-flex32-result" >
                  <p className="title"  align="start">{this.state.posts[3].questions[0].questionData}</p>
                </div>
              </div>
                <div class="flex-grid-result-question" align="start">
                  <div class="col-flex32-result" >
                    <p className="title"  align="start">{this.state.posts[3].questions[1].questionData}</p>
                  </div>
                </div>
                <div>
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[3].questions[1].statements[0]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[23]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[34]}</p>
                    </div>
                  </div>
                }

                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[3].questions[1].statements[1]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[24]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[36]}</p>
                    </div>
                  </div>
                }

              </div>
                <div class="flex-grid-result-question" align="start">
                  <div class="col-flex32-result" >
                    <p className="title"  align="start">{this.state.posts[3].questions[2].questionData}</p>
                  </div>
                </div>
                <div>
                {
                  <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.state.posts[3].questions[2].statements[0]}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <ColorBox color={this.results[25]}/>
                  </div>
                  <div class="col-flex-result" align="center">
                    <p className="bodyResultText"  align="start">{this.comments[38]}</p>
                  </div>
                </div>
              }
              {
                <div class="flex-grid-result-white-statement" align="center">
                <div class="col-flex-result" >
                  <p className="bodyResultText"  align="start">{this.state.posts[3].questions[2].statements[1]}</p>
                </div>
                <div class="col-flex-result-button" >
                  <ColorBox color={this.results[26]}/>
                </div>
                <div class="col-flex-result" align="center">
                  <p className="bodyResultText"  align="start">{this.comments[39]}</p>
                </div>
              </div>
              }
              {
                <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.state.posts[3].questions[2].statements[3]}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <ColorBox color={this.results[27]}/>
                  </div>
                  <div class="col-flex-result" align="center">
                    <p className="bodyResultText"  align="start">{this.comments[40]}</p>
                  </div>
                </div>
              }
              {
                <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.state.posts[3].questions[2].statements[3]}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <ColorBox color={this.results[28]}/>
                  </div>
                  <div class="col-flex-result" align="center">
                    <p className="bodyResultText"  align="start">{this.comments[41]}</p>
                  </div>
                </div>
              }
              {
                <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.state.posts[3].questions[2].statements[1]}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <ColorBox color={this.results[29]}/>
                  </div>
                  <div class="col-flex-result" align="center">
                    <p className="bodyResultText"  align="start">{this.comments[42]}</p>
                  </div>
                </div>
              }
              {
                <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.state.posts[3].questions[2].statements[1]}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <ColorBox color={this.results[30]}/>
                  </div>
                  <div class="col-flex-result" align="center">
                    <p className="bodyResultText"  align="start">{this.comments[43]}</p>
                  </div>
                </div>
              }

              </div>
              <div class="flex-grid-result-question" align="center">
                <div class="col-flex32-result" >
                  <p className="title"  align="start">{this.state.posts[3].questions[3].questionData}</p>
                </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[31]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[44]}</p>
                    </div>
              </div>
            </div>
            :null}

            {/*Påverkande faktorer*/}
            <div class="flex-grid-result-category" align="start">
              <div class="col-flex-result-blue" onClick = {()=>this.changeDisplayQuestionFive()}>
                <p className="title">{"5. " + this.state.posts[4].categoryName} </p>
                <Button className="resultCategoryButton" align="start" variant="none">{this.state.textValueFive}</Button>
              </div>
            </div>
            {
              this.state.showQuestionFive?
              <div>
              <div class="flex-grid-result-question" align="start">
                <div class="col-flex32-result" >
                  <p className="title"  align="start">{this.state.posts[4].questions[0].questionData}</p>
                </div>
              </div>
              <div>
              {
                <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.state.posts[4].questions[0].statements[0]}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <ColorBox color={this.results[32]}/>
                  </div>
                  <div class="col-flex-result" align="center">
                    <p className="bodyResultText"  align="start">{this.comments[45]}</p>
                  </div>
                </div>
              }
              {
                <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.state.posts[4].questions[0].statements[1]}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <ColorBox color={this.results[33]}/>
                  </div>
                  <div class="col-flex-result" align="center">
                    <p className="bodyResultText"  align="start">{this.comments[47]}</p>
                  </div>
                </div>
              }
              {
                <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.state.posts[4].questions[0].statements[2]}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <ColorBox color={this.results[34]}/>
                  </div>
                  <div class="col-flex-result" align="center">
                    <p className="bodyResultText"  align="start">{this.comments[48]}</p>
                  </div>
                </div>
              }
              {
                <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.state.posts[4].questions[0].statements[3]}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <ColorBox color={this.results[35]}/>
                  </div>
                  <div class="col-flex-result" align="center">
                    <p className="bodyResultText"  align="start">{this.comments[49]}</p>
                  </div>
                </div>
              }
              {
                <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.state.posts[4].questions[0].statements[4]}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <ColorBox color={this.results[36]}/>
                  </div>
                  <div class="col-flex-result" align="center">
                    <p className="bodyResultText"  align="start">{this.comments[50]}</p>
                  </div>
                </div>
              }


            </div>
                <div class="flex-grid-result-question" align="start">
                  <div class="col-flex32-result" >
                    <p className="title"  align="start">{this.state.posts[4].questions[1].questionData}</p>
                  </div>
                </div>
                <div>
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[4].questions[1].statements[0]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[37]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[51]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[4].questions[1].statements[1]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[38]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[53]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[4].questions[1].statements[2]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[39]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[54]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[4].questions[1].statements[3]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[40]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[55]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[4].questions[1].statements[4]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[41]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[56]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[4].questions[1].statements[5]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[42]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[57]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[4].questions[1].statements[6]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[43]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[58]}</p>
                    </div>
                  </div>
                }

              </div>
                <div class="flex-grid-result-question" align="start">
                  <div class="col-flex32-result" >
                    <p className="title"  align="start">{this.state.posts[4].questions[2].questionData}</p>
                  </div>
                </div>
                <div>
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[4].questions[2].statements[0]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[44]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[59]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[4].questions[2].statements[1]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[45]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[60]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[4].questions[2].statements[2]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[46]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[61]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[4].questions[2].statements[3]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[47]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[62]}</p>
                    </div>
                  </div>
                }
                {
                  <div class="flex-grid-result-white-statement" align="center">
                    <div class="col-flex-result" >
                      <p className="bodyResultText"  align="start">{this.state.posts[4].questions[2].statements[4]}</p>
                    </div>
                    <div class="col-flex-result-button" >
                      <ColorBox color={this.results[48]}/>
                    </div>
                    <div class="col-flex-result" align="center">
                      <p className="bodyResultText"  align="start">{this.comments[63]}</p>
                    </div>
                  </div>
                }
              </div>
            </div>
            :null}

            {/*Påverkande faktorer*/}
            <div class="flex-grid-result-category" align="start">
              <div class="col-flex-result-blue" onClick = {()=>this.changeDisplayQuestionSix()} >
                <p className="title">{"6. " + this.state.posts[5].categoryName} </p>
                <Button className="resultCategoryButton" align="start" variant="none">{this.state.textValueSix}</Button>
              </div>
            </div>
            {
              this.state.showQuestionSix?
              <div>
              <div class="flex-grid-result-question" align="center">
                <div class="col-flex32-result" >
                  <p className="title"  align="start">{this.state.posts[5].questions[0].questionData}</p>
                </div>
                <div class="col-flex-result-button" >
                  <ColorBox color={this.results[49]}/>
                </div>
                <div class="col-flex-result" align="center">
                  <p className="bodyResultText"  align="start">{this.comments[64]}</p>
                </div>
              </div>
              <div class="flex-grid-result-question" align="start">
                <div class="col-flex32-result" >
                  <p className="title"  align="start">{this.state.posts[5].questions[1].questionData}</p>
                </div>
              </div>
              <div>
              {
                <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.state.posts[5].questions[1].statements[0]}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <CheckedBox checked={this.results[50]}/>
                  </div>
                  <div class="col-flex-result" align="center">
                    <p className="bodyResultText"  align="start">{this.comments[65]}</p>
                  </div>
                </div>
              }
              {
                <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.state.posts[5].questions[1].statements[1]}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <CheckedBox checked={this.results[51]}/>
                  </div>
                  <div class="col-flex-result" align="center">
                    <p className="bodyResultText"  align="start">{this.comments[66]}</p>
                  </div>
                </div>
              }
              {
                <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.state.posts[5].questions[1].statements[2]}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <CheckedBox checked={this.results[52]}/>
                  </div>
                  <div class="col-flex-result" align="center">
                    <p className="bodyResultText"  align="start">{this.comments[67]}</p>
                  </div>
                </div>
              }
              {
                <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.state.posts[5].questions[1].statements[3]}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <CheckedBox checked={this.results[53]}/>
                  </div>
                  <div class="col-flex-result" align="center">
                    <p className="bodyResultText"  align="start">{this.comments[68]}</p>
                  </div>
                </div>
              }
              {
                <div class="flex-grid-result-white-statement" align="center">
                  <div class="col-flex-result" >
                    <p className="bodyResultText"  align="start">{this.comments[82]}</p>
                  </div>
                  <div class="col-flex-result-button" >
                    <CheckedBox checked={this.results[54]}/>
                  </div>
                  <div class="col-flex-result" align="center">
                    <p className="bodyResultText"  align="start">{this.comments[69]}</p>
                  </div>
                </div>
              }
            </div>
          </div>
          :null}

          {/*Påverkande faktorer*/}
          <div class="flex-grid-result-category" align="start">
            <div class="col-flex-result-blue" onClick = {()=>this.changeDisplayQuestionSeven()}>
              <p className="title">{"7. " + this.state.posts[6].categoryName} </p>
              <Button className="resultCategoryButton" align="start" variant="none">{this.state.textValueSeven}</Button>
            </div>
          </div>
          {
          this.state.showQuestionSeven?
          <div>
            <div class="flex-grid-result-question" align="center">
              <div class="col-flex32-result" >
                <p className="title"  align="start">{this.state.posts[6].questions[0].questionData}</p>
              </div>
              <div class="col-flex-result-button" >
                <ColorBox color={this.results[55]}/>
              </div>
              <div class="col-flex-result" align="center">
                <p className="bodyResultText"  align="start">{this.comments[70]}</p>
              </div>
            </div>
            <div class="flex-grid-result-question" align="start">
              <div class="col-flex32-result" >
                <p className="title"  align="start">{this.state.posts[6].questions[1].questionData}</p>
              </div>
            </div>

              <div class="flex-grid-result-grey-statement" align="center">
                <div class="col-flex-result-grey" >
                  <p className="bodyResultText"  align="start"><strong>Tillfrågad</strong></p>
                </div>
                <div class="col-flex-result-grey" >
                  <p className="bodyResultText"  align="start"><strong>{"Moment"}</strong></p>
                </div>
                <div class="col-flex-result-grey" align="center">
                  <p className="bodyResultText"  align="start">{"Användarkommentar"}</p>
                </div>
              </div>

              <div class="flex-grid-result-white-statement" align="center">
                <div class="col-flex-result" >
                  <p className="bodyResultText"  align="start"><strong>Person 1:</strong></p>
                </div>
                <div class="col-flex-result" >
                  <p className="bodyResultText"  align="start"><strong>{this.comments[71]}</strong></p>
                </div>
                <div class="col-flex-result" align="center">
                  <p className="bodyResultText"  align="start">{this.comments[72]}</p>
                </div>
              </div>
              <div class="flex-grid-result-white-statement" align="center">
                <div class="col-flex-result" >
                  <p className="bodyResultText"  align="start"><strong>Person 2:</strong></p>
                </div>
                <div class="col-flex-result" >
                  <p className="bodyResultText"  align="start"><strong>{this.comments[73]}</strong></p>
                </div>
                <div class="col-flex-result" align="center">
                  <p className="bodyResultText"  align="start">{this.comments[74]}</p>
                </div>
              </div>

              <div class="flex-grid-result-white-statement" align="center">
                <div class="col-flex-result" >
                  <p className="bodyResultText"  align="start"><strong>Person 3:</strong></p>
                </div>
                <div class="col-flex-result" >
                  <p className="bodyResultText"  align="start"><strong>{this.comments[75]}</strong></p>
                </div>
                <div class="col-flex-result" align="center">
                  <p className="bodyResultText"  align="start">{this.comments[76]}</p>
                </div>
              </div>

              <div class="flex-grid-result-white-statement" align="center">
                <div class="col-flex-result" >
                  <p className="bodyResultText"  align="start"><strong>Person 4:</strong></p>
                </div>
                <div class="col-flex-result" >
                  <p className="bodyResultText"  align="start"><strong>{this.comments[77]}</strong></p>
                </div>
                <div class="col-flex-result" align="center">
                  <p className="bodyResultText"  align="start">{this.comments[78]}</p>
                </div>
              </div>

              <div class="flex-grid-result-white-statement" align="center">
                <div class="col-flex-result" >
                  <p className="bodyResultText"  align="start"><strong>Person 5:</strong></p>
                </div>
                <div class="col-flex-result" >
                  <p className="bodyResultText"  align="start"><strong>{this.comments[79]}</strong></p>
                </div>
                <div class="col-flex-result" align="center">
                  <p className="bodyResultText"  align="start">{this.comments[80]}</p>
                </div>
              </div>
          </div>
      :null}
          <div class="flex-grid-result-question" align="center">
            <div class="col-flex32-result" >
              <p className="bodyResultText"  align="start">Övriga kommentarer</p>
            </div>
            <div class="col-flex32-result" >
              <p className="bodyResultText"  align="start">{this.comments[81]}</p>
            </div>
          </div>

          <div class="flex-grid-result-category" align="start">
            <div class="col-flex-result-blue" onClick = {()=>this.changeDisplayCompilation()}>
              <p className="title">{"Sammanställning av resultat: "} </p>
              <Button className="resultCategoryButton" align="start" variant="none">{this.state.textValueCompilation}</Button>
            </div>
          </div>
          {
          this.state.showCompilation?
          <div>
            <div class="flex-grid-result-question" align="center">
              <div class="col-flex32-result" >
                <p className="title"  align="start">{"Antal bedömningar som är röda (hög risk)"}</p>
              </div>
              <div class="col-flex-result-compilation-button-red" >
                <a className="title"><strong>{this.state.nrOfReds}</strong></a>
              </div>
            </div>

            <div class="flex-grid-result-question" align="center">
              <div class="col-flex32-result" >
                <p className="title"  align="start">{"Antal bedömningar som är gråa (utred vidare)"}</p>
              </div>
              <div class="col-flex-result-compilation-button-grey" >
                <a className="title"><strong>{this.state.nrOfGreys}</strong></a>
              </div>
            </div>

            <div class="flex-grid-result-question" align="center">
              <div class="col-flex32-result" >
                <p className="title" align="start">{"Antal bedömningar som är gröna (låg risk)"}</p>
              </div>
              <div class="col-flex-result-compilation-button-green" >
              <a className="title"><strong>{this.state.nrOfGreens}</strong></a>
              </div>
            </div>

          </div>
      :null}
        </div>
        );
      }
    }
  }
  export default Result;
