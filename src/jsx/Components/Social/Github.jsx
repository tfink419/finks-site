import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import load from 'load-script';

export default class Github extends Component {
  constructor(props) {
    super(props);
    this.state = { props };
    load('http://cdn.jsdelivr.net/github-cards/latest/widget.js', function (err, script) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(script.src);
      }
    });
  }
  
  componentWillMount() {
    console.log(this.state, this.props);
  }

  componentWillReceiveProps(nextProps) {
    let nextState = { nextProps };
    this.setState(nextState);
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    let { profile, className } = this.props;
    className = className || "";
    return <div className={className}>
      <div className="github-card" data-github={this.props.profile} data-width="400" data-height="317" data-theme="medium"></div>
  </div>;
  }
}

Github.propTypes = {
  profile: PropTypes.string.isRequired
};
