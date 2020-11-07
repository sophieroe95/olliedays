import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import Navigation from "./components/Navigation";
import Routes from './containers/Routes/Routes';
import firebase, { provider, facebookProvider } from "./firebase";

import words from "./data/data.js";
import library from "./data/fa-library";

const App = () => {
  const [user, setUser] = useState(null);
  console.log(useState(null));
  // a function that is going to b called in Navbar.jsx to sign a user in using our auth provider (Google)
  const signIn = () => {
    firebase.auth().signInWithRedirect(provider);
  }

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInFacebook = () => {
    firebase
      .auth()
      .signInWithRedirect(facebookProvider);
  };

  const signOutFacebook = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        setUser(user);
        console.log(user.displayName);
      } else {
        setUser(null);
      }
    })
  }

  useEffect(() => {
    getUser();
  }, [])

  const userNameCheck = 
   user ? <span>{user.displayName}</span>: <span>guest</span>;

  console.log(user)
  return (<>
    <section className={styles.nav}>
      <Navigation words={words}
        user={user}
        signIn={signIn}
        signOut={signOut}
        signInFacebook={signInFacebook}
        signOutFacebook={signOutFacebook}/>
    </section>
    <p className={styles.user}>Hello {userNameCheck}</p>
    <section> 
      <Routes user={user} />
    </section>
  </>);
}

export default App;
