import React from 'react';
import Tweet from './Tweet.js';

var greetings = ['hello ','Good morning, ','The sun is shining again today thanks to me, '];
var subjects = ['liberal media is lying. ','obamacare is a disaster. ', 'these trade deals are a disaster. ','mexico is taking our jobs. '];
var exclamations = ['SAD!','FAKE NEWS','DISHONEST','MAKE AMERICA GREAT AGAIN'];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
var TweetGenerator = React.createClass({
  getInitialState: function () {
    return {sentences: []};
  },

  randomSentence: function()  {
    var newSentence = greetings[getRandomInt(0,3)] + subjects[getRandomInt(0,4)] + exclamations[getRandomInt(0,4)];
    this.setState({ sentences: this.state.sentences.concat([newSentence])});
  },
  render: function () {
    return (
      <div>
        <button onClick={this.randomSentence}>TWEET</button>
        {this.state.sentences.map(sentence => (
          <Tweet tweet={sentence} />
        ))}
      </div>

    );
  }
});

export default TweetGenerator;
