import React from 'react';

export const stats = (props) => {
	//todo: 로직구현
	const totalPlayers = 0
	const totalScore = 0
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