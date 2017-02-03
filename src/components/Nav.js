import React from 'react';


var Nav = React.createClass({
  render: function () {
    return (
        <nav>
          <a href="/"><i className="fa fa-home"/> Home</a>|
          <a href="https://steinar.io"><i className="fa fa-rss"/> Blog</a>|
          <a href="https://gitlab.steinar.io"><i className="fa fa-gitlab"/> Gitlab</a>
        </nav>
    );
  }
});

export default Nav;
