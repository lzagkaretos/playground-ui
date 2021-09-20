import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Container, Grid, Header } from 'semantic-ui-react';
import history from '../history';
import PlaygroundHeader from './PlaygroundHeader';
import Home from './Home';
import CrosswordContainer from './CrosswordContainer';

class App extends React.Component {

  render() {
    return (
      <Container style={{ marginTop: '3em' }}>
        <Router history={history}>
          <PlaygroundHeader />
          <Header>
            <Grid>
              <Grid.Column>
                <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/crossword' exact component={CrosswordContainer} />
                </Switch>
              </Grid.Column>
            </Grid>
          </Header>
        </Router>
      </Container>
    );
  }
}

export default App;
