import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  main:{
      margin:'auto 0',
      backgroundColor: '#1E1F25',
      padding:'60 0',
      textAlign: 'center',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column'
  },
  h:{
      marginTop:'3rem',
      marginBottom:0,
      color: 'white',
    fontSize: 28,
    fontWeight: 700
  },
  p:{
    color: 'white',
  fontSize: 12,
  fontWeight: 400
},
btns:{
    border:'1px solid white',
    width:120,
    backgroundColor: '#1E1F25',
    marginBottom:'2rem',
    color: 'white',
}
}));
export default useStyles;
