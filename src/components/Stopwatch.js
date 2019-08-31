import React from 'react';

export class Stopwatch extends React.Component {
	tickRef;
	state = {
		isRunning: false
	}

	handleStopwatch = () => {
		this.setState(prevState => ({isRunning: !prevState.isRunning}))
	}

	render() {
		return (
			<div className="stopwatch">
				<h2>StopWatch</h2>
				<span className="stopwatch-time">5</span>
				<button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
				<button>Reset</button>
			</div>
		);
	}

	tick = () => {
		// time update logic
	}

	// DOM이 렌더링 된 직후에 호출되는 라이프 사이클
	//네트워크 호출
	componentDidMount() {
		// eslint-disable-next-line no-undef
		this.tickRef = setInterval(this.tick, 1000);
	}

	// DOM이 파괴되시 직전에 호출되는 라이프 사이클
	//리소스 해제 등등
	componentWillMount() {
		clearInterval(this.tickRef);
	}
}

