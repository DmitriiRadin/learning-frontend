import React from 'react';
import * as urls from '../../../urls';
import './Home.css';
import { TutorialsMenu, TutorialsMenuItem } from './TutorialsMenu/TutorialsMenu';

function Home() {
  return (
    <div className="Home">
      <div className="page__inner">
        <header className="main__header">
          <h1>CSS Tutorial</h1>
        </header>
        <div className="content">
          <p>Lets learn the fundamentals of CSS.</p>

          <TutorialsMenu>
            <TutorialsMenuItem href={urls.SelectorsUrl}>
              Selectors
            </TutorialsMenuItem>
            <TutorialsMenuItem href={urls.BoxModelUrl}>
              Box model
            </TutorialsMenuItem>
            <TutorialsMenuItem href={urls.BackgroundAndBordersUrl}>
              Backgrounds and borders
            </TutorialsMenuItem>
            <TutorialsMenuItem href={urls.TextDirectionsUrl}>
              Handling different text directions
            </TutorialsMenuItem>
            <TutorialsMenuItem href={urls.OverflowingContentUrl}>
              Overflowing content
            </TutorialsMenuItem>
            <TutorialsMenuItem href={urls.CSSValuesAndUnitsUrl}>
              CSS values and units
            </TutorialsMenuItem>
          </TutorialsMenu>
        </div>
      </div>
    </div>
  );
}

export default Home;
