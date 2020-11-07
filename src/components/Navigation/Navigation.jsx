import React from "react";
import styles from "./Navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";

const Navigation = (props) => {
  const {
    signIn, signOut, user, signInFacebook, signOutFacebook
  } = props;
  const { name} = props.words;


 
  const getSignInOutJsx = () => {
    return user ? (
      <span className={styles.faStyles}>
        <FontAwesomeIcon icon={"sign-out-alt"} onClick={signOut} />
      </span>
    ) : (
      <span className={styles.faStyles}>
        <FontAwesomeIcon icon={["fab", "google"]} onClick={signIn} />
      </span>
    );
  };
  const getSignInOutFb = () => {
    return user ? (
      <span className={styles.faStyles}>
        <FontAwesomeIcon icon={"sign-out-alt"} onClick={signOutFacebook} />
      </span>
    ) : (
      <span className={styles.faStyles}>
        <FontAwesomeIcon icon={["fab", "facebook"]} onClick={signInFacebook} />
      </span>
    );
  };
 

  return ( <div className={styles.navigation}>
        <section class="toggle-button">
            <i class="fas fa-bars fa-2x"></i>
        </section>
        <Link to ="/">
        <section class="toggle-button">
           home
        </section>
        </Link>
        
        <Link to ="/profile">
        <section class="toggle-button">
           profile
        </section>
        </Link>
        <Link to ="/favourites">
        <section class="toggle-button">
           favourites
        </section>
        </Link>
        <div className={styles.navbarlinks}>
        <section class="navbar-links">
            <ul class="nav-items">
                <li><a href="#welcome">HOME</a></li>
                <li><a href="#main">MAIN</a></li>
                <li><a href="#contact-section">CONTACT</a></li>
            </ul>
        </section>
        
        
        </div>
        <section>{getSignInOutJsx()}</section>
        <section>{getSignInOutFb()}</section>
   <h2>{name}</h2>
  </div> );

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

// added using the toggle with an active class to avoid 'if'
toggleButton.addEventListener('click', () => {
  // get navbar - access all the different classes on it - toggle active class
  navbarLinks.classList.toggle('active');
})
}
 
export default Navigation;