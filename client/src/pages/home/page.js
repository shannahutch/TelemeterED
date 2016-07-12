import React from "react";
import styles from "./style.css";


export default class Home extends React.Component {
  
  render() {
    return (
      <div className={styles.content}>
        <h1>Landing</h1>
        <p className={styles.welcomeText}>Landing</p>
        
      </div>
    );
  }
}
