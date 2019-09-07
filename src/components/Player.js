import React from "react";
import Counter from './Counter';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {removePlayer} from "../redux/action";

class Player extends React.PureComponent {
	static propTypes = {
		removePlayer: PropTypes.func,
		changeScore: PropTypes.func,
		id: PropTypes.number,
		name: PropTypes.string,
		score: PropTypes.number
	}

	render() {
		console.log(this.props.name, 'rendered')

		const {removePlayer, id, name, score, changeScore} = this.props;

		return (
			<div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => removePlayer(id)}> X </button>
				{name}
			</span>
				<Counter
					score={score}
					id={id}
					//changeScore={changeScore}
				/>
			</div>
		)
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log(nextProps);
		// score가 다를 경우만 true를 리턴
		return this.props.score !== nextProps.score;
	}
}

const mapActionToProps = (dispatch) => ({
	removePlayer: (id) => dispatch(removePlayer(id))
})

export default connect(null, mapActionToProps)(Player);