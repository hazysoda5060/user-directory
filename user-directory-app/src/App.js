import { Component } from 'react';
import './App.css';
import Data from './Data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }
    this.increaseHandler = this.increaseHandler.bind(this)
    this.decreaseHandler = this.decreaseHandler.bind(this)
  }

  increaseHandler() {
    if(this.state.index === 24){
      this.setState({index: 0})
    } else {
      this.setState({index: this.state.index + 1})
    }
  }

  decreaseHandler() {
    if(this.state.index === 0){
      this.setState({index: 24})
    } else {
      this.setState({index: this.state.index - 1})
    }
  }
  
  render() {
    return (
      <div className="App">
        <h2 className='header'>Home</h2>
        <div>
          <Data index={this.state.index} className='user-card'/>
        </div>
        <button onClick={this.decreaseHandler}>{'<'} Previous</button>
        <button onClick={this.increaseHandler}>Next {'>'}</button>
      </div>
    );
  }
}

export default App;
