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
                <div className="search">
                    <input className="searchVideo"
                           type="search"
                           placeholder="Video Search"
                           value={this.props.searchKey}
                           onChange={this.searchKeyChangeHandler.bind(this)}/>
                </div>
                <iframe width="1440" height="601" src="https://www.youtube.com/embed/6pxRHBw-k8M" frameborder="0" allowfullscreen></iframe>
            </div>
        );
    }
}

