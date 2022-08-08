import React from 'react';
import './MainContainer.css';

function MainContainer(prop) {
  const { children } = prop;

  return <main className="MainContainer">{children}</main>;
}

export default MainContainer;
