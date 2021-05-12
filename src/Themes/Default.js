import {createMuiTheme} from '@material-ui/core/styles';


export default createMuiTheme({
    palette:{
        primary:{
           main:'#007F5F'
            
        },

        background:{
            main:'#F4F9E9'
        }
        
    },
    typography:{
        fontFamily:[
            'Roboto'
        ],
        fontSize:14,

        h5:{
            fontWeight:600
        }
           
        
    }
})