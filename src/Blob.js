import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import MarkdownIt from "markdown-it";
import "github-markdown-css";

const md = new MarkdownIt();

// const repoOwner = "NicolasCARPi";
// const repoName = "jquery_jeditable";

const style = {
  boxSizing: "border-box",
  minWidth: "200px",
  maxWidth: "980px",
  margin: "0 auto",
  padding: "45px"
};

const Blob = ({ repoDetails }) => {
  const { repoName, repoOwner } = repoDetails;
  if (!repoName) return null;

  const GET_CONTENT = gql`
  {
    repository(owner: "${repoOwner}", name: "${repoName}") {
      object(expression: "master:README.md") {
        ... on Blob {
          text
        }
      }
    }
  }
  `;
  return (
    <Query query={GET_CONTENT}>
      {({ data }) => {
        const { repository } = data;

        if (!repository || !repository.object) return null;

        return (
          <div
            className="markdown-body"
            style={style}
            dangerouslySetInnerHTML={{
              __html: md.render(
                repository.object &&
                  repository.object.text &&
                  repository.object.text
              )
            }}
          />
        );
      }}
    </Query>
  );
};

export default Blob;
