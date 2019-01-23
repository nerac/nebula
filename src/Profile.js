import React from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_USER = gql`
  {
    user(login:"nerac") {
        avatarUrl
        name
        starredRepositories(first: 20) {
          totalCount
          edges {
            node {
              id  
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



// name - jquery_jeditable
// owner - NicolasCARPi

export default () => {
  return (
    <Query query={GET_USER}>
       {
           ({data}) => {
               const { user } = data;

               if(!user) return null;

               return (
                   <div>
                       <div>
                            { user.name }
                            <p>You have { user.starredRepositories.totalCount } starred repositories</p>
                       </div>
                       <div style={{ maxWidth: "80px", borderRadius: "50%", overflow: "hidden" }} >
                            <img src={user.avatarUrl} alt="avatar" style={{ maxWidth: "100%" }}/>
                       </div>

                       <ul>
                           { user.starredRepositories.edges.map( edge => (
                               <li key={edge.node.id} style={{ margin: "50px" }}>
                                   <div>
                                       <h2>{edge.node.description}</h2>
                                       <span><a href={edge.node.url} target="_blank" rel="noopener noreferrer">link</a></span>
                                   </div>
                               </li>
                           )) }
                       </ul> 
                   </div>

               )
           }
       }
    </Query>
  )
}
