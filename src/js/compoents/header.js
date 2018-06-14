import React from 'react';
import ReactDOM from 'react-dom';



export default class CompoentHeader extends React.Component{
  render(){
    const styleCompoentHeader ={
      header:{
        backgroundColor: "#333333",
        color: "#FFFFFF",
        "padding-top":"15px",
        paddingBottom: "15px",
      },
    };
    return(
      <header style={styleCompoentHeader.header} class="smallFontSize">
      <h1>this is 头部</h1>
      </header>
    )
  }
}
