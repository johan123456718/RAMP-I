import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import './IntroText.css';

/*Authors: Emil Fjellström, Johan Challita*/
class IntroText extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            mainText : null,
            highRisk : null,
            furtherEval : null,
            lowRisk : null,
            endText : null
        };
    }

    componentDidMount() {
          /*Collects data from Springboot */
                fetch("http://localhost:8080/demo/textFile?Id=2",{
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
                            mainText : result
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

            fetch("http://localhost:8080/demo/textFile?Id=3",{
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
                        highRisk : result
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

            fetch("http://localhost:8080/demo/textFile?Id=4",{
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
                        furtherEval : result
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

            fetch("http://localhost:8080/demo/textFile?Id=5",{
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
                        lowRisk : result
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

            fetch("http://localhost:8080/demo/textFile?Id=6",{
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
                        endText : result
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

      render(){
        /*Error checker */
        const {error, isLoaded, mainText, highRisk, furtherEval, lowRisk, endText} = this.state;
        if(error){
            return <div>Du behöver vara inloggad för åtkomst till denna sida</div>
        }if (!isLoaded) {
            return <div>Loading ...</div>
        }else if(mainText === null || highRisk === null || furtherEval === null || lowRisk === null || endText === null){
          return <div>Du behöver vara inloggad för åtkomst till denna sida</div>
        }else{
          return(
          <div class="container-fluid p-0">
            <div class="flex-grid-intro" align="start">
              <div class="col-intro" >
                <p className="introTitle" align ="center" >{mainText.title_text}
                  <p className="introBody" align = "start" >{mainText.body_text}
                    <div class="flex-grid-intro" align="start">
                      <div class="colRed">
                      </div>
                      <div class="colRisk">
                        <p className = "highRisk" align="start"><strong>{highRisk.title_text}</strong> {highRisk.body_text}</p>
                      </div>
                    </div>
                    <div class="flex-grid-intro" align="start">
                      <div class="colGrey">
                      </div>
                      <div class="colRisk">
                        <p className = "furtherEval" align="start"><strong>{furtherEval.title_text + "."}</strong> {furtherEval.body_text}</p>
                      </div>
                    </div>
                    <div class="flex-grid-intro" align="start">
                      <div class="colGreen">
                      </div>
                      <div class="colRisk">
                        <p className = "lowRisk" align="start"><strong>{lowRisk.title_text}</strong> {lowRisk.body_text}</p>
                      </div>
                    </div>
                    <p className = "endingBody">{"Resultatet är avsett att vara en del av beslutsunderlaget vid prioriteing och val av åtgärder i arbetet att minska risken för belastningsbesvär."}</p>
                  </p>
                </p>
              </div>
            </div>
          </div>
          );
      }
  }
}

export default IntroText;
