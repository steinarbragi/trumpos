import React from 'react';

var words = ['hæ ','ég ', 'heiti ', 'steinar '];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
var sentence = '';
var TalkingMachine = React.createClass({
  getInitialState: function () {
    return {sentence: ''};
  },

  sayRandomWord: function()  {
    var newSentece = this.state.sentence + words[getRandomInt(0,4)];
    this.setState({ sentence: newSentece});
  },
  render: function () {
    return (
      <div>
        <button onClick={this.sayRandomWord}>TALK</button>
        <p>{this.state.sentence}</p>
      </div>

    );
  }
});

export default TalkingMachine;
