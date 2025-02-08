import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
       
        super();
        this.state={msg:"Hi....click here"
            ,flag:true
        }
        
    }
    changeMsg=()=>{
        this.setState({msg:"Welcome to my page",flag:false})
    }
  render() {
    let applyStyle=this.state.flag?'msg1':"msg2";
    return (
      <div>
      <h1 className={applyStyle}>{this.state.msg}</h1>
      <button onClick={this.changeMsg}>Click </button></div>
    )
  }
}
