import React, { useState } from "react";
import styles from "./Footer.module.scss";

const Footer = (props) => {
  const {
    subscribe,
    placeholder,
    submit
  } = props.words;
  const [isOpen, setIsOpen] = useState(false);

  const input = isOpen ? <><input type="text" placeholder = {placeholder}/> <button>{submit}</button></> : null;

  return ( <><div className={styles.footer}>
   <h2 onClick={() => setIsOpen(!isOpen)}>{subscribe}</h2>
   </div>
   <div className={styles.submitemail}>
   {input}
   
  </div> </>);
}
 
export default Footer;