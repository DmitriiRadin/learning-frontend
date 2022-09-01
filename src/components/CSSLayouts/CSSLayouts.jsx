import React from 'react';
import { TutorialTemplate } from '../TutorialComponents/TutorialComponents';
import './CSSLayouts.css';

export default function CSSLayouts() {
  return (
    <TutorialTemplate
      title="CSS layout"
      tutorialReference="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction"
    >

      <div className="section">
        <h2>Normal flow</h2>

        <p>This is normal flow.</p>

        <ul>
          <li>First</li>
          <li>
            S
            <span className="red-color">ec</span>
            ond
          </li>
          <li>Third</li>
        </ul>

        <p>The end of the normal flow.</p>
      </div>

      <div className="section">
        <h2>Flex flow</h2>

        <div className="flex fulled-flex">
          <div className="box aqua-background">First</div>
          <div className="box aqua-background">
            <h3>Second</h3>
            <p>It&apos;s some additional text to look at the alignment of boxes by height</p>
          </div>
          <div className="box aqua-background">Third</div>
        </div>
      </div>

      <div className="section">
        <h2>Grid layout</h2>

        <p>
          While flexbox is designed for one-dimensional layout, Grid Layout is
          designed for two dimensions — lining things up in rows and columns.
        </p>

        <div className="grid">
          <div className="box box1">One</div>
          <div className="box box2">Two</div>
          <div className="box box3">Three</div>
        </div>

      </div>

      <div className="section">
        <h2>Floats</h2>

        <p>
          Floating an element changes the behavior of that element and the block level
          elements that follow it in normal flow. The floated element is moved to the left
          or right and removed from normal flow, and the surrounding content floats around it.
        </p>

        <div className="float-left box margin-10">Float box</div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor,
          eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum
          luctus orci.
          Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus
          massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
          Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus.
          Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin
          eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
          lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
        </p>

        <div className="clear-float"></div>

      </div>

    </TutorialTemplate>
  );
}
