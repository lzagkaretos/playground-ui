import React from 'react';
import CrosswordAction from './CrosswordAction';
import Crossword from './Crossword';
import CrosswordHint from './CrosswordHint';
import CrosswordSummary from './CrosswordSummary';
import { connect } from 'react-redux';
import { checkSolution } from '../actions';

class CrosswordContainer extends React.Component {
  state = { filledBoard: null };

  constructor(props, context) {
    super(props, context);
    this.cellChanged = this.cellChanged.bind(this);
  }

  static getDerivedStateFromProps(props) {
    return {
      filledBoard: props.crossword.emptyBoard
    };
  }

  cellChanged(data) {
    const x = data.id.substr(1, data.id.indexOf('j') - 1);
    const y = data.id.substr(data.id.indexOf('j') + 1);
    let updatedBoard = [...this.state.filledBoard];
    updatedBoard[x][y] = data.value === '' ? '-' : data.value.toUpperCase();
    this.setState({ filledBoard: updatedBoard });
  }

  checkSolution = () => {
    this.props.checkSolution(this.state.filledBoard);
  };

  render() {
    return (
      <React.Fragment>
        <CrosswordAction checkSolution={this.checkSolution} />
        <Crossword filledBoard={this.state.filledBoard} cellChanged={this.cellChanged} />
        <CrosswordSummary />
        <CrosswordHint />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { crossword: state.crossword };
};

export default connect(mapStateToProps, { checkSolution })(CrosswordContainer);
