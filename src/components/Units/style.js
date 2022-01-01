import {makeStyles, alpha} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({ 
butt: {
    marginTop: 80,
    fontSize: 25,
    padding: '24px 50',
    borderRadius: 50,
    border: '3px solid orchid',
    backgroundColor: '#190E1A',
    color: 'white',
    textTransform: 'uppercase',
   cursor: 'pointer',
   marginBottom:'1.5rem',
   "&:hover": {
    backgroundColor: '#180E19'
  }
    
  }
    
}));
export default useStyles;









