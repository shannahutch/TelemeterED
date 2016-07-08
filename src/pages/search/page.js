import React from 'react';
import { browserHistory } from 'react-router';
import styles from './style.css';


export default class LoginPage extends React.Component {
  signUp() {
    browserHistory.push('/home');
  }
  
  render() {
    return (
      <div className={styles.content}>
      <h1>The GigTank presents TelemeterED</h1>
    <div id="container"></div>
    <!-- Will it always be type="text/babel .jsx file to use bable-->
    <script type="text/babel">

   var SearchExample = React.createClass({

    getInitialState: function(){
        return { searchString: '' };
    },

    handleChange: function(e){

        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.

        this.setState({searchString:e.target.value});
    },

    render: function() {

        var libraries = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){

            // We are searching. Filter the results.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }

        return <div>
                    <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />

                    <ul> 

                        { libraries.map(function(l){
                            return <li>{l.name} <a href={l.url}>{l.url}</a></li>
                        }) }

                    </ul>

                </div>;

    }
});

                                                                                                                                                             
var libraries = [

    { name: 'GigTank', url: 'http://www.thegigtank.com/gigtank-365-selects-startup-teams-for-summer-accelerator'},
    { name: 'STEM Innovation Hub', url: 'http://vimeo.com/123622637'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Amazon EC2', url: 'https://aws.amazon.com/ec2/?nc2=h_l3_c'},
    { name: 'AWS Elastic Beanstalk', url: 'https://aws.amazon.com/elasticbeanstalk/'},
    { name: '4k Example', url: 'https://youtu.be/6pxRHBw-k8M'},
    { name: 'Mootools', url: 'h<iframe width="1440" height="601" src="https://www.youtube.com/embed/6pxRHBw-k8M" frameborder="0" allowfullscreen></iframe>'},
];

// Render the SearchExample component on the page

ReactDOM.render(
    <SearchExample items={ libraries } />,
    document.getElementById('container')
    );

    </script>
      </div>
    );
  }
}