import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TodoList from './TodoList';

import Alert from '@material-ui/lab/Alert';

import {makeStyles} from '@material-ui/styles';

import {useMutation, gql} from '@apollo/client';

const ADD_TODO =gql`
  mutation AddTodo($text : String!) {
      addTodo(text: $text) @client {
          id
      }
  }
`;



const useStyles =makeStyles(theme=>({
   todoBox:{
       width:'40%',
       height:'auto',
       margin:theme.spacing(2,'auto'),
      
      
   },

   todoInputs:{
       margin:theme.spacing(2,'auto')
   }

   
}))


export default function TodoInput(props){
    const { id,text } = props;

    const classes =useStyles();
    const [addTodo] = useMutation(ADD_TODO);
    const [input, setInput] =React.useState();

    
    return(
        <Container>
            <Box className={classes.todoBox}>

            <Alert severity="info">
                <Typography >Add Your Activity</Typography>
            </Alert>

                <Card className={classes.todoInputs}>
                    <CardContent>
                    <form noValidate autoComplete="off" onSubmit={e=>{
                        e.preventDefault();
                        addTodo({variables:{text:input}});
                       
                    }}>
                        <Grid container spacing={3}>
                            <Grid item lg={8}>
                            <TextField 
                                onChange={e => setInput(e.target.value)}
                                label="Todo"
                                type="text"
                                variant="outlined"
                                size='small'
                                />
                        </Grid>

                            <Grid item lg={4}>
                            <Button variant="contained" color="primary" type="submit" >Add to List</Button>
                            </Grid>
                    

                       
                 </Grid>
            </form>
                    </CardContent>
                </Card>
               
             
            

            </Box>

         <TodoList />
             

        </Container>
    )
}