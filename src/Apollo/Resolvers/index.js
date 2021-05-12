import {gql} from '@apollo/client';
import {cache} from '../../index';
let nextTodoId =0;

const query =gql`
    query GetTodos{
        todos @client {
            id
            text
        }
    }
`;

export default{
    Mutation:{
        addTodo:(obj,{text},{}) =>{
            //reads queries from cache & stores them in previousState variable//
            const previousState = cache.readQuery({query});
            

            const data ={
                __typename :"TodoItem",
                id: nextTodoId++,
                text
            }
           
            if(!previousState){
                
                cache.writeQuery({query,data});
            }else{

                const newData ={
                    //combines newTodo Item with the previous todoItems//
                    todos : previousState.todos.concat([data])
                }

                cache.writeQuery({query,data:newData});
            }
          
            console.log(cache.readQuery({query}))
            return data
        },

        removeTodo:(obj,{id},{})=>{
            //fetches current todos from cache memory//
           const currentTodos =cache.readQuery({query});

           //gets the id of the todo item filters the array and returns a new array without the matching item id to remove//
           const removedTodoArr =currentTodos.todos.filter(todo=>{
               return todo.id !==id;
           })
        
           //new filtered data stored here//
           const data ={
               todos: removedTodoArr
           };

           //updates the cache memory with the new array//
           cache.writeData(data);
           return null;
        }
    }
}