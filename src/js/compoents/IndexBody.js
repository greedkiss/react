import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import BodyChild from './bodyChild.js';

const defaultProps= {
  UserName: 'moreng',
};

export default class ComponentBody extends React.Component{
    constructor(){
      super();
      this.state={username:'parry',
    age:20}
    }
    valuechange(event){
      this.setState({age: event.target.value});
    }
    changeUserInfo(){
      this.setState({age:this.refs.submitButton.value});
      // var mySubmitButton= document.getElementById('submitButton');
      // ReactDOM.findDOMNode(mySubmitButton).style.color='red';
      this.refs.submitButton.style.color='red';
    }
   render(){
   //   setTimeout(()=>{
   //     this.setState({username:"huang",age:100});
   //   }
   // ,4000);
     return(
       <div>
       <h1> {this.props.userId} {this.props.UserName}</h1>
       <p>{this.state.age}</p>
       <input id="submitButton" ref="submitButton" type="button" value="提交" onClick={this.changeUserInfo.bind(this)}/>
       <BodyChild {...this.props} id={123}valuechange={this.valuechange.bind(this)}/>
       </div>
     )
   }
}
ComponentBody.propTypes={
  userId: PropTypes.string.isRequired,
};
ComponentBody.defaultProps=defaultProps;
