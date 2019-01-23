import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import  MarkdownIt from 'markdown-it';
import 'github-markdown-css';

const md = new MarkdownIt();
const GET_CONTENT = gql`
{
    repository(owner: "NicolasCARPi", name: "jquery_jeditable") {
        object(expression: "master:README.md") {
          ... on Blob {
            text
          }
        }
      }
}
`
const style = {
    boxSizing: "border-box",
    minWidth: "200px",
    maxWidth: "980px",
    margin: "0 auto",
    padding: "45px"

}

export default Blob = () => {
  return (
    <Query query={GET_CONTENT}>
        {
            ({ data }) => {
                const { repository } = data;

                if(!repository) return null;

                return (
                    <div className="markdown-body" style={style} dangerouslySetInnerHTML={{__html: md.render(repository.object.text)}}></div>
                    
                )
            }
        }
    </Query>
  )
}
