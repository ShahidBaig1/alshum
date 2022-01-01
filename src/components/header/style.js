import {makeStyles, alpha} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        
      },
      olp:
      {
        width:'100%',
        padding:0,
      },
      logoNtxt:{
          display:'flex',
          marginLeft:50,
          alignItems:'center', 
      },
      tool:{
        display:'grid',
        gridTemplateColumns:"1fr 1fr",
        justifyContent:'spaceBetween',
        backgroundColor:'#1D0E1D',
        width:'100%'
          
      },
     soltz:{
      marginLeft:'15px',
     },
      
      listhed:{
          display:'flex',
          justifyItems:'end',
          cursor: 'pointer',
          padding:2,
          margin:2,
          
        //   [theme.breakpoints.down('xs')]:{
        //     display: 'none',
        //   }
      },
      listite:{
        color:'white',
        textTransform:'capitalize',
        padding:'10px',
        textDecoration:'none',
        "&:hover": {
          color: 'orchid'
        },
        [theme.breakpoints.down('xs')]:{
          display: 'none',
        }
        
      },
      
      linksSection:{
        display:'flex',
        justifyContent:'spaceBetween',
        alignItems:'center',
      },
      logo1:{
        height:50,
        width:50,
        margin:2,
        padding:2,
        borderRadius:'100%',
        cursor:'pointer',
        margin:'auto'
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
   
    list: {
      width: 250,
    },
    
}));
export default useStyles;