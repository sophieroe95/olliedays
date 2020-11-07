import React from "react";
import styles from "./Navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";

const Navigation = (props) => {
  const {
    signIn, signOut, user
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
 
  return ( <div className={styles.navigation}>
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
        <section>{getSignInOutJsx()}</section>
   <h2>{name}</h2>
  </div> );
}
 
export default Navigation;