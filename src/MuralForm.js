import React, { Component } from 'react';

class MuralForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: ''};
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(e) {
    this.setState({ author: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(`${this.state.title}`)
  }
  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type='title'
          placeholder='Mural title...'
          value={ this.state.title }
          onChange={ this.handleTitleChange } />
        <input
          type='submit'
          value='Post' />
      </form>
    )
  }
}

export default MuralForm;
