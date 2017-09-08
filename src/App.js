import React, { Component } from 'react';
import './App.css';

import RectangleList from './Components/RectangleList';
import TextDisplay from './Components/TextDisplay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Home',
      otherText: 'Other Text',
    }
  }

  updateText(textValue) {
    console.log('updateText called with value: ', textValue);
    this.setState({
      text: textValue
    });
  }

  handleChange(event) {
    this.setState({
      otherText: event.target.value,
    });
  }

  render() {
    let inputStyle = {
      float: 'right',
      margin: '1%'
    }
    return (
      <div>
        <h1 className="Header">
          Welcome to my App
        </h1>
        <input placeholder='Set Other Text' type="text" style={inputStyle} onChange={this.handleChange.bind(this)}/>
        <RectangleList
          updateText={this.updateText.bind(this)}
        />
        <TextDisplay
          text={this.state.text}
          otherText={this.state.otherText}
        />

      </div>
    );
  }
}

export default App;
