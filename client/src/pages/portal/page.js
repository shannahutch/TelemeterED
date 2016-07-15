import React from "react";
import styles from "./style.css";
import { browserHistory } from 'react-router';


export default class Portal extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <h1>Portal</h1>
        <p className={styles.welcomeText}>Coming Soon!</p>
        <h2 className={styles.formHead}>Create Video</h2>
        <form onSubmit={this.submit} className='myForm'>
            <input label="Title:" valChange={this.titleChange} placeholder='Create Title'/>
            <input label="Teacher:" valChange={this.teacherChange} placeholder='Teacher'/>
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}