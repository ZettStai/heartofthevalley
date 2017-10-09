import React, { Component } from 'react';
import Mural from './Mural';

class MuralList extends Component {
  render() {
    let muralNodes = this.props.data.map(mural => {
      return (
        <Mural title={ mural.title } key={ mural.id }>
        </Mural>
      )
    })
    return (
        { muralNodes }
    )
  }
}

export default MuralList;
