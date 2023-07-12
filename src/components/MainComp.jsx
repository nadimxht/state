import React, { Component } from 'react'

export default class MainComp extends Component {
  constructor(props){
    super(props);
    this.state={
      counter:0,
      name:this.props.data
    }
  }

  componentDidMount(){
    setInterval(
      ()=>{
        this.setState({counter:this.state.counter+1})
      } , 
      1000
    )
  }
  componentWillUnmount(){
    alert("Goodbye")
  }
  render() {

    return (
      <div>
        counter: {this.state.counter}  {this.props.data}
        
      </div>
    )
  }
}
