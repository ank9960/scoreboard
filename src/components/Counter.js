import React from "react";
import PropTypes from "prop-types";

export class Counter extends React.Component { // extends React.Component : 부모가 갖고있는 속성과 메서드를 다 물려받음
	/*handleChangeScore(delta) {
		console.log('incrementScore', this);
		this.setState(prevState => ({score: prevState.score + delta}));
	}*/

	// 이벤트의 오른쪽은 함수 선언문이 들어가야 한다.
	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={() => this.props.changeScore(this.props.id, -1)}> -</button>
				<span className="counter-score">{this.props.score}</span>
				<button className="counter-action increment" onClick={() => this.props.changeScore(this.props.id, 1)}> +</button>
			</div>
		)
	}
}

Counter.propTypes = {
	sore: PropTypes.number,
	id: PropTypes.number,
	changeScore: PropTypes.func
}