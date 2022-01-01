import {makeStyles, alpha} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mapsec:{
        display:'grid',
        gridTemplateColumns:'1fr 1fr 1fr 1fr',
        gridGap:10,
        justifyContent:'spaceAround',
        alignItems:'center',
        [theme.breakpoints.down('md')]:{
            display:'grid',
            gridTemplateColumns:'1fr 1fr'
          },
          [theme.breakpoints.down('xs')]:{
            display:'grid',
            gridTemplateColumns:'1fr'
          }

    }
    
}));
export default useStyles;