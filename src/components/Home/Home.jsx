import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <div className="page_wrapper">
        <div className="page__inner">
          <header className="main__header">
            <h1>CSS Tutorial</h1>
          </header>
          <div className="content">
            <p>Lets learn the fundamentals of CSS.</p>

            <div className="lessons-list">
              <ol className="lessons-list__lessons">
                <li className="lessons-list__lesson">
                  <a className="lessons-list__link" href="01_selectors.html">
                    Selectors
                  </a>
                </li>
                <li className="lessons-list__lesson">
                  <a className="lessons-list__link" href="02_the_box_model.html">
                    The box model
                  </a>
                </li>
                <li className="lessons-list__lesson">
                  <a className="lessons-list__link" href="03_background_and_borders.html">
                    Backgrounds and borders
                  </a>
                </li>
                <li className="lessons-list__lesson">
                  <a className="lessons-list__link" href="04_handling_different_text_directoins.html">
                    Handling different text directions
                  </a>
                </li>
                <li className="lessons-list__lesson">
                  <a className="lessons-list__link" href="05_overflowing_content.html">
                    Overflowing content
                  </a>
                </li>

                <li className="lessons-list__lesson">
                  <a className="lessons-list__link" href="06_css_values_and_units.html">
                    CSS values and units
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
