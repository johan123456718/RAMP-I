import React, {Image, Component } from 'react';
import {ToggleButton,ToggleButtonGroup} from 'react-bootstrap'
import './checklist.css'

/*Authors: Emil Fjellström, Johan Challita, Niklas Höstklint, Jesper Larsson*/
class InputButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            answer : 0,
        };
    }

    changeAnswer(ans){
        this.setState({answer : ans});
      }

    changeState(ans){
      this.setState({answer : ans});
      this.props.changeState();
    }



    getAnswer(){
      return(this.state.answer);
    }
      render(){
        return(
          <div>
              <ToggleButtonGroup type="radio" name="options" value = {this.state.answer}>
                  <ToggleButton  variant = "choiceButton" value={1} onClick = {() => this.changeState(1)}>{this.props.val1}</ToggleButton>
                  <ToggleButton variant = "choiceButton" value={2} onClick = {() => this.changeState(2)}>{this.props.val2}</ToggleButton>
              </ToggleButtonGroup>
          </div>
        )
      }
    }

    export default InputButton;
