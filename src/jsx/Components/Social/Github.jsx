import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Github extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    let { profile, className } = this.props;
    className = className || "";
    return <div className={className}>
      <div className="github-card" data-github={this.props.profile} data-width="400" data-height="317" data-theme="medium"></div>
      <iframe src={"http://githubbadge.appspot.com/"+profile+"?s=1&a=0"} style={ {border: 0, height: "142px", width:"200px", overflow: "hidden"} } frameBorder="0"></iframe>
  </div>;
  }
}

Github.propTypes = {
  profile: PropTypes.string.isRequired
};
