import React from 'react';
import Game from './Game';
class App extends React.Component {
  state = {
    gameId: 1,
  };
  resetGame = () => {
    this.setState((prevState) => {
      return {gameId: prevState.gameId + 1};
    });
  }
  render() {
    return (
    <Game
    onPlayAgain = {this.state.gameId}
    key={this.state.gameId}
    randomNumberCount={6}
    initialSeconds={10}
    />
      );
  }
}

export default App;
