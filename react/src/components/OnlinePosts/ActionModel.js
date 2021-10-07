import React, {Image, Component } from 'react';
import './ActionModel.css';

/*Authors: Emil Fjellström, Johan Challita, Niklas Höstklint, Jesper Larsson*/
class ActionModel extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            textFile : null,
            image: null
        };
    }

    componentDidMount() {
                /*Collects data from Springboot */
                fetch("http://localhost:8080/demo/textFile?Id=1",{
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
                            textFile : result
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
        const {error, isLoaded, textFile, image} = this.state;
        if(error){
            return <div>Du behöver vara inloggad för åtkomst till denna sida</div>
        }if (!isLoaded) {
            return <div>Loading ...</div>
        }else if(textFile === null){
          return(<p> No textfile </p>
          );
        }else{
          return(
          <div class = "container-fluid p-0">
            <div class = "flex-grid-actionModel-picture">
                <div class = "col-flex-actionModel-picture" align = "start">
                  <img src={"http://localhost:8080/demo/getModelImage"} className = "actionModelImg" alt="Could not find image"/>
              </div>
            </div>
              <div class = "flex-grid-actionModel-Table">
                <div class = "col-flex-actionModel-Table" align = "start">
                  <h2 className = "titleText">{textFile.title_text}
                  </h2>
                  <p className = "bodyText">{textFile.body_text}
                  </p>
                </div>
              </div>
              <div class="flex-grid-actionModel-pictureBottom">
                <div class = "col-flex-actionModel-pictureBottom" align = "start">
                  <img src={"http://localhost:8080/demo/getModelTableImage"} className = "actionModelTableImg" alt="Could not find image"/>
                </div>
              </div>
            </div>
          );
      }
  }
}
export default ActionModel;
