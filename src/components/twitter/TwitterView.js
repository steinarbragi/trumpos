import React from 'react';
import TweetGenerator from './TweetGenerator.js';
import Header from '../Header.js';


var TwitterView = React.createClass({
  render: function () {
    return (
        <div>
          <Header />
          <TweetGenerator />
        </div>
    );
  }
});

export default TwitterView;
