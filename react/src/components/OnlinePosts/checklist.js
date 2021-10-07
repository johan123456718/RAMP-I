import React, { Component } from 'react';
import './checklist.css';
import { ButtonGroup, ToggleButton, Form, ToggleButtonGroup, Button, Card } from 'react-bootstrap'
import TwoChoiceButton from './TwoChoiceButton';
import UserComment from './UserComment';
import UserComment62 from './UserComment62';
import UserCommentMoment from './UserCommentMoment';
class Checklist extends Component {
    constructor(props){
        super(props);
        this.q1 = 0;
        this.q2 = React.createRef();
        this.q3 = React.createRef();
        this.q4 = React.createRef();
        this.q5 = React.createRef();
        this.q6 = React.createRef();
        this.q7 = React.createRef();
        this.q8 = React.createRef();
        this.q9 = React.createRef();
        this.q10 = React.createRef();
        this.q11 = React.createRef();
        this.q12 = React.createRef();
        this.q13 = React.createRef();
        this.q14 = React.createRef();
        this.q15 = React.createRef();
        this.q16 = React.createRef();
        this.q17 = React.createRef();
        this.q18 = React.createRef();
        this.q19 = React.createRef();
        this.q20 = React.createRef();
        this.q21 = React.createRef();
        this.q22 = React.createRef();
        this.q23 = React.createRef();
        this.q24 = React.createRef();
        this.q25 = React.createRef();
        this.q26 = React.createRef();
        this.q27 = React.createRef();
        this.q28 = React.createRef();
        this.q29 = React.createRef();
        this.q30 = React.createRef();
        this.q31 = React.createRef();
        this.q32 = React.createRef();
        this.q33 = React.createRef();
        this.q34 = React.createRef();
        this.q35 = React.createRef();
        this.q36 = React.createRef();
        this.q37 = React.createRef();
        this.q38 = React.createRef();
        this.q39 = React.createRef();
        this.q40 = React.createRef();
        this.q41 = React.createRef();
        this.q42 = React.createRef();
        this.q43 = React.createRef();
        this.q44 = React.createRef();
        this.q45 = React.createRef();
        this.q46 = React.createRef();
        this.q47 = React.createRef();
        this.q48 = React.createRef();
        this.q49 = React.createRef();
        this.q50 = React.createRef();
        this.q51 = React.createRef();
        this.q52 = React.createRef();
        this.q53 = React.createRef();
        this.q54 = React.createRef();
        this.q55 = React.createRef();
        this.q56 = React.createRef();
        this.q57 = React.createRef();
        this.q58 = React.createRef();
        this.q59 = React.createRef();
        this.q60 = React.createRef();
        this.q61 = React.createRef();
        this.q62 = React.createRef();
        this.q63 = React.createRef();
        this.q64 = React.createRef();
        this.q65 = React.createRef();
        this.q66 = React.createRef();
        this.q67 = React.createRef();
        this.q68 = React.createRef();
        this.q69 = React.createRef();
        this.q70 = React.createRef();
        this.q71 = React.createRef();
        this.changeAnswerState.bind(this);
        this.state = {
            IncompleteSurvey : false,
            ClosedSurvey : false,
            OpenSurvey : true,
            SuccessfulSave : false,
            UUID : this.props.UUID,
            questAns: [],
            questText: [],
            error : null,
            isLoaded : false,
            posts : [],
            showQuestionOne : false,
            showQuestionTwo : false,
            showQuestionThree : false,
            showQuestionFour : false,
            showQuestionFive : false,
            showQuestionSix : false,
            showQuestionSeven : false,
            showBoxOne : false,
            showBoxTwo : false,
            showBoxThree : false,
            showBoxFour : false,
            showBoxFive : false,
            showBoxSix : false,
            showBoxSeven : false,
            textValueOne: '+',
            textValueTwo: '+',
            textValueThree: '+',
            textValueFour: '+',
            textValueFive: '+',
            textValueSix: '+',
            textValueSeven: '+',
            quest1: 0,
            answerChanged: false,
            answers: []
        };
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


    resetStates(){
      if (this.state.ClosedSurvey){
          this.setState({ClosedSurvey : false});
      }
      if (this.state.OpenSurvey){
          this.setState({OpenSurvey : false});
      }
      if (this.state.IncompleteSurvey){
          this.setState({IncompleteSurvey : false});
      }
      if (this.state.SuccessfulSave){
          this.setState({SuccessfulSave : false});
      }
    }


      saveData(){
        this.submitData();
        this.resetStates();
        this.setState({SuccessfulSave : true});
        this.setState({answerChanged : false});
        this.props.resetChanges();
      }

      componentDidMount() {
          this.setState({isLoaded: false});
              /*col-flexlects data from Springboot */
              fetch("http://localhost:8080/demo/ReactCategory",{
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
              this.getInput();
              this.getData();
              }
              this.setState({answerChanged: false});
              console.log(this.state.answerChanged);
          }

          reOpenSurvey(){
            fetch('http://localhost:8080/demo/openEntry?UUID=' + this.state.UUID,{
              method: 'GET',
              headers:{
                'Authorization': 'Bearer ' + this.props.token}
            })
            .then(
                // handle the result
                (result) => {
                  this.resetStates();
                  this.setState({OpenSurvey : true});
                },

                // Handle error
                (error) => {
                    this.setState({
                        error
                    })
                },
            )
          }

          submitData(){
            var temp = this.state.answers;
            for(var i = 0; i<83; i++){
              if(this.state.questAns[i]!== undefined){
                  temp[i].answer = this.state.questAns[i];
              }
              if(this.state.questText[i]!== undefined){
                  temp[i].userComment = this.state.questText[i];
              }
            }
              this.setState({answers: temp});
            fetch('http://localhost:8080/demo/addUserAnswers?ans=' + encodeURI(JSON.stringify(this.state.answers)),{
              method: 'POST',
              headers:{
                'Authorization': 'Bearer ' + this.props.token}
            })

            .then(
                // handle the result
                (result) => {

                },

                // Handle error
                (error) => {
                    this.setState({
                        error
                    })
                },
            )

          }



          getInput(){
            fetch('http://localhost:8080/demo/InputData?UUID=' + this.state.UUID,{
              method: 'GET',
              headers:{
                'Authorization': 'Bearer ' + this.props.token}
            })
            .then( response => response.json())
            .then(
                // handle the result
                (result) => {
                  if (result !== null && result.is_completed === 1){
                    this.resetStates();
                    this.setState({ClosedSurvey : true});
                  } else{
                    this.resetStates();
                    this.setState({OpenSurvey : true});
                  }
                },

                // Handle error
                (error) => {
                    this.setState({
                        error
                    })
                },
            )
          }


          getData(){
            fetch('http://localhost:8080/demo/getUserAnswers?UUID=' + this.state.UUID,{
              method: 'GET',
              headers:{
                'Authorization': 'Bearer ' + this.props.token}
            })
            .then( response => response.json())
            .then(
                // handle the result
                (result) => {
                    this.setState({
                        answers: result
                    });
                    if(result.length !== 0){
                    var tempAns = [];
                    var tempText = [];
                    for(var i = 0; i<83; i++){
                          tempAns[i] = this.state.answers[i].answer;
                          tempText[i] = this.state.answers[i].userComment;
                    }

                    this.setState({questAns: tempAns});
                    this.setState({questText: tempText});
                  }
                },

                // Handle error
                (error) => {
                    this.setState({
                        error
                    })
                },
            )
          }

          completeEntry(){
            this.submitData();
            var lock = 1;
            for(var i = 0; i<12 ;i++){
              if(this.state.questAns[i] === 0){
                lock =0;
                break;
              }
            }
            if (this.state.questAns[8] === 1 || this.state.questAns[9] === 1 || this.state.questAns[10] === 1 || this.state.questAns[11] === 1){
              if (this.state.questAns[12] === 0 || this.state.questAns[13] === 0){
                lock = 0;
              }
            }
            if (this.state.questAns[14] === 0){
              lock = 0;
            }
            if (this.state.questAns[14] === 1){
              for (var i = 15;i<33;i++){
                if (this.state.questAns[i] === 0){
                  lock = 0;
                  break;
                }
              }
            }
            if (this.state.questAns[33] === 0){
              lock = 0;
            }
            if (this.state.questAns[33] === 1){
              for(var i=34;i<45;i++){
                if (this.state.questAns[i] === 0){
                  lock = 0;
                  break;
                }
              }
            }
            for(var i=45;i<64;i++){
              if(this.state.questAns[i] === 0){
                lock = 0;
                break;
              }
            }
            if (this.state.questAns[64] === 0){
              lock = 0;
            }
            if (this.state.questAns[64] === 1){
              if (this.state.questAns[65] !== 1 && this.state.questAns[66] !== 1 && this.state.questAns[67] !== 1 && this.state.questAns[68] !== 1 && this.state.questAns[69] !== 1){
                lock = 0;
              }
            }
            if (this.state.questAns[70] === 0){
              lock = 0;
            }
            if (lock === 0){
              this.resetStates();
              this.setState({IncompleteSurvey : true});
            }
            else{
              this.completeSurvey();

            }
            this.setState({answerChanged : false});
            this.props.resetChanges();
          }

          completeSurvey(){
            fetch('http://localhost:8080/demo/completeEntry?UUID=' + this.state.UUID,{
              method: 'GET',
              headers:{
                'Authorization': 'Bearer ' + this.props.token}
            })
            .then(
                // handle the result
                (result) => {
                  this.resetStates();
                  this.setState({ClosedSurvey : true});
                },

                // Handle error
                (error) => {
                    this.setState({
                        error
                    })
                },
            )
          }

      changeAnswerState (ans, id){
        var a = this.state.questAns;
        a[id]=ans;
        this.setState({questAns: a, answerChanged: true});
        this.props.updateChanges();
      }

      changeCommentState (text, id){
        var t = this.state.questText;
          console.log(text);
          t[id]=text;
          this.setState({questText: t});
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

            <div class="flex-grid-grey-statement">
              <div class="col-flex-grey">
              {this.state.showQuestionOne || this.state.showQuestionTwo || this.state.showQuestionThree || this.state.showQuestionFour ||this.state.showQuestionFive ||this.state.showQuestionSix ||this.state.showQuestionSeven?
                <div>
                  <p className = "statementText" align="start"><strong>{"Klicka i Ja eller nej för de frågor som är relevanta för denna bedömning"}</strong></p>
                </div>
              :<div>
                <p className = "statementText" align="start"><strong>{"Klicka på någon av kategorierna för att öppna."}</strong></p>
              </div>}
              </div>
              <div class="col-flex-grey-button" >
              </div>
              <div class="col-flex-grey">
              {this.state.showQuestionOne || this.state.showQuestionTwo || this.state.showQuestionThree || this.state.showQuestionFour ||this.state.showQuestionFive ||this.state.showQuestionSix ||this.state.showQuestionSeven?
                <div>
                  <p className = "statementText" align="start"><strong>{"Användarkommentarer"}</strong></p>
                </div>
              :null}
              </div>
            </div>


            {/*Arbetsställningar*/}
              <div class="flex-grid-category" align="start">
                <div class="col-flex-blue" onClick ={()=>this.changeDisplayQuestionOne()}>
                  <p className = "questionText">{"1. " + posts[0].categoryName}</p>
                  <Button className = "categoryButton" align = "start" variant="none">{this.state.textValueOne}</Button>
                </div>
              </div>
{ this.state.showQuestionOne?
  <div>
              {/*1.1*/}
              <div class="flex-grid-question">
                <div class="col-flex32" align="start">
                    <p className = "questionText" align="start">{posts[0].questions[0].questionData}</p>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[0].questions[0].statements[0]}</p>
                </div>
                <div class="col-flex-button" >
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={0} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[0]}/>
                </div>
                <div class="col-flex">
                  <UserComment className="testcomment" id={0} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[0]} />
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                    <p className = "statementText" align="start">{posts[0].questions[0].statements[1]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={1} changeAnswerState={(e,f) => this.changeAnswerState(e,f)} answer={this.state.questAns[1]}/>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={1} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[1]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                    <p className = "statementText" align="start">{posts[0].questions[0].statements[2]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={2} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[2]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={2} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[2]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                    <p className = "statementText" align="start">{posts[0].questions[0].statements[3]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={3} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[3]}/>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={3} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[3]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                    <p className = "statementText" align="start">{posts[0].questions[0].statements[4]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={4} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[4]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={4} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[4]}/>
                </div>
              </div>

            {/*Arbetsställningar 1.2*/}
              <div class="flex-grid-question">
                <div class="col-flex32" align="start">
                    <p className = "questionText" align="start">{posts[0].questions[1].questionData}</p>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[0].questions[1].statements[0]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={5} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[5]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={5} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[5]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                    <p className = "statementText" align="start">{posts[0].questions[1].statements[1]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={6} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[6]}/>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={6} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[6]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                    <p className = "statementText" align="start">{posts[0].questions[1].statements[2]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={7} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[7]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={7} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[7]}/>
                </div>
              </div>
              </div>
:null}

              {/*Arbetsberättelse och repetitivt arbete*/}
              <div class="flex-grid-category" align="start">
                <div class="col-flex-blue" onClick ={()=>this.changeDisplayQuestionTwo()}>
                  <p className = "questionText">{"2. " + posts[1].categoryName}</p>
                  <Button className = "categoryButton" align = "start" variant="none">{this.state.textValueTwo}</Button>
                </div>
              </div>
{ this.state.showQuestionTwo?
  <div>
              {/*2.1*/}
              <div class="flex-grid-question">
                <div class="col-flex32" align="start">
                    <p className = "questionText" align="start">{posts[1].questions[0].questionData}</p>
                </div>
                <div class="col-flex32">
                    <UserComment id={8} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[8]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[1].questions[0].statements[0]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={8} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[8]}/>
                </div>
                <div class="col-flex">
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                    <p className = "statementText" align="start">{posts[1].questions[0].statements[1]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={9} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[9]}/>
                </div>
                <div class="col-flex-grey">
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                    <p className = "statementText" align="start">{posts[1].questions[0].statements[2]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={10} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[10]}/>                </div>
                <div class="col-flex">
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                    <p className = "statementText" align="start">{posts[1].questions[0].statements[3]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={11} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[11]}/>                </div>
                <div class="col-flex-grey">
                </div>
              </div>
      {this.state.questAns[8]!==2 || this.state.questAns[9]!==2 || this.state.questAns[10]!==2 || this.state.questAns[11]!==2?
        <div>
              {/*2.2*/}
              <div class="flex-grid-question">
                <div class="col-flex32" align="start">
                    <p className = "questionText" align="start">{posts[1].questions[1].questionData}</p>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[1].questions[1].statements[0]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={12} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[12]}/>
                </div>
                <div class="col-flex">
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                    <p className = "statementText" align="start">{posts[1].questions[1].statements[1]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={13} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[13]}/>
                </div>
                <div class="col-flex-grey">
                </div>
              </div>
            </div>
          :null}
      </div>
:null}

