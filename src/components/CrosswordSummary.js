import React from 'react';
import { Divider, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';

class CrosswordSummary extends React.Component {
  render() {
    if (!this.props.totalCombinations) {
      return <span />;
    }
    return (
      <React.Fragment>
        <Divider />
        <Label color='grey'>
          Crossword generated in {this.props.generationTime} milliseconds.
          Used {this.props.totalCombinations} combinations.
        </Label>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalCombinations: state.crossword.totalCombinations,
    generationTime: state.crossword.generationTime
  };
};

export default connect(mapStateToProps, {})(CrosswordSummary);