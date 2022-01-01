import {makeStyles, alpha} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    outer:{
        backgroundColor: '#150D16',
        height:300,
        marginBottom:20,
        marginTop:'0px'
    },
    hedings:{
       color:'white',
       fontSize:'50px',
       fontWeight:'bold',
       textShadow: "3px 3px 4px #891f85",
    },
    hedsix:{
        color: '#fbd725',
        fontSize:20,
        textAlign:'center',
        textShadow:' 0 0 7px #fbd725',
        marginTop:0,
    },
    
}));
export default useStyles;