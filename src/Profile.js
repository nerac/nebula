import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

/**
 * Enter any Github username here to fetch their starred repos.
 */
const user = "amoury";

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
        if (!user) return null;

        return (
          <div>
            <div>
              {user.name}
              <p>
                You have {user.starredRepositories.totalCount} starred
                repositories
              </p>
            </div>
            <div
              style={{
                maxWidth: "80px",
                borderRadius: "50%",
                overflow: "hidden"
              }}
            >
              <img
                src={user.avatarUrl}
                alt="avatar"
                style={{ maxWidth: "100%" }}
              />
            </div>

            <ul>
              {user.starredRepositories.edges.map(edge => (
                <li
                  key={edge.node.id}
                  style={{ margin: "50px" }}
                  onClick={() =>
                    onRepoClick(edge.node.name, edge.node.owner.login)
                  }
                >
                  <div>
                    <h2>{edge.node.name}</h2>
                    <p>{edge.node.description}</p>
                    <span>
                      <a
                        href={edge.node.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        link
                      </a>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      }}
    </Query>
  );
};
