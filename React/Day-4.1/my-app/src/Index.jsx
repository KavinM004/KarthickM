import React, { Component } from 'react'

export class Index extends Component {
    constructor(){
        super();
        this.state={
            items:0,
        }
        console.log("Constructor")
    }
    componentDidMount(){
        console.log("didmount")
    }
    componentDidUpdate(){
        console.log("Updated")
    }
    componentWillUnmount(){
        alert("Unmount being...")
    }

     handleButton=()=>{
        this.setState({items: this.state.items+1})
    }
  render() {
    console.log("render")
    
    return (
    <>
      <h1>Index component</h1>  
      <p>count : {this.state.items}</p>
      <button onClick={this.handleButton}>Click me :</button>
    </>
    )
  }
}

export default Index