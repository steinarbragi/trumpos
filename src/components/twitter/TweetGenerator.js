import React from 'react';

var greetings = ['hello ','Good morning, ','The sun is shining again today thanks to me, ', 'What\'s the deal with the fact that, '];
var subjects = ['liberal media is lying. ','obamacare is a disaster. ', 'these trade deals are a disaster. ','mexico is taking our jobs. '];
var exclamations = ['SAD!','FAKE NEWS','DISHONEST','MAKE AMERICA GREAT AGAIN'];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
var TweetGenerator = React.createClass({
  getInitialState: function () {
    return {sentence: ''};
  },

  randomSentence: function()  {
    var newSentence = greetings[getRandomInt(0,4)] + subjects[getRandomInt(0,4)] + exclamations[getRandomInt(0,4)];
    this.setState({ sentence: newSentence});
  },
  render: function () {
    return (
      <div>
        <button onClick={this.randomSentence}>TWEET</button>
        <p>{this.state.sentence}</p>
      </div>

    );
  }
});

export default TweetGenerator;
