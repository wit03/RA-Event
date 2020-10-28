import React from 'react'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
  root: {
    width: "95%",
    height: 60,
    position: "fixed",
    bottom: 12,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    zIndex: 1,
    boxShadow: "1px 3px 7px #00000024",
    margin: "auto",
    left: "50%",
    transform: "translate(-50%, 0)"
  },
});

const Navbar = () => {
    const classes = useStyles();
    return(
        <BottomNavigation
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Home" icon={<HomeRoundedIcon/>} />
        <BottomNavigationAction label="Mail" icon={<MailOutlineRoundedIcon/>} />
        <BottomNavigationAction label="Profile" icon={<AccountCircleRoundedIcon/>} />
      </BottomNavigation>
    )
}

export default Navbar