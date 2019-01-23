import React, { Component } from 'react';
import styled from 'styled-components';
import './app.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";


import Card from './components/Card';
import Container from './components/Container';

import Profile from './Profile';
import Blob from './Blob';


const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer fed2e7b6681a9b60e57c51eabdd6dbbae3c6eb90`
      },
    });
  }, 
});

// client
//   .query({
//     query: GET_CONTENT
//   })
//   .then(console.log)



// const AppWrapper = styled.div`text-align: center;`;

class App extends Component {
  state = {
    status: false
  } 

	render() {
		return (
      <ApolloProvider client={client}>     
        <div className="App">
          <header />
          <Container>
            <Profile />
            <Blob />
          </Container>
        </div>
      </ApolloProvider>
		);
	}
}

export default App;
