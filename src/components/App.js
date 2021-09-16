import React from 'react';
import Crossword from './Crossword';
import { Container, Grid, Header } from 'semantic-ui-react';
import CrosswordAction from './CrosswordAction';

class App extends React.Component {

  render() {
    return (
      <Container style={{ marginTop: '3em' }}>
        <Header dividing>My Playground</Header>
        <Header>
          <Grid>
            <Grid.Column>
              <CrosswordAction />
            </Grid.Column>
          </Grid>
        </Header>
        <Crossword />
      </Container>
    );
  }
}

export default App;
