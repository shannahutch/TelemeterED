import React from 'react';
import { browserHistory } from 'react-router';
import styles from './style.css';


export default class Search extends React.Component {
  setState() {
    return {value: 'Search!'};
  }

  handleChange(event) {
    return {value: event.target.value};
  }

  render() {
    return (
      <input type="text"  value={this.value} onChange={this.handleChange} placeholder="Search" />
    );
  }
}
