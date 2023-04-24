import React, { Component, PropTypes } from 'react';
import load from 'load-script';

export default class LinkedIn extends Component {
  constructor(props) {
    super(props);
    load('https://platform.linkedin.com/in.js', function (err, script) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(script.src);
      }
    });
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
