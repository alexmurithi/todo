import React from 'react';

import {useQuery,gql} from '@apollo/client';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import {makeStyles} from '@material-ui/styles';
import { IconButton, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const GET_TODO_LIST = gql`
  query GetTodoList {
    todos @client {
      id
      text
    }
  }
`;

const useStyles =makeStyles(theme=>({
    root:{
       width:'40%',
       height:'auto',
       backgroundColor:'#FFFFFF',
       margin:theme.spacing(2,'auto'),
       
    },
    cardList:{
      
    }
}))

export default function TodoList(props){
    const classes =useStyles()

    const { data, error, loading } = useQuery(GET_TODO_LIST);
    console.log(data)
    if (error) return <h1>Error...</h1>;
    if (loading) return <h1>loading...</h1>;
    
    
   
    
    
    // const { todos } = data ? data : {2};
    // console.log(todos)
    return(
        <React.Fragment>
        

           
                    <Card className={classes.root} >
                    <CardContent>
                        <Grid container>
                          <Grid item lg={8}>
                              <Typography variant="h5">
                                  <Box>Go to the Gym</Box>
                              </Typography>
                          </Grid>
    
                          <Grid item lg={2}>
                             <IconButton>
                               <EditIcon />
                             </IconButton>
                          </Grid>
    
                          <Grid item lg={2}>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                          </Grid>
    
                        </Grid>
                    </CardContent>
                </Card>
                 
          

        </React.Fragment>        
           

            
       
    )
}