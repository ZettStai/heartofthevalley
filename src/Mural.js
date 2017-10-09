import React, { Component } from 'react';
import marked from 'marked';

class Mural extends Component {
  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  }
  render() {
    return (
        <h3>{this.props.title}</h3>
        <span dangerouslySetInnerHTML={ this.rawMarkup() } />
    )
  }
}

export default Mural;
