import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Container from "./components/Container";
import Profile from "./Profile";
import Blob from "./Blob";
import { personalToken } from "./config";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${personalToken}`
      }
    });
  }
});

class App extends Component {
  state = {
    status: false,
    repoDetails: { repoName: "", repoOwner: "" }
  };

  handleRepoClick = (repoName, repoOwner) => {
    const updatedDetails = { ...this.state.repoDetails };
    updatedDetails.repoName = repoName;
    updatedDetails.repoOwner = repoOwner;

    this.setState({ repoDetails: updatedDetails });
  };

  render() {
    const { repoDetails } = this.state;
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header />
          <Container>
            <Profile onRepoClick={this.handleRepoClick} />
            <Blob repoDetails={repoDetails} />
          </Container>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
