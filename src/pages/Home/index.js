import React from 'react'
// import style from './style.css'
import Header from './components/Header'
import { makeStyles } from '@material-ui/styles';

import Feed from './components/Feed'
import NavBar from './components/NavBar'
import { Container } from '@mui/material';
import {Box} from '@mui/material'


const useStyles = makeStyles({
    root: {
        display: 'flex', 
        flexDirection: 'column'
    }, 
    main: {
        height: '100vh', 
        display: 'flex', 
        padding:25
    }, 
    toolbar: {
        minHeight: 64
    }
})

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root} >
           <Header />
            <div className={classes.toolbar}></div>
            <main className={classes.main} >
                <Container maxWidth='lg'>
                    <Box display='flex'>
                      <NavBar />
                      <Feed />
                    </Box>
                </Container>

               
                
            </main>
        </div>
    )
}


export default Home;
