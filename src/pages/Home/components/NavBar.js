import React from 'react'
import { makeStyles } from '@material-ui/styles';
import {Paper} from '@mui/material'
import {Button} from '@mui/material'
import { ListSubheader } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemText} from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//     root:{
//         padding: theme.spacing(2),// 8*2
//         width: 275
//     }, 
//     button: {
//         width: '100%'
//     }
// }))
const useStyles = makeStyles({
    root: {
        padding: 16, 
        width: 275, 
        marginRight: 16
    }, 
    button:{
        width: '100%'
    }
})

const tags = [
    {id: 1, name: 'java'}, 
    {id: 2, name: 'javascript'}, 
    {id: 3, name: 'dotnet'}, 
    {id: 4, name: 'php'}, 
]

function NavBar(){
 const classes = useStyles();

    return(
       <Paper className={classes.root}>
          <Button variant='outlined' color='secondary' className={classes.button}>Registrar Gratis</Button>
          <ListSubheader>
              {`Tags em alta`}
          </ListSubheader>
          {
              tags.map((item) => (
                  <ListItem dense button key={`item-${item.id}-${item.name}`}>
                      <ListItemText primary={`#${item.name}`}>

                      </ListItemText>
                  </ListItem>
              ))
          }
          <ListItem button>
              Exibir mais Tags
          </ListItem>
       </Paper>
    )
}

export default NavBar;