              {/*Lyftarbete*/}
              <div class="flex-grid-category" align="start">
                <div class="col-flex-blue" onClick ={()=>this.changeDisplayQuestionThree()}>
                  <p className = "questionText">{"3. " + posts[2].categoryName}</p>
                  <Button className = "categoryButton" align = "start" variant="none">{this.state.textValueThree}</Button>
                </div>
              </div>
{ this.state.showQuestionThree?
  <div>
              {/*3.1*/}
              <div class="flex-grid-question">
                <div class="col-flex32" align="start">
                    <p className = "questionText" align="start">{posts[2].questions[0].questionData}</p>
                </div>
                <div class="col-flex32-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={14} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[14]}/>
                </div>
                <div class="col-flex32">
                </div>
              </div>
{this.state.questAns[14]!==2?
  <div>
              {/*3.2*/}
              <div class="flex-grid-question">
                <div class="col-flex32" align="start">
                    <p className = "questionText" align="start">{posts[2].questions[1].questionData}</p>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                  <p className = "statementText" align="start">{posts[2].questions[1].statements[0]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={15} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[15]}/>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={15} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[15]}/>
                </div>
              </div>
{this.state.questAns[15]!==2?
  <div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                    <p className = "statementText" align="start">{posts[2].questions[1].statements[1]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={16} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[16]}/>
                </div>
                <div class="col-flex-grey">
                </div>
                </div>
            </div>
          :null}

              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[2].questions[1].statements[2]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={17} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[17]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={17} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[17]}/>
                </div>
              </div>
  {this.state.questAns[17]!==2?
    <div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                    <p className = "statementText" align="start">{posts[2].questions[1].statements[3]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={18} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[18]}/>
                </div>
                <div class="col-flex">
                </div>
              </div>
        </div>
        :null}
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                  <p className = "statementText" align="start">{posts[2].questions[1].statements[4]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={19} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[19]}/>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={19} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[19]}/>
                </div>
              </div>
      {this.state.questAns[19]!==2?
        <div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                    <p className = "statementText" align="start">{posts[2].questions[1].statements[5]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={20} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[20]}/>
                </div>
                <div class="col-flex-grey">
                </div>
              </div>
            </div>
          :null}
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[2].questions[1].statements[6]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={21} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[21]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={21} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[21]}/>
                </div>
              </div>
        {this.state.questAns[21]!==2?
          <div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                    <p className = "statementText" align="start">{posts[2].questions[1].statements[7]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={22} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[22]}/>
                </div>
                <div class="col-flex">
                </div>
              </div>
          </div>
          :null}
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                    <p className = "statementText" align="start">{posts[2].questions[1].statements[8]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={23} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[23]}/>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={23} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[23]}/>
                </div>
              </div>


              {/*3.3*/}
              <div class="flex-grid-question">
                <div class="col-flex32" align="start">
                    <p className = "questionText" align="start">{posts[2].questions[2].questionData}</p>
                </div>
              </div>

              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[2].questions[2].statements[0]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={24} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[24]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={24} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[24]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                    <p className = "statementText" align="start">{posts[2].questions[2].statements[1]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={25} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[25]}/>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={25} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[25]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[2].questions[2].statements[2]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={26} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[26]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={26} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[26]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                    <p className = "statementText" align="start">{posts[2].questions[2].statements[3]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={27} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[27]}/>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={27} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[27]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[2].questions[2].statements[4]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={28} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[28]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={28} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[28]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                    <p className = "statementText" align="start">{posts[2].questions[2].statements[5]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={29} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[29]}/>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={29} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[29]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[2].questions[2].statements[6]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={30} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[30]}/>
                </div>
                <div class="col-flex">
                  <UserComment id={30} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[30]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                    <p className = "statementText" align="start">{posts[2].questions[2].statements[7]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={31} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[31]}/>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={31} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[31]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                    <p className = "statementText" align="start">{posts[2].questions[2].statements[8]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={32} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[32]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={32} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[32]}/>
                </div>
              </div>
            </div>
          :null}
        </div>
      :null}

              {/*Skjuta- och dra-arbete*/}
                <div class="flex-grid-category" align="start">
                  <div class="col-flex-blue" onClick ={()=>this.changeDisplayQuestionFour()}>
                      <p className = "questionText">{"4. " + posts[3].categoryName}
                      </p>
                      <Button className = "categoryButton" align = "start" variant="none" >{this.state.textValueFour}</Button>
                  </div>
                </div>
{ this.state.showQuestionFour?
  <div>
              {/*4.1*/}
              <div class="flex-grid-question">
                <div class="col-flex32" align="start">
                    <p className = "questionText" align="start">{posts[3].questions[0].questionData}</p>
                </div>
                <div class="col-flex32-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={33} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[33]}/>
                </div>
                <div class="col-flex32">
                </div>
              </div>
    {this.state.questAns[33]!==2?
      <div>
              {/*4.2*/}
              <div class="flex-grid-question">
                <div class="col-flex32" align="start">
                    <p className = "questionText" align="start">{posts[3].questions[1].questionData}</p>
                </div>
              </div>

              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[3].questions[1].statements[0]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={34} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[34]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={34} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[34]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                    <p className = "statementText" align="start">{posts[3].questions[1].statements[1]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={35} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[35]}/>
                </div>
                <div class="col-flex-grey">
                      <UserComment id={35} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[35]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[3].questions[1].statements[2]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={36} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[36]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={1} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[1]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                    <p className = "statementText" align="start">{posts[3].questions[1].statements[3]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={37} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[37]}/>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={37} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[37]}/>
                </div>
              </div>


              {/*4.3*/}
              <div class="flex-grid-question">
                <div class="col-flex32" align="start">
                    <p className = "questionText" align="start">{posts[3].questions[2].questionData}</p>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[3].questions[2].statements[0]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={38} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[38]}/>
                </div>
                <div class="col-flex">
                      <UserComment id={38} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[38]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                    <p className = "statementText" align="start">{posts[3].questions[2].statements[1]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={39} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[39]}/>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={39} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[39]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[3].questions[2].statements[2]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={40} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[40]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={40} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[40]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                    <p className = "statementText" align="start">{posts[3].questions[2].statements[3]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={41} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[41]}/>
                </div>
                <div class="col-flex-grey">
                      <UserComment id={41} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[41]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[3].questions[2].statements[4]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={42} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[42]}/>
                </div>
                <div class="col-flex">
                      <UserComment id={42} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[42]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                    <p className = "statementText" align="start">{posts[3].questions[2].statements[5]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={43} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[43]}/>
                </div>
                <div class="col-flex-grey">
                      <UserComment id={43} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[43]}/>
                </div>
              </div>

              {/*4.4*/}
              <div class="flex-grid-question">
                <div class="col-flex32" align="start">
                    <p className = "questionText" align="start">{posts[3].questions[3].questionData}</p>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[3].questions[3].statements[0]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={44} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[44]}/>
                </div>
                <div class="col-flex">
                      <UserComment id={44} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[44]}/>
                </div>
              </div>
            </div>
          :null}
        </div>
