import React, {Component} from 'react'
import Plus from './Plus'
import Minus from './Minus'
import Custom from './Custom'

class App extends Component {
  state = {
    count: 0
  }
  countUp = () => {
    this.setState(
      {count : this.state.count + 1 }
    )
  }

  countDown=() =>{
    this.setState(
      {count: this.state.count -1}
    )
  }

  custom = (number) =>{
    let value = parseInt(number)
    this.setState(
      {count: this.state.count + value }
    )
    
  }
 
  render () {
    return (
      <div className='App'>
        <div className="flex-container">
          <p>The current state is:</p>
          <h4>{this.state.count}</h4>
        </div>
        <div className= "flex-container-two">
          <Plus countUp={this.countUp}/>
          <Minus  countDown ={this.countDown} />
        </div>
        <div className ="flex-container-three">
          <Custom custom ={this.custom}/>
        </div>
      </div>
    )
  }
}
export default App