import React, {Component } from 'react';

/*Authors: Niklas Höstklint, Jesper Larsson*/
class CheckedBox extends Component {
    constructor(props){
        super(props);
    }
    // 0 == WHITE, 1 == GREEN, 2 == GREY, 3 == RED
      render(){
      if(this.props.checked===1){
        return <div> X </div>
      }
      else{
        return <div> </div>
      }
  }
}

export default CheckedBox;