:null}

              {/*Påverkande faktorer*/}
                <div class="flex-grid-category" align="start">
                  <div class="col-flex-blue" onClick ={()=>this.changeDisplayQuestionFive()}>
                      <p className = "questionText">{"5. " + posts[4].categoryName}</p>
                      <Button className = "categoryButton" align = "start" variant="none" >{this.state.textValueFive}</Button>
                  </div>
                </div>
{ this.state.showQuestionFive?
  <div>
              {/*5.1*/}
              <div class="flex-grid-question">
                <div class="col-flex32" align="start">
                    <p className = "questionText" align="start">{posts[4].questions[0].questionData}</p>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[4].questions[0].statements[0]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={45} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[45]}/>
                </div>
                <div class="col-flex">
                      <UserComment id={45} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[45]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                  <p className = "statementText" align="start">{posts[4].questions[0].statements[1]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={46} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[46]}/>
                </div>
                <div class="col-flex-grey">
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[4].questions[0].statements[2]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={47} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[47]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={47} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[47]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                  <p className = "statementText" align="start">{posts[4].questions[0].statements[3]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={48} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[48]}/>
                </div>
                <div class="col-flex-grey">
                      <UserComment id={48} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[48]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[4].questions[0].statements[4]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={49} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[49]}/>
                </div>
                <div class="col-flex">
                      <UserComment id={49} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[49]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                  <p className = "statementText" align="start">{posts[4].questions[0].statements[5]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={50} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[50]}/>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={50} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[50]}/>
                </div>
              </div>

              {/*5.2*/}
              <div class="flex-grid-question">
                <div class="col-flex32" align="start">
                    <p className = "questionText" align="start">{posts[4].questions[1].questionData}</p>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[4].questions[1].statements[0]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={51} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[51]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={51} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[51]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                  <p className = "statementText" align="start">{posts[4].questions[1].statements[1]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={52} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[52]}/>
                </div>
                <div class="col-flex-grey">
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[4].questions[1].statements[2]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={53} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[53]}/>
                </div>
                <div class="col-flex">
                      <UserComment id={53} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[53]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                  <p className = "statementText" align="start">{posts[4].questions[1].statements[3]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={54} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[54]}/>
                </div>
                <div class="col-flex-grey">
                      <UserComment id={54} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[54]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[4].questions[1].statements[4]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={55} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[55]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={55} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[55]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                  <p className = "statementText" align="start">{posts[4].questions[1].statements[5]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={56} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[56]}/>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={56} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[56]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[4].questions[1].statements[6]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={57} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[57]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={57} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[57]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                  <p className = "statementText" align="start">{posts[4].questions[1].statements[7]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={58} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[58]}/>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={58} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[58]}/>
                </div>
              </div>

              {/*5.2*/}
              <div class="flex-grid-question">
                <div class="col-flex32" align="start">
                    <p className = "questionText" align="start">{posts[4].questions[2].questionData}</p>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[4].questions[2].statements[0]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={59} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[59]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={59} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[59]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                  <p className = "statementText" align="start">{posts[4].questions[2].statements[1]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={60} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[60]}/>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={60} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[60]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[4].questions[2].statements[2]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={61} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[61]}/>
                </div>
                <div class="col-flex">
                      <UserComment id={61} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[61]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                  <p className = "statementText" align="start">{posts[4].questions[2].statements[3]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={62} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[62]}/>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={62} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[62]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[4].questions[2].statements[4]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={63} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[63]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={63} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[63]}/>
                </div>
              </div>

