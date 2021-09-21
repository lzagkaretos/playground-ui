import React from 'react';
import { Button, Divider, Dropdown, Icon, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { fetchBoards, generateCrossword } from '../actions';

class CrosswordAction extends React.Component {
  state = { selectedBoard: null };

  componentDidMount() {
    this.props.fetchBoards();
  }

  componentDidUpdate() {
    if (!this.state.selectedBoard && this.props.boards.length > 0) {
      this.setState({ selectedBoard: this.props.boards[0].id });
    }
  }

  generateCrossword = () => {
    this.props.generateCrossword(this.state.selectedBoard);
  };

  checkSolution = () => {
    this.props.checkSolution();
  };

  getBoardOptions() {
    return this.props.boards.map(board => ({ key: board.id, value: board.id, text: board.name }));
  };

  handleBoardChange = (e, { value }) => this.setState({ selectedBoard: value });

  renderCrosswordSolution = () => {
    if (this.props.crosswordSolution == null) {
      return null;
    } else if (this.props.crosswordSolution) {
      return <span style={{color:'green', fontSize: '16px'}}><Icon color={'green'} name='check' />Congratulations!</span>;
    } else {
      return <span style={{color:'red', fontSize: '16px'}}><Icon color={'red'} name='times' />Please try again!</span>;
    }
  }

  render() {
    return (
      <Segment>
        <Dropdown placeholder='Select Board Type' selection options={this.getBoardOptions()}
                  onChange={this.handleBoardChange} value={this.state.selectedBoard} />
        <Divider />
        <Button primary onClick={this.generateCrossword}>Generate Crossword</Button>
        <Button secondary onClick={this.checkSolution}>Check Solution</Button>
        {this.renderCrosswordSolution()}
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    boards: state.boards,
    crosswordSolution: state.crosswordSolution
  };
};

export default connect(mapStateToProps, { fetchBoards, generateCrossword })(CrosswordAction);
