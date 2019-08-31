import React from 'react';

export const Stats = (props) => {
	//todo: 로직구현
	var totalPlayers = 0;
	const totalScore = 0;
	totalPlayers = props.players.length;
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