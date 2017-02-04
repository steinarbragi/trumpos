import React from 'react';
import trumpFace from '../../assets/trump.jpg';


var Tweet = React.createClass({
  render: function () {
    if(this.props.tweet) {
      return (
          <div className="tweet">
            <img src={trumpFace} className="trumpProfile" alt="logo" />
            <p>{this.props.tweet}</p>
          </div>
      );
    }
    else return <div></div>;
  }
});

export default Tweet;
