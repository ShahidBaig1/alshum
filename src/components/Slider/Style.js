import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  outer: {
    display: "grid",
    gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr',
    justifyContent: "spaceAround",
    backgroundColor: "#241125",
    
    [theme.breakpoints.down('md')]:{
      display: 'grid',
      gridTemplateColumns:'1fr 1fr 1fr'
    },
    [theme.breakpoints.down('sm')]:{
      display: 'grid',
      gridTemplateColumns:'1fr 1fr'
    },
    [theme.breakpoints.down('xs')]:{
      display: 'grid',
      gridTemplateColumns:'1fr'
    }
    
  },
  inner: {
    "& img": {
      width: 250,
      height:200,
      boxShadow: "0 0 15px rgb(216 98 212 / 53%)",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      margin: "5px",
      marginBottom: "0",
      marginTop: "2.5rem"
    },
    "& h3": {
      backgroundColor: "#331f32",
      padding: "1px",
      fontWeight: "700",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
      fontSize: "16px",
      color: "#fbd725",
      margin: "0 5px 5px 5px",
      padding: "17px 5px",
      fontFamily: "'Roboto', sans-serif",
    },
  },
}));
export default useStyles;
