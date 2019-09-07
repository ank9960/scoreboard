const playerInitialState = {
	title: 'My Scoreboard'
}

// state와 action을 받아서 새로운 state로 return
// state의 초기 default는 playerInitialState로 받는다.
const playerReducer = (state = playerInitialState, action) => {
	return state;
}