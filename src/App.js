import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Grid } from "semantic-ui-react";

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
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Profile onRepoClick={this.handleRepoClick} />
              </Grid.Column>
              <Grid.Column width={12}>
                <Blob repoDetails={repoDetails} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
