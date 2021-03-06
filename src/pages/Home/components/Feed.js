import React from 'react'
import { makeStyles } from '@material-ui/styles';

import PostCard from '../../../components/PostCard'

const useStyles = makeStyles((theme) => ({
    root: {

    }, 
    
}))

const posts = [
   {
       id: 1, 
       author:{
           id: 1, 
           name: 'Soraia', 
           username: 'soraia', 
           avatar: '/images/avatar/avatar.png'
       }, 
       title: 'Criando um App', 
       date: 'April 7, 2020', 
       description: 'Fala pessoal', 
       hashtags: '#javascript', 
       image: '#/images/posts/logo512.png'
   }, 

   {
    id: 2, 
    author:{
        id: 2, 
        name: 'Camila', 
        username: 'cami', 
        avatar: '/images/avatar/avatar.png'
    }, 
    title: 'Criando um App', 
    date: 'April 7, 2020', 
    description: 'Fala pessoal', 
    hashtags: '#javascript', 
    image: '#/images/posts/post9.jpeg'
  
}

]

function Feed(){
    const classes = useStyles()
    return(
        <div className={classes.root}>
            {
               posts.map(post => (
                   <PostCard key={post.id} post={post} />
                
               ))
            }
        </div>
    )
}

export default Feed;