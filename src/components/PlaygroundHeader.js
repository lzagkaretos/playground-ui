import React from 'react';
import { Header, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const PlaygroundHeader = () => {
  return (
    <React.Fragment>
      <Header dividing>
        Playground
      </Header>
      <Menu>
        <Menu.Item as={Link} name='home' to='/'>
          Home
        </Menu.Item>
        <Menu.Item as={Link} name='crossword' to='crossword'>
          Crossword
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
};

export default PlaygroundHeader;