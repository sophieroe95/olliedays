import React from "react";
import styles from "./Welcome.module.scss";

const Welcome = (props) => {
  const {
    welcomeStr,
    scrollStr,
  } = props.words;

  return (<div className={styles.welcome}>
    <h1>{welcomeStr}</h1>
    <h3>{scrollStr}</h3>
    <div className={styles.image}>

    </div>
  </div>);
}

export default Welcome;