
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    mainco:{
        display:'flex',
        justifyContent:'space-around',
        justifyItems:'center',
        
        padding: 30,
        backgroundColor:'#1E1F25',
        
        [theme.breakpoints.down('xs')]:{
            display:'grid',
            gridTemplateColumns:'1fr'
          },
        
        
    },
    headings:{
        color:'#fbd725',
    },
    hed2:{color:'#8c2487'},
    icns:{
        padding:"20px"
    }
    
}));
export default useStyles;
