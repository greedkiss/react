// var React=require('react');
// var ReactDOM=require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import CompoentHeader from './compoents/header.js';
import CompoentFooter from './compoents/footer.js';
import CompoentBody from './compoents/IndexBody.js';
class Index extends React.Component{
  render(){
    return(
      <div>
          <CompoentHeader/>
          <CompoentBody userId={"213123asd"}/>
          <CompoentFooter/>
      </div>
    )
  }
}
ReactDOM.render(<Index/>,document.getElementById('example'))
