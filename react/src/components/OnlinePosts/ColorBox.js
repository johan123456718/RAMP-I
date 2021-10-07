import React, {Component } from 'react';
import './ColorBox.css'

/*Authors: Niklas Höstklint, Jesper Larsson*/
class ColorBox extends Component {
    constructor(props){
        super(props);
    }
    // 0 == WHITE, 1 == GREEN, 2 == GREY, 3 == RED
      render(){
        if(this.props.color===3){
          return <div class="colRed"></div>
        }

        else if(this.props.color===2){
          return <div class="colGrey"></div>
        }

      else if(this.props.color===1){
        return <div class="colGreen"></div>
      }
      else{
        return <div class = "emptyCol"> </div>
      }
  }
}

export default ColorBox;
