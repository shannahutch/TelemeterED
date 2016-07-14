import React from 'react';
import { browserHistory } from 'react-router';
import styles from './style.css';


export default class Search extends React.Component {
  searchKeyChangeHandler(event) {
        let searchKey = event.target.value;
        this.setState({searchKey: searchKey});
        this.props.onChange(searchKey);
    }

    componentDidMount() {
    this.serverRequest = $.get(this.props.source, function (result) {
      var videoData = result[0];
      this.setState({
        title: videoData.title,
        url: videoData.url
      });
    }.bind(this));
  }

    clearText() {
        this.setState({searchKey: ""});
        this.props.onChange("");
    }

    render() {
        return (
            <div className="slds-form-element">
                <div className="slds-form-element__control search-bar">
                    <input className="slds-input"
                           type="search"
                           placeholder="Video Search"
                           value={this.props.searchKey}
                           onChange={this.searchKeyChangeHandler.bind(this)}/>
                </div>
            </div>
        );
    }
}

