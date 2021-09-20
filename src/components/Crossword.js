import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';

class Crossword extends React.Component {

  renderBoardLine(line, i) {
    return (
      <Table.Row key={i}>
        {line.map((letter, j) => {
            let cellClass = letter === '#' ? 'black-cell' : '';
            return (<Table.Cell className={'crossword-cell ' + cellClass} textAlign='center'
                                key={'' + i + j}>{letter === '-' || letter === '#' ? '' : letter}</Table.Cell>);
          }
        )}
      </Table.Row>
    );
  }

  render() {
    if (!this.props.crossword || !this.props.crossword.board) {
      return <div></div>;
    }
    return (
      <div>
        <Table celled className={'crossword-table'}>
          <Table.Body>
            {this.props.crossword.board.map((object, i) => this.renderBoardLine(object, i))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { crossword: state.crossword };
};

export default connect(mapStateToProps, {})(Crossword);