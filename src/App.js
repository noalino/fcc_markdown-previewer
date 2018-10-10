import React, { Component } from 'react';
import Container from './components/Container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  render() {
    return <Container onChange={this.handleUserInput} preview={this.state.userInput} />
  }
}

export default App;
