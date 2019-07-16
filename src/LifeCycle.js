import React from 'react';
import ReactDOM from 'react-dom';

class LifeCycle extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = { hello : "World!" };
	}

	componentWillMount()
	{
		console.log("componentWillMount()");
	}

	componentDidMount()
	{
		console.log("componentDidMount()");
	}

	changeState()
	{
		this.setState({ hello : "Geek!" });
	}

	render()
	{
    console.log('123456789');
		return (
			<div>
			<h1>Hi i am sujeet kumar, Hello{ this.state.hello }</h1>
			<h2>
			<button onClick={this.changeState.bind(this)}>Press Here!</button>
			</h2>
			</div>);
	}

	shouldComponentUpdate(nextProps, nextState)
	{
		console.log("shouldComponentUpdate()");
		return true;
	}

	componentWillUpdate()
	{
		console.log("componentWillUpdate()");
	}

	componentDidUpdate()
	{
		console.log("componentDidUpdate()");
	}
}

export default LifeCycle;
