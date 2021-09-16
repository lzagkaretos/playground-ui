import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { generateCrossword } from '../actions';

class CrosswordAction extends React.Component {

  generateCrossword = () => {
    this.props.generateCrossword();
  }

  render() {
    return (
      <Button primary onClick={this.generateCrossword}>Generate Crossword</Button>
    );
  }
}

export default connect(null, { generateCrossword })(CrosswordAction);