</div>
:null}

              {/*Rapportering om fysiskt påfrestande arbete*/}
                <div class="flex-grid-category" align="start">
                  <div class="col-flex-blue" onClick ={()=>this.changeDisplayQuestionSix()}>
                      <p className = "questionText">{"6. " + posts[5].categoryName}
                      </p>
                      <Button className = "categoryButton" align = "start" variant="none" >{this.state.textValueSix}</Button>
                  </div>
                </div>
{this.state.showQuestionSix?
  <div>
              {/*6.1*/}
              <div class="flex-grid-question">
                <div class="col-flex32" align="start">
                    <p className = "questionText" align="start">{posts[5].questions[0].questionData}</p>
                </div>
                <div class="col-flex32-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={64} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[64]}/>
                </div>
                <div class="col-flex32">
                    <UserComment id={64} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[64]}/>
                </div>
              </div>
        {this.state.questAns[64]!==2?
          <div>
              {/*6.2*/}
              <div class="flex-grid-question">
                <div class="col-flex32" align="start">
                    <p className = "questionText" align="start">{posts[5].questions[1].questionData}</p>
                </div>
              </div>

              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[5].questions[1].statements[0]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={65} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[65]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={65} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[65]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                  <p className = "statementText" align="start">{posts[5].questions[1].statements[1]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={66} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[66]}/>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={66} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[66]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                  <p className = "statementText" align="start">{posts[5].questions[1].statements[2]}</p>
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={67} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[67]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={67} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[67]}/>
                </div>
              </div>
              <div class="flex-grid-grey-statement">
                <div class="col-flex-grey">
                  <p className = "statementText" align="start">{posts[5].questions[1].statements[3]}</p>
                </div>
                <div class="col-flex-grey-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={68} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[68]}/>
                </div>
                <div class="col-flex-grey">
                      <UserComment id={68} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[68]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
                <div class="col-flex">
                {this.state.questAns[69]!==1?
                  <div>
                  <p className = "statementText" align="start">{posts[5].questions[1].statements[4]}</p>
                  </div>
                :null}
                {this.state.questAns[69]===1?
                  <div>
                  <UserComment62 id={82} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[82]}/>
                  </div>
                :null}
                </div>
                <div class="col-flex-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={69} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[69]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={69} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[69]}/>
                </div>
              </div>
            </div>
          :null}
