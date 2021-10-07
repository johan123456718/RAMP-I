import React, {Image, Component } from 'react';
import {ToggleButton,ToggleButtonGroup} from 'react-bootstrap'
import './checklist.css';

/*Authors: Emil Fjellström, Johan Challita, Niklas Höstklint, Jesper Larsson*/
class TwoChoiceButton extends Component {
    constructor(props){
        super(props);
    }

    changeAnswer(ans){
        this.props.changeAnswerState(ans, this.props.id);
      }

    getAnswer(){
      return(this.props.answer);
    }
      render(){

        return(
          <div>
              <ToggleButtonGroup type="radio" name="options" className = "buttonsRight" value = {this.props.answer}>
                  <ToggleButton variant = "choiceButton" value={1} onClick = {() => this.changeAnswer(1)}>{this.props.val1}</ToggleButton>
                  <ToggleButton variant = "choiceButton" value={2} onClick = {() => this.changeAnswer(2)}>{this.props.val2}</ToggleButton>
              </ToggleButtonGroup>
          </div>
        )
      }
    }

    export default TwoChoiceButton;
