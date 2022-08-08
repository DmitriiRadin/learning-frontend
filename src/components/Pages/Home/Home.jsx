import React from 'react';
import * as urls from '../../../urls';
import './Home.css';
import { LessonList, LessonListItem } from './LessonList/LessonList';

function Home() {
  return (
    <div className="Home">
      <div className="page__inner">
        <header className="main__header">
          <h1>CSS Tutorial</h1>
        </header>
        <div className="content">
          <p>Lets learn the fundamentals of CSS.</p>

          <LessonList>
            <LessonListItem href={urls.SelectorsUrl}>Selectors</LessonListItem>
            <LessonListItem href={urls.BoxModelUrl}>Box model</LessonListItem>
            <LessonListItem href={urls.BackgroundAndBordersUrl}>
              Backgrounds and borders
            </LessonListItem>
            <LessonListItem href={urls.TextDirectionsUrl}>
              Handling different text directions
            </LessonListItem>
            <LessonListItem href={urls.OverflowingContentUrl}>Overflowing content</LessonListItem>
            <LessonListItem href={urls.CSSValuesAndUnitsUrl}>CSS values and units</LessonListItem>
          </LessonList>
        </div>
      </div>
    </div>
  );
}

export default Home;
