import React from 'react';
import BackToHomeButton from '../../BackToHomeButton/BackToHomeButton';
import './CSSValuesAndUnits.css';

function CSSValuesAndUnits() {
  return (
    <div>
      <header className="tutorial-header">
        <nav>
          <BackToHomeButton />
        </nav>

        <h1>
          <a href={`${CSSValuesAndUnits}#`}>CSS values and units</a>
        </h1>

        <p>
          Every property used in CSS has a value type defining the set of values
          that are allowed for that
          property. Taking a look at any property page on MDN will help you understand
          the values associated with
          a value type that are valid for any particular property. In this lesson
          we will take a look at some of
          the most frequently used value types, and their most common values and units.
        </p>
      </header>

      <div className="tutorial-try">
        <header>
          <h2>
            Numbers, lengths, and percentages
          </h2>
        </header>

        <div className="tutorial-body">
          <div className="flex-row">
            <ul className="ems-list">
              <li>One</li>
              <li>Two</li>
              <li>
                Three
                <ul>
                  <li>Three A</li>
                  <li>
                    Three B
                    <ul>
                      <li>Three B 2</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="rems-list">
              <li>One</li>
              <li>Two</li>
              <li>
                Three
                <ul>
                  <li>Three A</li>
                  <li>
                    Three B
                    <ul>
                      <li>Three B 2</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="percentages-list">
              <li>One</li>
              <li>Two</li>
              <li>
                Three
                <ul>
                  <li>Three A</li>
                  <li>
                    Three B
                    <ul>
                      <li>Three B 2</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

        </div>

      </div>

      <div className="tutorial-try">
        <header>
          <h2>
            Colors
          </h2>
        </header>

        <div className="tutorial-body">
          <div className="color-examples sky-background">
            <p className="color-example blue">rgba(2, 121, 139, .3)</p>
            <p className="color-example violet">rgba(197, 93, 161, .7)</p>
            <p className="color-example green">rgba(18, 138, 125, .9)</p>
          </div>
        </div>
      </div>

      <footer className="tutorial-footer">
        <p>
          <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units">
            Read on MDN
          </a>
        </p>
      </footer>
    </div>
  );
}

export default CSSValuesAndUnits;
