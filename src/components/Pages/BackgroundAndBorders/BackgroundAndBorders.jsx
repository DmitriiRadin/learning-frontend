import React from 'react';
import './BackgroundAndBorders.css';

function BackgroundAndBorders() {
  return (
    <div>
      <header className="tutorial-header">
        <nav>
          <a className="home-button" href="index.html">Back to Home</a>
        </nav>

        <h1>
          <a href="/">Backgrounds and borders</a>
        </h1>

        <p>
          In this lesson, we will take a look at some of the creative things you
          can do with CSS backgrounds and
          borders. From adding gradients, background images, and rounded corners,
          backgrounds and borders are the
          answer to a lot of styling questions in CSS.
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
              To learn how to style the background and border of boxes.
            </td>
          </tr>
        </table>
      </header>

      <div className="tutorial-try">
        <header>
          <h2>Background colors</h2>
        </header>
        <div className="background-colors">
          <div className="box">
            <h3>Background colors</h3>
            <p>
              Try changing the background
              {' '}
              <span>colors</span>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="tutorial-try">
        <header>
          <h2>Background images</h2>
        </header>
        <div className="background-images">
          <h3>Background images</h3>

          <div className="flex-row">
            <div className="box balloon-background" />
            <div className="box star-background" />
          </div>

          <h3>Controlling background-repeat</h3>

          <div className="flex-row">
            <div className="box balloon-background no-repeat"><p>no-repeat</p></div>
            <div className="box star-background repeat-x"><p>repeat x</p></div>
            <div className="box star-background repeat-y"><p>repeat y</p></div>
          </div>

          <h3>Sizing the background image</h3>

          <div className="flex-row">
            <div className="box star-background cover no-repeat"><p>cover</p></div>
            <div className="box balloon-background contain no-repeat"><p>contain</p></div>
          </div>

          <h3>Positioning the background image</h3>

          <p>
            The background-position property allows you to choose the position in which the
            background
            image appears
            on the box it is applied to. This uses a coordinate system in which the
            top-left-hand corner
            of the box
            is (0,0), and the box is positioned along the horizontal (x) and vertical (y) axes.
          </p>

          <div className="flex-row">
            <div
              className="box star-background no-repeat"
            >
              <p>top right</p>
            </div>
            <div
              className="box balloon-background no-repeat"
            >
              <p>20px 10%</p>
            </div>
            <div
              className="box balloon-background no-repeat"
            >
              <p>right 50px</p>
            </div>
          </div>

          <h3>Gradient backgrounds</h3>

          <div className="flex-row">
            <div className="box gradient-background"><p>gradient-background</p></div>
          </div>

          <h3>Multiple background images</h3>

          <div className="flex-row">
            <div className="box multiple-images-background">
              <p>Multiple background images</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BackgroundAndBorders;
