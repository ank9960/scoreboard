import React from 'react';

export const Stats = (props) => {
	//todo: 로직구현
	const totalPlayers = props.players.length;
	let totalScore = 0;
	props.players.forEach(player => totalScore += player.score);
	return (
		<table className="stats">
			<tbody>
			<tr>
				<td>Players</td>
				<td>{totalPlayers}</td>
			</tr>
			<tr>
				<td>Total Points</td>
				<td>{totalScore}</td>
			</tr>
			</tbody>
		</table>
	);
}