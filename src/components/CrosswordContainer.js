import React from 'react';
import CrosswordAction from './CrosswordAction';
import Crossword from './Crossword';
import CrosswordHint from './CrosswordHint';
import CrosswordSummary from './CrosswordSummary';

class CrosswordContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CrosswordAction />
        <Crossword />
        <CrosswordSummary />
        <CrosswordHint />
      </React.Fragment>
    );
  }
}

export default CrosswordContainer;