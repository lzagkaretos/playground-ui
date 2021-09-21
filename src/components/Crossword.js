import React from 'react';
import { Input, Table } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Crossword extends React.Component {

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
                       id={`i${i}j${j}`} key={`i${i}j${j}`} onChange={this.cellChanged} />
              </Table.Cell>
            );
          }
        })}
      < /Table.Row>
    );
  }

  cellChanged = (e, data) => {
    this.props.cellChanged(data);
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