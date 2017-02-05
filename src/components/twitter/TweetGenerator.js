import React from 'react';
import Tweet from './Tweet.js';
import  '../../assets/css/Tweet.css';


var greetings = [
  'Liberal media is lying. ',
  '@CNN is in a total meltdown with their FAKE NEWS ' ,
  'I HAVE NOTHING TO DO WITH RUSSIA - NO DEALS, NO LOANS, NO NOTHING! ',
  'FAKE NEWS - A TOTAL POLITICAL WITCH HUNT!'
];
var subjects = [
  'obamacare is a disaster. ',
  'these trade deals are a disaster. ',
  'mexico is taking our jobs. ',
  'I have never seen a thin person drinking Diet Coke. ',
  'Stop #CrookedHillary from spreading her lies. ',
  'We must keep "evil" out of our country! ',
  'Having a good relationship with Russia is a good thing, not a bad thing. Only "stupid" people, or fools, would think that it is bad! ',
  '@katyperry is no bargain but I don\'t like John Mayer--he dates and tells--be careful Katy (just watch!). ',
  'Amazing how the haters & losers keep tweeting the name “F**kface Von Clownstick” like they are so original & like no one else is doing it...',
];
var exclamations = [
  'SAD!',
  'FAKE NEWS',
  '#FAKENEWS'
  '#DISHONEST',
  'MAKE AMERICA GREAT AGAIN',
  '#MAGA'
];

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
    var newSentence = subjects[getRandomInt(0,4)] + exclamations[getRandomInt(0,4)];
    this.setState({ sentences: [newSentence].concat(this.state.sentences)});
  },
  render: function () {
    return (
      <div>
        <button className="twitterbutton" onClick={this.randomSentence}>TWEET</button>
        {this.state.sentences.map(sentence => (
          <Tweet key={sentence} tweet={sentence} />
        ))}
      </div>

    );
  }
});

export default TweetGenerator;