</div>
:null}

              {/*Upplevt fysiskt obehag fråga fem personer som arbetar med detta arbetsmoment*/}
                <div class="flex-grid-category" align="start">
                  <div class="col-flex-blue" onClick ={()=>this.changeDisplayQuestionSeven()}>
                      <p className = "questionText">{"7. " + posts[6].categoryName}
                      </p>
                      <Button className = "categoryButton" align = "start" variant="none">{this.state.textValueSeven}</Button>
                  </div>
                </div>
{
  this.state.showQuestionSeven?
            <div>
              {/*7.1*/}
              <div class="flex-grid-question">
                <div class="col-flex32" align="start">
                    <p className = "questionText" align="start">{posts[6].questions[0].questionData}</p>
                </div>
                <div class="col-flex32-button">
                    <TwoChoiceButton val1="Ja" val2= "Nej" id={70} changeAnswerState={(e, f) => this.changeAnswerState(e, f)} answer={this.state.questAns[70]}/>
                </div>
                <div class="col-flex32">
                    <UserComment id={70} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[70]}/>
                </div>
              </div>
      {this.state.questAns[70]!==2?
        <div>
              {/*7.2*/}
              <div class="flex-grid-question">
                <div class="col-flex32" align="start">
                    <p className = "questionText" align="start">{posts[6].questions[1].questionData + " Fråga fem personer som arbetar med detta arbetsmoment."}</p>
                </div>
              </div>

              <div class="flex-grid-grey-statement" align="center">
                <div class="col-flex-grey" >
                  <p className="questionText"  align="start">Tillfrågad</p>
                </div>
                <div class="col-flex-grey" >
                  <p className="questionText"  align="start">{"Moment"}</p>
                </div>
                <div class="col-flex-grey" align="center">
                  <p className="questionText"  align="start">{"Användarkommentar"}</p>
                </div>
              </div>

              <div class="flex-grid-white-statement">
              <div class="col-flex">
                <p className = "questionText" align="start">{"Person 1:"}</p>
              </div>
                <div class="col-flex">
                    <UserCommentMoment id={71} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[71]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={72} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[72]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
              <div class="col-flex">
                <p className = "questionText" align="start">{"Person 2:"}</p>
              </div>
                <div class="col-flex">
                    <UserCommentMoment id={73} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[73]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={74} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[74]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
              <div class="col-flex">
                <p className = "questionText" align="start">{"Person 3:"}</p>
              </div>
                <div class="col-flex">
                    <UserCommentMoment id={75} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[75]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={76} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[76]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
              <div class="col-flex">
                <p className = "questionText" align="start">{"Person 4:"}</p>
              </div>
                <div class="col-flex">
                  <UserCommentMoment id={77} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[77]}/>
                </div>
                <div class="col-flex">
                  <UserComment id={78} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[78]}/>
                </div>
              </div>
              <div class="flex-grid-white-statement">
              <div class="col-flex">
                <p className = "questionText" align="start">{"Person 5:"}</p>
              </div>
                <div class="col-flex">
                    <UserCommentMoment id={79} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[79]}/>
                </div>
                <div class="col-flex">
                    <UserComment id={80} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[80]}/>
                </div>
              </div>
            </div>
          :null}
      </div>
