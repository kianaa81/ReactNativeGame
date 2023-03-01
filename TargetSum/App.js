import React from 'react';
import Game from './Game';
class App extends React.Component {
  render() {
    return (<Game key={this.state.gameId} randomNumberCount={6} initialSeconds={10} />
      );
  }
}

export default App;
