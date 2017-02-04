import React from 'react';
import trumpFace from '../../assets/img/trump.jpg';
import  '../../assets/css/Tweet.css';

var Tweet = React.createClass({
  render: function () {
    if(this.props.tweet) {
      return (
          <div className="tweet">
            <img src={trumpFace} className="trumpProfile" alt="logo" />
            <span className="realName">Donald J. Trump</span>
            <span className="userName">@theRealDonaldTrump</span>
            <p>{this.props.tweet}</p>
          </div>
      );
    }
    else return null;
  }
});

export default Tweet;
