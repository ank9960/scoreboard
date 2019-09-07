import React from 'react';
import './App.css';
import Header from './components/Header';
import { Player } from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';
import {connect} from "react-redux";

class App extends React.Component {
  constructor() {
    super();
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
    this.handleChangeScore = this.handleChangeScore.bind(this);
  }
  render() {
    return(
      <div className="scoreboard">
        <Header players={this.props.players} />

        {/*Player List*/}
        {/*<Player name="Jini" score={50} />*/}
        {
          this.props.players.map(player => {
            return (
              <Player name={player.name} key={player.id}
                      id={player.id}
                      score={player.score}
                      changeScore={this.handleChangeScore}
                      removePlayer={this.handleRemovePlayer}
              />
            )
          })
        }
        {/*// 2) 콜백 펑션을 props로 내려주기*/}
        <AddPlayerForm />
      </div>
    )
  }
  handleRemovePlayer(id) {
    console.log(this);
    console.log("handleRemovePlayer", id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id)
      return {players}
    })
  }
  handleChangeScore(id, delta) {
    console.log(id, delta);
    this.setState(prevState => {
      //id에 해당하는 player를 찾은 다음 score에 delta를 더한다.
      const players = [ ...prevState.players ]; // dcapy (...)
      players.forEach(player => {
        if (player.id == id) {
          player.score += delta;
        }
      })
      return {players}
    })
  }
  // // 1) 콜백 펑션 정의
  // handleAddPlayer = (name) => {
  //   console.log(name);
  //   // add palyer 로직
  //   this.setState(prevState => {
  //     // 원본 배열을 훼손 x. => deep copy
  //     const players = [ ...prevState.players ];
  //
  //     players.push({name, score: 0, id: ++this.maxId});
  //
  //     return {players};
  //   })
  // }
}

const mapStateToProps = (state) => ({
  players: state.playerReducer.players
})

export default connect(mapStateToProps)(App);
