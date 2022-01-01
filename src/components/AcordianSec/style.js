import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '50%',
      margin:'auto',
      marginTop:20,
      
      
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightRegular,
      
    },
    answers:{
        opacity: 0.5,
        color:"red",
        fontWeight:'bold',
    },
  }));
  export default useStyles