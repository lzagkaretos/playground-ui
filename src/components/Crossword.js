import React from 'react';
import { Input, Table } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Crossword extends React.Component {
  state = { filledBoard: null };

  constructor(props, context) {
    super(props, context);
    this.inputCellChanged = this.inputCellChanged.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return {
      filledBoard: props.crossword.emptyBoard
    };
  }

  renderBoardLine(line, i) {
    return (
      <Table.Row key={i}>
        {line.map((letter, j) => {
          if (letter === '#') {
            return <Table.Cell className={'crossword-cell black-cell'}
                               key={'' + i + j}></Table.Cell>;
          } else {
            return (
              <Table.Cell className={'crossword-cell'} key={'' + i + j}>
                <Input transparent className={'crossword-input-cell'} maxLength={1}
                       id={`i${i}j${j}`} key={`i${i}j${j}`} onChange={this.inputCellChanged} />
              </Table.Cell>
            );
          }
        })}
      < /Table.Row>
    );
  }

  inputCellChanged(e, data) {
    const x = data.id.substr(1, data.id.indexOf('j') - 1);
    const y = data.id.substr(data.id.indexOf('j') + 1);
    let updatedBoard = [...this.state.filledBoard];
    updatedBoard[x][y] = data.value === '' ? '-' : data.value.toUpperCase();
    this.setState({ filledBoard: updatedBoard });
  }

  render() {
    if (!this.props.crossword || !this.props.crossword.board) {
      return <div></div>;
    }
    return (
      <Table key={this.props.crossword.identifier} celled className={'crossword-table'}>
        <Table.Body>
          {this.props.crossword.emptyBoard.map((object, i) => this.renderBoardLine(object, i))}
        </Table.Body>
      </Table>
    );
  }
}

const mapStateToProps = (state) => {
  return { crossword: state.crossword };
};

export default connect(mapStateToProps, {})(Crossword);