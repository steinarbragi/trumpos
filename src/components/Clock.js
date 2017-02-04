import React from 'react';

var Clock = React.createClass({

  getInitialState: function () {
    return {date: new Date()};
  },

  componentDidMount: function() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  },

  componentWillUnmount: function() {
    clearInterval(this.timerID);
  },

  tick() {
    this.setState({
      date: new Date()
    });
  },

  render: function () {
    return (
      <div>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
});

export default Clock;
