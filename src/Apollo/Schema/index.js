import {gql} from '@apollo/client';

const typeDefs = gql`
type Query{
    todos: [Todo]
}
   type Todo {
       id: ID!
       text: STRING!
   }

   type Mutation {
     addTodo(text: String!) :Todo
     removeTodo(id: ID!) :Todo
   }

  
`;

export default typeDefs;