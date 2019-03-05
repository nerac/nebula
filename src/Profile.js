import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Card, List } from "semantic-ui-react";

/**
 * Enter any Github username here to fetch their starred repos.
 */
const user = "shidhincr";

const GET_USER = gql`
  {
    user(login:${user}) {
        avatarUrl
        name
        starredRepositories(first: 20) {
          totalCount
          edges {
            node {
              id
              name  
              description
              url
              owner {
                login
              }
            }
          }
        }
      }
  }
`;

export default ({ onRepoClick }) => {
  return (
    <Query query={GET_USER}>
      {({ data }) => {
        const { user } = data;
        console.log(user);
        if (!user) return null;

        return (
          <div>
            <Card
              image={user.avatarUrl}
              header={user.name}
              extra={`${
                user.starredRepositories.totalCount
              } starred repositories`}
            />

            <List divided relaxed>
              {user.starredRepositories.edges.map(edge => (
                <List.Item key={edge.node.id}>
                  <List.Content>
                    <List.Header
                      as="a"
                      onClick={() =>
                        onRepoClick(edge.node.name, edge.node.owner.login)
                      }
                    >
                      {edge.node.name}
                    </List.Header>
                    <List.Description>{edge.node.description}</List.Description>

                    <List.Description as="a" href={edge.node.url}>
                      Visit this Repo
                    </List.Description>

                    <span>
                      <a
                        href={edge.node.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit this repo
                      </a>
                    </span>
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </div>
        );
      }}
    </Query>
  );
};
