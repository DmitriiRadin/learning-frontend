import React from 'react';
import './LessonList.css';

function LessonList(props) {
  const { children } = props;

  return <ol className="LessonList">{children}</ol>;
}

function LessonListItem(props) {
  const { href, children } = props;
  return (
    <li className="LessonListItem">
      <a href={href}>
        {children}
      </a>
    </li>
  );
}

export { LessonList, LessonListItem };
