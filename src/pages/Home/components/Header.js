import React from 'react'
import { Button, Toolbar } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@mui/material/AppBar';
import {SvgIcon} from '@mui/material'
import {Bell} from 'react-feather'
import Avatar from '@mui/material/Avatar'


const useStyles = makeStyles({
  appBar:{
    boxShadow:'none'
  }, 
  img: {
      maxHeight: 55
  }, 
  grow:{
      flexGrow: 1
  }, 
  userSection:{
      display: 'flex', 
      alignItems: 'center'
  }, 
  button:{
      marginRight: 10
  }, 
 bell:{
     marginRight:19
 }
})


function Header()
{
    const classes = useStyles();
    return(
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <img src="/images/logo.png" alt="logo" className={classes.img}/>
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Novo Post
                    </Button>
                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt="Remy Sharp" src="/" />
                </div>
            </Toolbar>
        </AppBar>
        
    )
}

export default Header