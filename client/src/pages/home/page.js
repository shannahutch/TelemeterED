import React from "react";
import styles from "./style.css";
import { Link } from 'react-router'

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

              
