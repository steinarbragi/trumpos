import React from 'react';
import TweetGenerator from './TweetGenerator.js';
import Tweet from './Tweet.js';


var TwitterView = React.createClass({
  render: function () {
    return (
        <div>
          <TweetGenerator />
        </div>
    );
  }
});

export default TwitterView;
