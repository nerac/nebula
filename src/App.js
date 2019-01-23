import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import './app.css';

import Card from './components/Card';
import Container from './components/Container';

const AppWrapper = styled.div`text-align: center;`;

class App extends Component {
	render() {
		return (
			<AppWrapper className="App">
				<header />
				<Container>
					<Card />
				</Container>
			</AppWrapper>
		);
	}
}

export default App;