:null}

              {/*Övriga kommentarer (nedan):*/}
              <div class="flex-grid-question-bottom">
                <div class="col-flex-grey" align="start">
                    <p className = "questionText" align="start">{"Övriga kommentarer"}</p>
                </div>
                <div class="col-flex-grey">
                    <UserComment id={81} changeCommentState={(e, f) => this.changeCommentState(e, f)} textVal ={this.state.questText[81]}/>
                </div>
              </div>

              <div class = "flex-grid-footer">
                <Card className = "footer" variant="none">
                {
                  this.state.SuccessfulSave?
                  <div class="alert alert-success" className="checklist-alert-green" role="alert">
                  Sparad!
                    <ButtonGroup className="checklist-button-grp-single">
                      <Button className="mobileButtonDELUX" align = "start" variant="choiceButton"  onClick ={()=>this.setState({SuccessfulSave : false, OpenSurvey : true})}>Ok</Button>
                    </ButtonGroup>
                  </div>
                  :null
                }
                {
                  this.state.IncompleteSurvey?
                  <div class="alert alert-danger" className="checklist-alert-red" role="alert">
                  Checklista ej fullständig, avsluta ändå?
                    <ButtonGroup className="checklist-button-grp-single">
                      <Button className="mobileButtonDELUX"  variant="choiceButton"  onClick ={()=>this.completeSurvey()}>Ja</Button>
                      <Button className="mobileButtonDELUX" variant="choiceButton"  onClick ={()=>this.setState({IncompleteSurvey : false, OpenSurvey : true})}>Nej</Button>
                    </ButtonGroup>
                  </div>
                  :null
                }
                {
                  this.state.OpenSurvey?
                  <div class="flex-grid-footer">
                    <Card.Body className="checklist-card-body">
                      <ButtonGroup className="checklist-button-grp">
                        <Button className="mobileButton" variant="choiceButton" onClick = {()=>this.saveData()}>
                          <a className="buttonText">{"Spara"}</a>
                        </Button>
                        <Button className="mobileButton" variant="choiceButton" onClick = {()=>this.completeEntry()}>
                          <a className="buttonText">{"Lås checklista"}</a>
                        </Button>
                      </ButtonGroup>
                    </Card.Body>
                  </div>
                  :null
                }
                {
                  this.state.ClosedSurvey?
                  <div class="alert alert-secondary" className="checklist-alert" role="alert">
                  Denna är låst, vill du låsa upp den?
                    <ButtonGroup className="checklist-button-grp-single">
                      <Button className="mobileButton" variant="choiceButton" onClick = {()=>this.reOpenSurvey()}>
                        <a className="buttonText">{"Ja"}</a>
                      </Button>
                    </ButtonGroup>
                  </div>
                  :null
                }

                </Card>

            </div>
      </div>)}
    }
  }

  export default Checklist;
