import React, {Image, Component } from 'react';
import {Form} from 'react-bootstrap';
import './UserComment.css';

/*Authors: Emil Fjellström, Johan Challita*/
class UserCommentMoment extends Component {
    constructor(props){
        super(props);
    }

    changeText(val){
        this.props.changeCommentState(val, this.props.id);
      }

    getAnswer(){
      return(this.props.textVal);
    }
      render(){

        return(
          <div>
          <Form>
            <Form.Group controlId="comment">
              <textarea placeholder="Moment" className="textarea" maxlength="255" type="text" ref={this.ref1} value={this.props.textVal} onChange={(e) => this.changeText(e.target.value)}/>
            </Form.Group>
          </Form>
          </div>
        )
      }
    }

    export default UserCommentMoment;
