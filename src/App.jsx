import React, { Component } from 'react'
import MainComp from './components/MainComp';

export default class App extends Component {
  constructor(){
    super() ;
    this.state={
      show:false
    }
  }
  componentDidMount(){
    //instructions
    console.log('hello component mounted ')
  }
  
  render() {
    

    return (
      <div>
        <button onClick={()=>this.setState({show: !this.state.show})}>Show component</button>

        {
          this.state.show ? <MainComp data={"data"}/> : <p>component not found</p>
        }


      </div>
    )
  }
}
