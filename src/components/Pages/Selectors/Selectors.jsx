import React from 'react';
import BackToHomeButton from '../../BackToHomeButton/BackToHomeButton';
import Code from '../../Code/Code';
import CodeExample from '../../CodeExample/CodeExample';

function Selectors() {
  return (
    <div>
      <BackToHomeButton />

      <h1>
        <a href="/">Combinators</a>
      </h1>

      <p>
        The final selectors we will look at are called combinators, because they combine other
        selectors in a way that gives them a useful relationship to each other and the location
        of content in the document.
      </p>

      <table>
        <tr>
          <th>
            Prerequisites:
          </th>
          <td>
            Basic computer literacy,
            {' '}
            <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software">
              basic software installed
            </a>
            , basic knowledge of
            {' '}
            <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files">
              working with files
            </a>
            ,
            HTML basics (study
            {' '}
            <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML">
              Introduction to HTML
            </a>
            ), and an idea of how CSS works (study
            {' '}
            <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps">
              CSS first steps.
            </a>
            )
          </td>
        </tr>
        <tr>
          <th>
            Objective:
          </th>
          <td>
            To learn about the different combinator selectors that can be used in CSS.
          </td>
        </tr>
      </table>

      <h2>
        <a href="#descendant-combinator" id="descendant-combinator">
          Descendant combinator
        </a>
      </h2>

      <p>
        The
        {' '}
        <strong>descendant combinator</strong>
        — typically represented by a single space (&quot; &quot;) character — combines
        two selectors such that elements matched by the second selector are selected if they
        have an ancestor (parent,
        parent&apos;s parent, parent&apos;s parent&apos;s parent, etc) element matching the
        first selector.
        Selectors that utilize a
        descendant combinator are called descendant selectors.
      </p>

      <CodeExample>
        <p>body article p</p>
      </CodeExample>

      <p>
        In the example below, we are matching only the
        {' '}
        <Code>&lt;p&gt;</Code>
        {' '}
        element which is inside an element with a
        class of
        <Code>.box</Code>
        .
      </p>
    </div>
  );
}

export default Selectors;
