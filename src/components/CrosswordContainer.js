import React from 'react';
import CrosswordAction from './CrosswordAction';
import Crossword from './Crossword';
import CrosswordHint from './CrosswordHint';
import CrosswordSummary from './CrosswordSummary';

class CrosswordContainer extends React.Component {

  checkSolution = () => {
    console.log('check solution');
  }

  render() {
    return (
      <React.Fragment>
        <CrosswordAction checkSolution={this.checkSolution} />
        <Crossword />
        <CrosswordSummary />
        <CrosswordHint />
      </React.Fragment>
    );
  }
}

export default CrosswordContainer;