import React from 'react';
import './TutorialsMenu.css';

function TutorialsMenu(props) {
  const { children } = props;

  return <ol className="TutorialsMenu">{children}</ol>;
}

function TutorialsMenuItem(props) {
  const { href, children } = props;
  return (
    <li className="TutorialsMenuItem">
      <a href={href}>
        {children}
      </a>
    </li>
  );
}

export { TutorialsMenu, TutorialsMenuItem };
