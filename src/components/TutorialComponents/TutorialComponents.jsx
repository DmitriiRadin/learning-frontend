import React from 'react';
import BackToHomeButton from '../BackToHomeButton/BackToHomeButton';
import './TutorialComponents.css';

function TutorialTemplate({ title, children, tutorialReference }) {
  return (
    <div>
      <header>
        <BackToHomeButton />
        <h1>{title}</h1>
      </header>
      <div>
        {children}
      </div>
      <footer>
        <p><a href={tutorialReference}>Read on MDN</a></p>
      </footer>
    </div>
  );
}

function Preview({ children }) {
  return (
    <div className="preview">
      <div className="wrapper">
        {children}
      </div>
    </div>
  );
}

function TutorialTask({ children, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export { TutorialTemplate, Preview, TutorialTask };
