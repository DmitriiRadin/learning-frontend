import React from 'react';
import BackToHomeButton from '../../BackToHomeButton/BackToHomeButton';
import './BoxModel.css';

function BoxModel() {
  return (
    <div>
      <header>
        <BackToHomeButton />

        <h1>
          <a href="/">The box model</a>
        </h1>

        <p>
          Everything in CSS has a box around it, and understanding these boxes is key to
          being able to create more complex layouts with CSS, or to align items with other
          items. In this lesson, we will take a look at the CSS Box Model.
          You&apos;ll get an understanding of how it works and the terminology that relates to it.
        </p>

        <table>
          <tr>
            <th>
              Prerequisites:
            </th>
            <td>
              Basic computer literacy,
              <a href="/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software">
                basic software
                installed

              </a>
              , basic knowledge of
              <a href="/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files">working with files</a>
              ,
              HTML
              basics (study
              <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">Introduction to HTML</a>
              ), and an idea of how
              CSS
              works (study
              <a href="/en-US/docs/Learn/CSS/First_steps">CSS first steps</a>
              .)
            </td>
          </tr>
          <tr>
            <th>
              Objective:
            </th>
            <td>
              To learn about the CSS Box Model, what makes up the box model and how to switch
              to the alternate model.
            </td>
          </tr>
        </table>
      </header>

      <div className="tutorial-try">
        <header>
          <h2>Block flex display types</h2>
        </header>
        <div className="block-flex-display-types">
          <p>I am a paragraph. A short one.</p>

          <ul>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
          </ul>
          <p>
            I am another paragraph. Some of the
            {' '}
            <span className="block">words</span>
            {' '}
            have been wrapped in a
            {' '}
            <span>span element</span>
            .
          </p>
        </div>

      </div>
      <div className="tutorial-try">
        <header>
          <h2>Inline flex display types</h2>
        </header>
        <div className="inline-flex-display-types">
          <p>
            I am a paragraph. Some of the
            <span>words</span>
            {' '}
            have been wrapped in a
            <span>span element</span>
            .
          </p>
          <ul>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
          </ul>
          <p className="inline">I am a paragraph. A short one.</p>
          <p className="inline">I am another paragraph. Also a short one.</p>
        </div>

      </div>

      <div className="tutorial-try">
        <header>
          <h2>The box model and inline boxes</h2>
        </header>
        <div className="the-box-model-and-inline-boxes">
          <p>
            I am a paragraph and this is a
            {' '}
            <span>span</span>
            {' '}
            inside that paragraph. A span is an inline element and
            so does not respect width and height.
          </p>
        </div>
      </div>

      <div className="tutorial-try">
        <header>
          <h2>Creating menu with inline blocks</h2>
        </header>
        <div className="creating-menu-with-inline-blocks">
          <ul className="links-list">
            <li><a href="/">Link one</a></li>
            <li><a href="/">Link two</a></li>
            <li><a href="/">Link three</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BoxModel;
