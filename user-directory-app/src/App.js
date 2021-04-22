import { Component } from 'react';
import './App.css';
import Data from './Data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cIndex: 0
    }
  }

  increaseHandler() {
    if(this.state.cIndex === 24){
      this.setState({cIndex: 0})
    } else {
      this.setState({cIndex: this.state.cIndex + 1})
    }
  }

  decreaseHandler() {
    if(this.state.cIndex === 0){
      this.setState({cIndex: 24})
    } else {
      this.setState({cIndex: this.state.cIndex - 1})
    }
  }
  
  render() {
    return (
      <div className="App">
        <h2 className='header'>Home</h2>
        <div className='user-card'>
          <Data index={this.state.cIndex}/>
        </div>
        <button onClick={this.decreaseHandler}>{'<'} Previous</button>
        <button onClick={this.increaseHandler}>Next {'>'}</button>
      </div>
    );
  }
}

export default App;
