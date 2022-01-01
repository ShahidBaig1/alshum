import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
 import useStyles from "./style.js"
import { List, ListItem } from '@material-ui/core';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'



export default function Hed() {
  const classes = useStyles();
 
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.olp} >
        <div className={classes.tool}>
        <div className={classes.logoNtxt}>
          <Link to="/">
            <Typography className={classes.title} variant="h6" noWrap>
            <img className={classes.logo1} src={logo} alt='logo here'/>
            
          </Typography>
          </Link>
          <div className={classes.noman} >
          <h3 className={classes.soltz}>Solthz </h3>
          
          </div>
         
          </div>
          <div className={classes.linksSection}>
            <List className={classes.listhed}>
            <Link to="/home">
              <ListItem className={classes.listite}>
              Home
              </ListItem>
              </Link>
              <Link to="/home">
              <ListItem className={classes.listite}>Mint</ListItem>
              </Link>
              <Link to="/home">
              <ListItem className={classes.listite}>stats</ListItem>
              </Link>
              <Link to="/home">
              <ListItem className={classes.listite}>roadmap </ListItem>
              </Link>
              <Link to="/home">
              <ListItem className={classes.listite}>team</ListItem>
              </Link>
              <Link to="/home">
              <ListItem className={classes.listite}>FAQ</ListItem>
              </Link>
            </List>
            <div>
            <Button className={classes.btn}>connect to wallet</Button>
          </div>
          
          </div>
         
          <div className={classes.grow} />
          </div>
         </Toolbar>
       
         </AppBar>
        </div>
        
  );
}