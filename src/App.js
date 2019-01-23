import React, { Component } from 'react';
import styled from 'styled-components';
import './app.css';

const AppWrapper = styled.div`text-align: center;`;

class App extends Component {
	render() {
		return (
			<AppWrapper>
				<header className="App-header">
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Learn React
					</a>
				</header>
			</AppWrapper>
		);
	}
}

export default App;
