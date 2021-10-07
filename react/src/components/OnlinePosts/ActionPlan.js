import React, {Image, Component } from 'react';
import './ActionPlan.css';

/*Authors: Emil Fjellström, Johan Challita*/
class ActionPlan extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
        };
    }

      render(){
        /*Error checker */
        const {error} = this.state;
        if(error){
            return <div>Du behöver vara inloggad för åtkomst till denna sida</div>
        }
        else{
          return(
          <div class = "container-fluid p-0">
            <div class = "flex-grid-actionPlan">
              <div class = "col-flex-actionPlan" align = "start">
                  <p className="titleText" align="center">{"Välkommen till sidan för den framtida handlingsplanen"}</p>
              </div>
            </div>
          </div>
          );
      }
  }
}
export default ActionPlan;
