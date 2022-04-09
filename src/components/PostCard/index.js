import React from 'react'
import { makeStyles } from '@material-ui/styles';

import {Card } from '@mui/material';
import { CardHeader } from '@mui/material';
import {CardContent } from '@mui/material';
import {CardActions } from '@mui/material';
import {CardActionArea } from '@mui/material';
import { Typography } from '@mui/material';
import {Avatar} from '@mui/material'
import {IconButton} from '@mui/material'
import {FavoriteIcon} from '@mui/material'
import {BookmarkIcon} from '@mui/material'
import {MessageIcon} from '@mui/material'

const useStyles = makeStyles({
   root:{
    
   }, 
   subheader:{
       display: 'flex', 
       alignItems: 'center'
   }, 
   caption: {
       marginRight: 8
   }, 
   message:{
       height: 'auto', 
       marginBottom: 16, 
       padding: '0 24px'
   }, 
   image: {
       height: 300, 
       width: '100%', 
       maxWidth: '100%'
   }, 
   content: {
       padding: 0
   }
  })
  



function PostCard ({post}) {
    const classes = useStyles()
    return(
        <Card className={classes.root}>
            <CardHeader
               avatar={<Avatar src={post.author.avatar}/>} 
              title={<Typography variant="h6">{post.title}</Typography>}
              subheader={
                  <div className={classes.subheader}>
                    <Typography variant="caption">
                        {'Avaliado por'}
                    </Typography>
                    <Typography variant="subtitle2">
                        {post.author.name}
                    </Typography>
                    <Typography variant = "caption">
                        {post.date}
                    </Typography>
                  </div>
              }
            />
            <CardContent className={classes.content}>
                <Typography className={classes.message} variant="body1">
                    {post.hashtags}
                </Typography>
                 <CardActionArea>
                     <img src={post.image} className={classes.image} alt="img" />
                 </CardActionArea>
            </CardContent>
            <CardActions>

            </CardActions>
        </Card>
    )
}

export default PostCard