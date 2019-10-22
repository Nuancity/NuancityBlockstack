import React, { useState, useEffect } from 'react';
import NewUserPage from './views/NewUserPage.js';
import Nav from './components/Nav.jsx';
import { SinglePost } from './views/SinglePost.js';
import Landing from './views/Landing.js';
import Topics from './views/Topics.js';
import Dashboard from './views/Dashboard.js';
import TopicFeed from './views/TopicFeed.js';
import { Route } from "react-router-dom";
import { UserSession, AppConfig } from 'blockstack';
import './App.css';

const App = () => {

  const appConfig = new AppConfig();
  const userSession = new UserSession( { appConfig: appConfig } );

  const handleSignIn = ( e ) =>  {
    e.preventDefault();
    userSession.redirectToSignIn( 'http://localhost:3000/newUser' );
  }

  const handleSignOut = ( e ) => {
    e.preventDefault();
    userSession.signUserOut( window.location.origin );
  }

  const [ user, setUser ] = useState(
    {
      authed: false,
      data: null
    }
  );

  useEffect( ( ) => {
    if ( !userSession.isUserSignedIn() && userSession.isSignInPending() ) {
      userSession.handlePendingSignIn().then( ( userData  ) => {
        setUser( 
          {
            authed: true,
            data: userData
          } 
      )})
  }});

    return (
      <div className = "App" >
        <Nav 
          user = { user }
          session = { userSession }
          signIn = { handleSignIn } 
          signOut = { handleSignOut } 
        />
        <Route 
          path = '/newUser' 
          component = { () => <NewUserPage 
            userSession = { userSession } 
            handleSignOut = { handleSignOut } 
            handleSignIn = { handleSignIn } 
            />
          }
        />
        <Route exact path='/' component={ Landing } />
        <Route path='/topics' component={ Topics } />
        <Route path='/topic' component={ TopicFeed } />
        <Route path='/dashboard' component={ Dashboard } />
        <Route path='/post' component={ SinglePost } />
      </div>
    );

}


export default App;


// componentWillMount() {
//   const session = this.userSession
//   if(!session.isUserSignedIn() && session.isSignInPending()) {
//     session.handlePendingSignIn()
//     .then((userData) => {
//       if(!userData.username) {
//         throw new Error('This app requires a username.')
//       }
//       window.location = `/kingdom/${userData.username}`
//     })
//   }
// }
