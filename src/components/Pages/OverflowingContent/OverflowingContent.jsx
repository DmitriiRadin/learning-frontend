import React from 'react';
import { OverflowingContentUrl } from '../../../urls';
import BackToHomeButton from '../../BackToHomeButton/BackToHomeButton';
import './OverflowingContent.css';

function OverflowingContent() {
  return (
    <div>
      <header className="tutorial-header">
        <nav>
          <BackToHomeButton />
        </nav>

        <h1>
          <a href={`${OverflowingContentUrl}#`}>Overflowing content</a>
        </h1>

        <p>
          Overflow is what happens when there is too much content to fit in a container.
          In this guide you will
          learn what overflow is and how to manage it.
        </p>

      </header>

      <div className="tutorial-try">
        <header>
          <h2>
            CSS tries to avoid &qout;data loss&qout;
          </h2>
        </header>

        <div className="avoid-loss-data-container">
          This box has a height and a width. This means that if there is too much content
          to be displayed
          within the assigned height, there will be an overflow situation. If overflow
          is set to hidden then
          any overflow will not be visible.
          This content is outside of the box.

          Interactive editor

        </div>

        <hr />

        <div className="overflow-word">
          Overflow
        </div>
      </div>

      <div className="tutorial-try">
        <header>
          <h2>
            The overflow property
          </h2>
        </header>

        <div className="flex-row overflow-scroll-x">
          <p className="overflow-hidden oveflow-small-box">
            The
            {' '}
            <code>overflow</code>
            {' '}
            property is how you take control of an element&apos;s overflow. It is the way
            you
            instruct the browser how it should behave. The default value of overflow is
            {' '}
            <code>visible</code>
            .
            With
            this default, we can see content when it overflows.
          </p>

          <p className="overflow-scroll oveflow-small-box">
            The
            {' '}
            <code>overflow</code>
            {' '}
            property is how you take control of an element&apos;s overflow. It is the way
            you
            instruct the browser how it should behave. The default value of overflow is
            {' '}
            <code>visible</code>
            .
            With
            this default, we can see content when it overflows.
          </p>

          <p className="overflow-scroll-y oveflow-small-box">
            The
            {' '}
            <code>overflow</code>
            {' '}
            property is how you take control of an element&apos;s overflow. It is the way
            you
            instruct the browser how it should behave. The default value of overflow is
            {' '}
            <code>visible</code>
            .
            With
            this default, we can see content when it overflows.
          </p>

          <p className="overflow-scroll-x oveflow-small-box">
            The
            {' '}
            <code>overflow</code>
            {' '}
            property is how you take control of an element&apos;s overflow. It is the way
            you
            instruct the browser how it should behave. The default value of overflow is
            {' '}
            <code>visible</code>
            .
            With
            this default, we can see content when it overflows.
          </p>

          <p className="oveflow-small-box">
            Fake box
          </p>

          <p className="oveflow-small-box">
            Fake box
          </p>

          <p className="oveflow-small-box">
            Fake box
          </p>
        </div>

        <hr />

        <p>
          If you only want scrollbars to appear when there is more content than can fit
          in the box, use
          <code>overflow: auto</code>
          . This allows the browser to determine if it should display scrollbars.
        </p>

        <div className="flex-row overflow-scroll-x-auto">
          <p className="oveflow-small-box">Fake box</p>
          <p className="oveflow-small-box">Fake box</p>
          <p className="oveflow-small-box">Fake box</p>
          <p className="oveflow-small-box">Fake box</p>
          <p className="oveflow-small-box">Fake box</p>
          <p className="oveflow-small-box">Fake box</p>
        </div>
      </div>

      <footer className="tutorial-footer">
        <p>
          <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content">
            Read on MDN
          </a>
        </p>
      </footer>
    </div>
  );
}

export default OverflowingContent;
