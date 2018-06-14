import React from 'react';
export default class BodyChild extends React.Component{
  render(){
    return(
      <div>
      <p>页面输入：<input type="text" onChange={this.props.valuechange}/></p>
      <p>{this.props.userId}</p>
      </div>
    )
  }

}
