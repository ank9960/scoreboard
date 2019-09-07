import React from 'react';
import { Stats } from "./Stats";
import {Stopwatch} from "./Stopwatch";
import PropTypes from "prop-types";


// 펑션 컴포넌트 반드시 대문자 시작
// react element를 리턴해야 한다.
//부모로 받은 속성은 Readonly, 변경해 사용할 수 없다.
export const Header = ({title, totalPlayers, players}) => {
	return (
		<header className="header">
			<Stats players={players}/>
			<h1 className="h1">{title}</h1>
			<Stopwatch />
		</header>
	)
}

Header.propTypes = {
	title: PropTypes.string,
	players: PropTypes.arrayOf(PropTypes.object)
}

Header.defaultProps = {
	title: 'Scoreboard'
}