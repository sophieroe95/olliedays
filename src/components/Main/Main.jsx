import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Main.module.scss";

const Main = (props) => {
  const [isFav, setIsFav] = useState(false);
  const starIcon = isFav ? ["fas", "star"] : ["far", "star"];

  const [isFave, setIsFave] = useState(false);
  const starryIcon = isFave ? ["fas", "star"] : ["far", "star"];
  const {
    botswana,
    colombia,
    lorem,
  } = props.words;

  const toggleFav = (e) => {
    e.stopPropagation();
    setIsFav(!isFav);
  };

  const toggleFave = (e) => {
    e.stopPropagation();
    setIsFave(!isFave);
  };


  const [count, setCount] = useState(0);

  const reduceCount = () => {
    setCount(prevCount => prevCount - 1);
  }
  const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <div className={styles.botswana}></div>
        <h2>{botswana}<span onClick={toggleFav}>
          <FontAwesomeIcon icon={starIcon} />
        </span></h2>
      </div>
      <div className={styles.text}>
        <p>{lorem}</p>
      </div>
      <div className={styles.text}>
        <p>{lorem}</p>
      </div>
      <div className={styles.image}>
        <div className={styles.columbia}></div>
        <h2>{colombia}<span onClick={toggleFave}>
          <FontAwesomeIcon icon={starryIcon} />
        </span></h2>
      </div>
      <div className={styles.largeimage}>
      </div>
      <div className={styles.holidaynumber}><h3>Number of Olliedays I have been on</h3>
        <button onClick={reduceCount}>-</button>
        <span>{count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
    </div>);
}

export default Main;