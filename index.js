import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Editor from './Editor';
import EditorFixed from './EditorFixed';
import './styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <EditorFixed />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
