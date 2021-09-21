import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Header, List, Segment } from 'semantic-ui-react';

class CrosswordHint extends React.Component {

  renderWordSlots = (direction) => {
    const workingList = (direction === 'HORIZONTAL') ?
      _.orderBy(this.props.wordSlots, ['startX', 'startY'], ['asc', 'asc']) :
      _.orderBy(this.props.wordSlots, ['startY', 'startX'], ['asc', 'asc']);
    return workingList.filter(ws => ws.direction === direction).map((ws, i) => {
      return <List.Item key={i}>({ws.startX + 1}, {ws.startY + 1}): {ws.word}</List.Item>;
    });
  };

  render() {
    if (!this.props.wordSlots) {
      return <div></div>;
    }
    return (
      <Segment>
        <Header as='h3'>HORIZONTAL</Header>
        <List>
          {this.renderWordSlots('HORIZONTAL')}
        </List>
        <Header as='h3'>VERTICAL</Header>
        <List>
          {this.renderWordSlots('VERTICAL')}
        </List>
      </Segment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { wordSlots: state.crossword.wordSlots };
};

export default connect(mapStateToProps, {})(CrosswordHint);