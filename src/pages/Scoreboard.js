import React from 'react';
import Header from "../components/Header";
import {CustomPlayer} from "../components/CustomPlayer";
import AddPlayerForm from "../components/AddPlayerForm";
import {connect} from "react-redux";

// Scoreboard css는 Scoreboard 컴포넌트만 적용된게 아니라 글로벌하게 적용
import './Scoreboard.css';

class Scoreboard extends React.Component {
	getHighScore() {
		let highScore = 0;
		this.props.players.forEach(player => {
			if (player.score > highScore) {
				highScore = player.score;
			}
		})
		return highScore;
	}

	render() {
		return (
			<div className="scoreboard">
				<Header players={this.props.players}/>

				{
					this.props.players.map(player => {
						return (
							<CustomPlayer name={player.name} key={player.id}
														id={player.id}
														score={player.score}
														isHighScore={player.score === this.getHighScore()}
							/>
						)
					})
				}
				<AddPlayerForm/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	players: state.playerReducer.players
})

export default connect(mapStateToProps)(Scoreboard);