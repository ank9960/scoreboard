import React from 'react';

export class AddPlayerForm extends React.Component {
	state = {
		value: ''
	}

	handleValueChange = (e) => {
		this.setState({value: e.target.value});
		// 3) 부모에게서 받은 콜백 펑션을 호출
		//this.props.addPlayer(e.target.value);
	}

	handleSubmit = (e) => {
		// submit의 기본 이벤트 막기
		e.preventDefault();

		const form = document.getElementById("form");
		const player = document.getElementById("player");

		console.log(player.validity.valid);
		console.log(form.checkValidity());

		this.props.addPlayer(this.state.value);
	}

	render() {
		return (
			<form id="form" className="form" onSubmit={this.handleSubmit} noValidate>
				<input id="player" className="input" type="text" placeholder="Enter a player's name" value={this.state.value} onChange={this.handleValueChange} required></input>
				<input className="input" type="submit" value="Add Player"></input>
			</form>
		);
	}
}