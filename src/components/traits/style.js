import {makeStyles, alpha} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    maincon:{
        display:'grid',
        gridTemplateColumns:'1fr 1fr 1fr 1fr',
        backgroundColor: '#1E1F25',
        
          [theme.breakpoints.down('sm')]:{
            display:'grid',
            gridTemplateColumns:'1fr 1fr'
          },
          [theme.breakpoints.down('xs')]:{
            display:'grid',
            gridTemplateColumns:'1fr'
          },
    },
    
    inners:{
        textAlign: 'center',
       
    },
    hedall:{
    fontSize: 48,
    fontWeight: 700,
    textAlign: 'center',
    color: '#fbd725',
    textShadow: '0 0 7px #fbd725',
    },
    innerhed:{
        display:'block',
        fontSize:15,
        textTransform:'uppercase',
        color:'white',

    },
}));
export default useStyles;