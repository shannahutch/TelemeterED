import React from 'react';
import { browserHistory } from 'react-router';
import styles from './style.css';


export default class Search extends React.Component {
  signUp() {
    browserHistory.push('/home');
  }
  
  render() {
    return (
      <div className={styles.content}>
        <h1 className={styles.heading}>Search</h1>
        <p className={styles.lead}>Find your 4k video</p>
        <button className={styles.signUpButton} onClick={this.signUp}>Sign up</button>
      </div>
    );
  }
}
