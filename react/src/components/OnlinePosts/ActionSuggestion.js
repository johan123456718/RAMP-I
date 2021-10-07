import React, {Image, Component } from 'react';
import {Button} from 'react-bootstrap'
import './ActionSuggestion.css';

class ActionSuggestion extends Component {
    constructor(props){
        super(props);
        this.evaluation_date = "";
        this.eval_refers_to = "";
        this.work_task ="";
        this.work_station = "";
        this.work_department ="";
        this.work_location = "";
        this.country = "";
        this.state = {
            UUID : this.props.UUID,
            chapTwoRed : false,
            chapThreeRed : false,
            chapFourRed : false,
            chapFiveRed : false,
            error : null,
            isLoaded : false,
            info : null,
            page1 : null,
            suggestionTable : [],
            showTwo: false,
            showThree: false,
            showFour: false,
            showFive: false,
            tableIsLoaded: false,
            textValueOne: '+',
            textValueTwo: '+',
            textValueThree: '+',
            textValueFour: '+',
            textValueFive: '+',
        };
    }

    componentDidMount() {
      this.checkReds();
      fetch("http://localhost:8080/demo/SuggestionCategory",{
        method: 'GET',
        headers:{
          'Authorization': 'Bearer ' + this.props.token}
      })
      .then( response => response.json())
      .then(
          // handle the result
          (result) => {
              this.setState({
                  tableIsLoaded : true,
                  suggestionTable : result
              });
          },

          // Handle error
          (error) => {
              this.setState({
                  tableIsLoaded: true,
                  error
              })
          },
      )

            /*Collects data from Springboot */
            fetch("http://localhost:8080/demo/textFile?Id=7",{
              method: 'GET',
              headers:{
                'Authorization': 'Bearer ' + this.props.token}
            })
            .then( response => response.json())
            .then(
                // handle the result
                (infoResult) => {
                    this.setState({
                        isLoaded : true,
                        info : infoResult
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

            fetch("http://localhost:8080/demo/textFile?Id=8",{
              method: 'GET',
              headers:{
                'Authorization': 'Bearer ' + this.props.token}
            })
            .then( response => response.json())
            .then(
                // handle the result
                (pageResult) => {
                    this.setState({
                        isLoaded : true,
                        page1 : pageResult
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
            if(this.state.UUID !== "UUID"){
                this.updateData();
              }
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
                });
                if (result === null){
                  return
                }
                else{
                this.evaluation_date = result.evaluation_date;
                this.work_task = result.work_task;
                this.work_station = result.work_station;
                this.work_department = result.work_department;
                this.work_location = result.work_location;
                this.country = result.country;
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

    checkReds(){
          fetch('http://localhost:8080/demo/createResult?UUID=' + this.state.UUID,{
            method: 'GET',
            headers:{
              'Authorization': 'Bearer ' + this.props.token}
          })
          .then( response => response.json())
          .then(
            // handle the result
            (result) => {
                if (result === null){
                  return
                }
                else{
                  if (result.chapTwoRed === 1){
                    this.setState({chapTwoRed : true});
                  }
                  if (result.chapThreeRed === 1){
                    this.setState({chapThreeRed : true});
                  }
                  if (result.chapFourRed === 1){
                    this.setState({chapFourRed : true});
                  }
                  if (result.chapFiveRed === 1){
                    this.setState({chapFiveRed : true});
                  }
              }
            },
            // Handle error
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
                console.log("ERROR");
            },
        )
      }

  changeDisplayShowFour(){
      this.changeEvalThree();
      this.setState({
        showFour: !this.state.showFour
      })
    }
  changeDisplayShowTwo(){
      this.changeEvalOne();
      this.setState({
        showTwo: !this.state.showTwo
      })
    }

  changeDisplayShowThree(){
          this.changeEvalTwo();
          this.setState({
            showThree: !this.state.showThree
          })
        }

  changeDisplayShowFive(){
          this.changeEvalFour();
          this.setState({
            showFive: !this.state.showFive
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
      render(){
        /*Error checker */

        if(this.state.error){
            return <div>Du behöver vara inloggad för åtkomst till denna sida</div>
        }if (!this.state.isLoaded || !this.state.tableIsLoaded) {
            return <div>Loading ...</div>
        }else if(this.state.info === null || this.state.page1 === null || this.state.suggestionTable === []){
          return(<p> Du behöver vara inloggad för åtkomst till denna sida </p>
          );
        }else{
          return(
          <div class="container-fluid p-0">
          <div class="flex-grid-action-info" align="start">
              <div class="col-flex-action-info">
                <p><strong>{"Datum: "} </strong>{this.evaluation_date}</p>
              </div>
          </div>

          <div class="flex-grid-action-info" align="start">
            <div class="col-flex-action-info">
              <p><strong>{"Arbete/Arbetsuppgift: "} </strong>{this.work_task}</p>

            </div>
          </div>

          <div class="flex-grid-action-info" align="start">
            <div class="col-flex-action-info">
              <p><strong>{"Arbetsstation/Arbetstagarens belastning: "}</strong>{this.work_station}</p>

            </div>
            <div class="col-flex-action-info">
              <p><strong>{"Avdelning: "} </strong>{this.work_department}</p>

            </div>
          </div>

          <div class="flex-grid-action-info" align="start">
            <div class="col-flex-action-info">
              <p><strong>{"Anläggning/Arbetsplats: "} </strong> {this.work_location}</p>
            </div>

            <div class="col-flex-action-info">
              <p><strong>{"Land: "}</strong>{this.country}</p>
            </div>
          </div>

            <div class="flex-grid-action-intro" align="start">
              <div class="col-flex-action-intro" >
                <p className="introBody"  align="start">{this.state.info.body_text}</p>
              </div>
            </div>
            <div class="flex-grid-action-body" align="start">
              <div class="col-flex-action-body" align="start">
                <p className="titleSuggestion" align="start">{this.state.page1.body_text}</p>
              </div>
            </div>

            <div class="flex-grid-action-category-tootTip">
              <div class="col-flex-action-category">
              {this.state.showTwo || this.state.showThree || this.state.showFour || this.state.showFive?
                <div>
                  <p className = "statementText" align="start"><strong>{""}</strong></p>
                </div>
              :
                <div>
                  <p className = "statementText" align="start"><strong>{"Klicka på någon av kategorierna för att öppna."}</strong></p>
                </div>
              }</div>
            </div>

            {/*Arbetsrörelser och repetitivt arbete*/}
            <div class="flex-grid-action-category" align="start">
              <div class="col-flex-action-category" onClick = {()=>this.changeDisplayShowTwo()}>
                <p className="actionTitle" >{this.state.suggestionTable[0].suggestionCategoryTitle} </p>
                <Button  className = "actionCategoryButton" align = "start" variant="none" >{this.state.textValueOne}</Button>
              </div>
            </div>
            {
              this.state.showTwo?
              <div>
                <div class="flex-grid-action-categoryStartWindow" align="start">
                  <div class="col-flex-action-categoryStartWindowLeft">
                    <p className="actionTitle"  align="start">{"Typ av åtgärd"}</p>
                  </div>
                  <div class="col-flex-action-categoryStartWindowRight">
                    <p className="actionTitleRight"  align="start">{"Exempel på åtgärdsförslag"}</p>
                  </div>
                </div>
                <div>
                {
                  this.state.chapTwoRed?
                  this.state.suggestionTable[0].suggestionQuestions[0].texts.map((text)=>
                  <div class="flex-grid-action-categoryMiddleWindow" align="start">
                    <div class="col-flex-action-categoryMiddleWindowLeft">
                      <p className="bodyActionText"  align="start">{text.type}</p>
                    </div>
                    <div class="col-flex-action-categoryMiddleWindowRight">
                      <p className="bodyActionText"  align="start">{text.data}</p>
                    </div>
                  </div>
                )
                :null
                }
              </div>
            </div>
          :null}

          {/*Arbetsrörelser och repetitivt arbete*/}
          <div class="flex-grid-action-category" align="start">
            <div class="col-flex-action-category" onClick = {()=>this.changeDisplayShowThree()}>
                <p className="actionTitle">{this.state.suggestionTable[1].suggestionCategoryTitle} </p>
                <Button  className = "actionCategoryButton" align = "start" variant="none">{this.state.textValueTwo}</Button>

            </div>
          </div>
          {
            this.state.showThree?
            <div>
            <div class="flex-grid-action-categoryStartWindow" align="start">
              <div class="col-flex-action-categoryStartWindowRight">
                <p className="actionTitle"  align="start">{this.state.suggestionTable[1].suggestionQuestions[0].suggestionQuestionTitle}</p>
              </div>
            </div>
              <div class="flex-grid-action-categoryStartWindow" align="start">
                <div class="col-flex-action-categoryStartWindowLeft" >
                  <p className="actionTitle"  align="start">{"Typ av åtgärd"}</p>
                </div>
                <div class="col-flex-action-categoryStartWindowRight" >
                  <p className="actionTitleRight"  align="start">{"Exempel på åtgärdsförslag"}</p>
                </div>
              </div>
              <div>
              {
                this.state.chapThreeRed?
                this.state.suggestionTable[1].suggestionQuestions[0].texts.map((text)=>
                <div class="flex-grid-action-categoryMiddleWindow" align="start">
                  <div class="col-flex-action-categoryMiddleWindowLeft">
                    <p className="bodyActionText"  align="start">{text.type}</p>
                  </div>
                  <div class="col-flex-action-categoryMiddleWindowRight">
                    <p className="bodyActionText"  align="start">{text.data}</p>
                  </div>
                </div>
              )
              :null
              }
              </div>
          </div>
        :null}

        {/*Arbetsrörelser och repetitivt arbete*/}
        <div class="flex-grid-action-category" align="start">
          <div class="col-flex-action-category" onClick = {()=>this.changeDisplayShowFour()}>
              <p className="actionTitle">{this.state.suggestionTable[2].suggestionCategoryTitle} </p>
              <Button  className = "actionCategoryButton" align = "start" variant="none">{this.state.textValueThree}</Button>
          </div>
        </div>
        {
          this.state.showFour?
          <div>
          <div class="flex-grid-action-categoryStartWindow" align="start">
            <div class="col-flex-action-categoryStartWindowRight" >
              <p className="actionTitle"  align="start">{this.state.suggestionTable[2].suggestionQuestions[0].suggestionQuestionTitle}</p>
            </div>
          </div>
            <div class="flex-grid-action-categoryStartWindow" align="start">
              <div class="col-flex-action-categoryStartWindowLeft" >
                <p className="actionTitle"  align="start">{"Typ av åtgärd"}</p>
              </div>
              <div class="col-flex-action-categoryStartWindowRight" >
                <p className="actionTitleRight"  align="start">{"Exempel på åtgärdsförslag"}</p>
              </div>
            </div>
            <div>
            {
              this.state.chapFourRed?
              this.state.suggestionTable[2].suggestionQuestions[0].texts.map((text)=>
              <div class="flex-grid-action-categoryMiddleWindow" align="start">
                <div class="col-flex-action-categoryMiddleWindowLeft" >
                  <p className="bodyActionText"  align="start">{text.type}</p>
                </div>
                <div class="col-flex-action-categoryMiddleWindowRight">
                  <p className="bodyActionText"  align="start">{text.data}</p>
                </div>
              </div>
            )
            :null
            }
          </div>
        </div>
      :null}

      {/*Påverkande Faktorer*/}
      <div class="flex-grid-action-category" align="start">
        <div class="col-flex-action-category" onClick = {()=>this.changeDisplayShowFive()}>
            <p className="actionTitle">{this.state.suggestionTable[3].suggestionCategoryTitle} </p>
            <Button  className = "actionCategoryButton" align = "start" variant="none" >{this.state.textValueFour}</Button>

        </div>
      </div>
      {
        this.state.showFive?
        <div>
        <div class="flex-grid-action-categoryStartWindow" align="start">
          <div class="col-flex-action-categoryStartWindowRight" >
            <p className="actionTitle"  align="start">{this.state.suggestionTable[3].suggestionQuestions[0].suggestionQuestionTitle}</p>
          </div>
        </div>
          <div class="flex-grid-action-categoryStartWindow" align="start">
            <div class="col-flex-action-categoryStartWindowLeft" >
              <p className="actionTitle"  align="start">{"Typ av åtgärd"}</p>
            </div>
            <div class="col-flex-action-categoryStartWindowRight" >
              <p className="actionTitleRight"  align="start">{"Exempel på åtgärdsförslag"}</p>
            </div>
          </div>
          <div>
          {
            this.state.chapFiveRed?
            this.state.suggestionTable[3].suggestionQuestions[0].texts.map((text)=>
            <div class="flex-grid-action-categoryMiddleWindow" align="start">
              <div class="col-flex-action-categoryMiddleWindowLeft" >
                <p className="bodyActionText"  align="start">{text.type}</p>
              </div>
              <div class="col-flex-action-categoryMiddleWindowRight" >
                <p className="bodyActionText"  align="start">{text.data}</p>
              </div>
            </div>
          )
          :null
          }
        </div>

        <div class="flex-grid-action-categoryStartWindow" align="start">
          <div class="col-flex-action-categoryStartWindowRight" >
            <p className="actionTitle"  align="start">{this.state.suggestionTable[3].suggestionQuestions[1].suggestionQuestionTitle}</p>
          </div>
        </div>
        <div class="flex-grid-action-categoryStartWindow" align="start">
          <div class="col-flex-action-categoryStartWindowLeft">
            <p className="actionTitle"  align="start">{"Typ av åtgärd"}</p>
          </div>
          <div class="col-flex-action-categoryStartWindowRight" >
            <p className="actionTitleRight"  align="start">{"Exempel på åtgärdsförslag"}</p>
          </div>
        </div>
        <div>
        {
          this.state.chapFiveRed?
          this.state.suggestionTable[3].suggestionQuestions[1].texts.map((text)=>
          <div class="flex-grid-action-categoryMiddleWindow" align="start">
            <div class="col-flex-action-categoryMiddleWindowLeft" >
              <p className="bodyActionText"  align="start">{text.type}</p>
            </div>
            <div class="col-flex-action-categoryMiddleWindowRight" >
              <p className="bodyActionText"  align="start">{text.data}</p>
            </div>
          </div>
        )
        :null
        }
        </div>
      </div>
    :null}

        </div>
      );
    }
  }
}


export default ActionSuggestion;
