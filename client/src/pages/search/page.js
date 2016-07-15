import React from 'react';
import { browserHistory } from 'react-router';
import styles from './style.css';


export default class Search extends React.Component {
  setState () {
    return {
      title: '',
      url: ''
    };
  }
  
  searchKeyChangeHandler(event) {
        let searchKey = event.target.value;
        this.setState({searchKey: searchKey});
        this.props.onChange(searchKey);
  }

  //   componentDidMount() {
  //   this.serverRequest = $.get(this.props.source, function (result) {
  //     var videoData = result[0];
  //     this.setState({
  //       title: videoData.title,
  //       url: videoData.url
  //     });
  //   }.bind(this));
  // }

    clearText() {
        this.setState({searchKey: ""});
        this.props.onChange("");
    }

    render() {
        return (
            <div className="search_box">
                <h1>Telemeter 4k Video Database</h1>
                <iframe width="700" height="601" src={"https://www.youtube.com/embed/6pxRHBw-k8M"} frameBorder="0" allowFullScreen></iframe>
                <div className="search">
                    <input className="searchVideo"
                           type="search"
                           placeholder="Video Search"
                           value={this.props.searchKey}
                           onChange={this.searchKeyChangeHandler.bind(this)}/>
                </div>
                <ul>
                  <li>click: <a href={'https://www.youtube.com/embed/6pxRHBw-k8M'}>video</a></li>
                  <li>Title: {'this.props.tile'}</li>
                  <li>Teacher: {'this.props.teacher'}</li>
                  <li>Team: {'this.props.team'}</li>
                  <li>Summary: {'this.props.summary'}</li>
                </ul>
            </div>
        );
    }
}

