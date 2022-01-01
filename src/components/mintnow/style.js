import {makeStyles, alpha} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    
    imgcont:{
        height:200,
        width:250,
        borderRadius:10,
        boxShadow: '0 0 15px rgb(216 98 212 / 53%)',
        border: '1px solid orchid!important',
    },
    btn:{
        backgroundColor: 'gray',
        color:'white',
        width:180,
        margin:10,
        borderRadius:20,
        backgroundColor:'#7A3977',
        border:'1px solid 7A3977 ',
        "&:hover": {
          backgroundColor: 'orchid'
        },
        [theme.breakpoints.down('md')]:{
          display: 'none',
        }
        
    },
    
    

    
    
}));
export default useStyles;