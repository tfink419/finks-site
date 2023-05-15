const React = require('react');
const ReactDOM = require('react-dom');
const FinksSite = require('./Components/FinksSite.jsx').default;
// const AdminPanel = require('./Components/AdminPanel.jsx').default;
const _ = require('lodash');

ReactDOM.render(<FinksSite siteData={window.windowSiteData} />,
  document.getElementById('finks-site')
);
