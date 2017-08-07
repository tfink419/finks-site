import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import load from 'load-script';

export default class LinkedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { props };
    load('http://platform.linkedin.com/in.js', function (err, script) {
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
    let { className, profile } = this.props;
    className = className || "";
    return <div className={className}>
      <script type="IN/MemberProfile" data-id={"https://www.linkedin.com/in/"+profile} data-format="inline" data-related="false"></script>
    </div>;
  }
}

LinkedIn.propTypes = {
  profile: PropTypes.string.isRequired
};
