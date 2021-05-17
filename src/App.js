import axios from 'axios'
import React, { useState } from 'react'
import { Context } from './components/Context'
import { Route, Switch } from 'react-router-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Landing from './components/Landing/Landing'
import Homepage from './components/Homepage'

import './App.css';

function App() {
  const baseURL = "http://localhost:4000"
  
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState({})

    //Getting all the posts
    async function getPosts () {
      const url = `${baseURL}/posts/`
      await axios(url)
      .then(res => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch(error => console.error(error))
    }
    // getPosts()
    console.log(`console posts: ${posts}`)

  return (
    <div className="App">
      <Switch>
        <Context.Provider value={{baseURL, user, setUser, posts, setPosts}}>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/homepage' component={Homepage}/>
        </Context.Provider>
      </Switch>
    </div>
  );
}

export default App;
