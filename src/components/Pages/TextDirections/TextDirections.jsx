import React from 'react';
import { TextDirectionsUrl } from '../../../urls';
import BackToHomeButton from '../../BackToHomeButton/BackToHomeButton';
import './TextDirections.css';

function TextDirections() {
  return (
    <div>
      <header className="tutorial-header">
        <nav>
          <BackToHomeButton />
        </nav>

        <h1>
          <a href={`${TextDirectionsUrl}#`}>Handling different text directions</a>
        </h1>

        <p>
          Many of the properties and values that we have encountered so far in our CSS
          learning have been tied to the
          physical dimensions of our screen. We create borders on the top, right, bottom,
          and left of a box, for
          example. These physical dimensions map very neatly to content that is viewed
          horizontally, and by default
          the web tends to support left-to-right languages (e.g. English or French)
          better than right-to-left
          languages (such as Arabic).
        </p>

        <p>
          In recent years however, CSS has evolved in order to better support different
          directionality of content,
          including right-to-left but also top-to-bottom content (such as Japanese) —
          these different directionalities
          are called writing modes. As you progress in your study and begin to work with
          layout, an understanding of
          {' '}
          <strong>writing modes</strong>
          {' '}
          will be very helpful to you, therefore we will introduce them now.
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
              HTML basics (study
              <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">Introduction to HTML</a>
              ), and an idea of how
              CSS works (study
              <a href="/en-US/docs/Learn/CSS/First_steps">CSS first steps</a>
              .)
            </td>
          </tr>
          <tr>
            <th>
              Objective:
            </th>
            <td>
              To understand the importance of writing modes to modern CSS.
            </td>
          </tr>
        </table>
      </header>

      <div className="tutorial-try">
        <header>
          <h2>What are writing modes?</h2>
        </header>

        <div className="flex-row">
          <p className="vertical">Vertical-lr</p>
          <p className="horizontal">Horizontal</p>
        </div>
      </div>

      <div className="tutorial-try">
        <header>
          <h2>Writing modes and block and inline layout</h2>
        </header>
        <div className="flex-row">
          <div className="box horizontal">
            <h2>Heading</h2>
            <p>A paragraph. Demonstrating Writing Modes in CSS.</p>
          </div>
          <div className="box vertical">
            <h2>Heading</h2>
            <p>A paragraph. Demonstrating Writing Modes in CSS.</p>
          </div>
        </div>
      </div>

      <div className="tutorial-try logical-properties-and-values">
        <header>
          <h2>Logical properties and values</h2>
        </header>

        <div className="flex-row">
          <div className="box horizontal">
            <h2>Heading</h2>
            <p>A paragraph. Demonstrating Writing Modes in CSS.</p>
            <p>These boxes have a width.</p>
          </div>
          <div className="box vertical">
            <h2>Heading</h2>
            <p>A paragraph. Demonstrating Writing Modes in CSS.</p>
            <p>These boxes have a width.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextDirections;
