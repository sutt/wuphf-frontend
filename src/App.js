import axios from 'axios'  // will is best
import React, { useState } from 'react'
import { Context } from './components/Context'
import { Route, Switch } from 'react-router-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Landing from './components/Landing/Landing'
import Homepage from './components/Homepage'
import ProfilePage from './components/ProfilePage'
import Bookmarks from './components/Bookmarks'
import './App.css';

function App() {
  const baseURL = "https://wuphf-database.herokuapp.com"
  // const baseURL = "http://localhost:4000"
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  //Getting all the posts
  async function getPosts () {
    const url = `${baseURL}/posts/`
    await axios.get(url)
    .then(res => {
      setPosts(res.data)
    })
    .catch(error => {
      console.log("axios didnt work")
      console.log(error)
    })
  }

  // axios update request
  async function updatePost (postId, newContent) {
    const url = `${baseURL}/posts/${postId}`
    const updatedPosts = await axios.put(url, newContent)
    setPosts(updatedPosts.data)
  }

  //Like function
  function likePost(post, username){
    const tempLikes = [...post.likes]
    if (tempLikes.includes(username)) {
      const index = tempLikes.indexOf(username)
      tempLikes.splice(index, 1)
      updatePost(post._id, {likes: tempLikes})
    } else {
      tempLikes.push(username)
      updatePost(post._id, {likes: tempLikes})
    }
  }

  return (
    <div className="App">
      <Switch>
        <Context.Provider value={{baseURL, user, setUser, posts, setPosts, getPosts, updatePost, loggedIn, setLoggedIn, likePost}}>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/homepage' component={Homepage}/>
          <Route exact path='/bookmarks' component={Bookmarks}/>
          <Route exact path='/profile/:username' 
            render={(routerProps) => <ProfilePage match={routerProps.match}/>}
          />
        </Context.Provider>
      </Switch>
    </div>
  );
}

export default App;