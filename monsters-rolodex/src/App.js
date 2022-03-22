import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            name: 'ABD EL HALIM'
        }
    }

  render() {
    return (
        <div className='App'>
            <h1>Hello My name is {this.state.name}</h1>
            <button onClick={() => this.setState({name: 'Hello John'})}>Click</button>
        </div>
    );
  }

}

export default App;
