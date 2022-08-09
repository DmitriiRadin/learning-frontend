import React from 'react';
import * as urls from '../../urls';
import './BackToHomeButton.css';

function BackToHomeButton() {
  return <a className="BackToHomeButton" href={urls.HomeUrl}>Back to Home</a>;
}

export default BackToHomeButton;
