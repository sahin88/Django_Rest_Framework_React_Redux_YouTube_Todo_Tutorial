import React from 'react'
import  './css/common.css'
import Layout from'./hocs/Layout'
import  Post from './container/Post'
import  PostDetail from './container/PostDetail'
import  Signin from './container/Signin'
import  Signup from './container/Signup'
import NotFound from './components/NotFound'
import  ProtectedRoute from './components/ProtectedRoute'
import {BrowserRouter as Router, Route, Switch} from  'react-router-dom'
function App() {
  return (
    <Router>
    <Layout>
      <Switch>
        <ProtectedRoute exact path="/" component={Post} />
        <ProtectedRoute exact path="/update/:id" component={PostDetail} />
        <Route exact path='/login' component={Signin}/>
        <Route exact path='/signup' component={Signup}/>
        <Route component={NotFound}/>
      </Switch>

    </Layout>
  </Router>
  );
}

export default App;
