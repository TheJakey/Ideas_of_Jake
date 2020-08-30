import React, { useState } from 'react';
import SnackBarCustom from './Notifications/SnackBarCustom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// font
import './NavBar.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    justifyContent: 'left' 
  },
  title: {
    flex: 2,
    fontSize: 24,
    fontFamily: "Atmospheric",

    textAlign: "center"
  },
  center: {
    flexDirection: 'row', // a must
    alignItems: 'center', // to make items center vertically.
    justifyContent: 'center' // to make the second item center horizontally.
  }
}));



export default function ButtonAppBar() {
  const classes = useStyles();

  const [showCool, setShowCool] = useState();

  function chengeShowCoolState() {
      let changeState = showCool;
      changeState = !changeState;

      setShowCool(changeState);
  }

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          Ideas of Jake
      </Typography>
          <Button color="inherit" onClick={ () => chengeShowCoolState() }>Show me smthng cool</Button>
        </Toolbar>
      </AppBar>
      <SnackBarCustom alert={showCool} />
    </div>
  );
}
