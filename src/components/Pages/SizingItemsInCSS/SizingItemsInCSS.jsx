import React from 'react';
import join from '../../../join';
import { SizingItemsInCSSUrl } from '../../../urls';
import BackToHomeButton from '../../BackToHomeButton/BackToHomeButton';
import styles from './SizingItemsInCSS.module.css';

function SizingItemsInCSS() {
  return (
    <div>
      <header>
        <nav>
          <BackToHomeButton />
        </nav>
        <h1><a href={`${SizingItemsInCSSUrl}#`}>Sizing items in CSS</a></h1>
      </header>

      <p>
        In the various lessons so far, you have come across a number of ways to size
        items on a web page using CSS. Understanding how big the different features
        in your design will be is important. So, in this lesson we will summarize
        the various ways elements get a size via CSS and define a few terms about
        sizing that will help you in the future.
      </p>

      <h2>The natural or intrinsic size of things</h2>

      <div className={styles.exampleBox}>
        <img
          src={`${process.env.PUBLIC_URL}/images/star.png`}
          className={styles.darkblueBorder}
          alt="star"
        />
      </div>

      <div className={styles.exampleBox}>
        <div className={styles.darkblueBorder} />
      </div>

      <h2>Setting a specific size</h2>

      <div className={join(styles.exampleBox, 'flex-row')}>
        <div className={join(styles.extrinsicBox, styles.darkblueBorder)} />
        <div className={join(styles.extrinsicBox, styles.darkblueBorder)}>
          These boxes both have a height set, this box has content
          in it which will need more space than the assigned height, and so we get overflow.
        </div>
      </div>

      <h2>Using percentages</h2>

      <div className={styles.exampleBox}>
        <div className={join(styles.percentageBox, styles.darkblueBorder)}>
          I have a percentage width.

        </div>
      </div>

      <h2>Percentage margins and padding</h2>

      <p>
        If you set
        {' '}
        <code>margins</code>
        {' '}
        and
        {' '}
        <code>padding</code>
        {' '}
        as a percentage, you may notice some strange behavior. In the
        below example we have a box. We have given the inner box a
        {' '}
        <code>margin</code>
        {' '}
        of 10% and a
        {' '}
        <code>padding</code>
        {' '}
        of 10%. The padding and margin on the top and bottom of
        the box are the same size as the margin on the left and right
      </p>

      <div className={styles.exampleBox}>
        <div className={join(styles.marginPaddingBox, styles.darkblueBorder)}>
          I have margin and padding set to 10% on all sides.
        </div>
      </div>

      <h2>min- and max- sizes</h2>

      <div className={styles.preview}>
        <div className={styles.wrapper}>
          <div className={styles.minHeightBox} />
          <div className={styles.minHeightBox}>
            <p>
              These boxes both have a min-height set, this box
              has content in it which will need more space than the
              assigned height, and so it grows from the minimum.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.preview}>
        <div className={styles.wrapper}>
          <div className={styles.imageBox}>
            <img
              src={`${process.env.PUBLIC_URL}/images/star.png`}
              className={styles.imageWidth}
              alt="star"
            />
          </div>
          <div className={styles.imageBox}>
            <img
              src={`${process.env.PUBLIC_URL}/images/star.png`}
              className={styles.imageMaxWidth}
              alt="star"
            />
          </div>
          <div className={styles.imageMinibox}>
            <img
              src={`${process.env.PUBLIC_URL}/images/star.png`}
              className={styles.imageMaxWidth}
              alt="star"
            />
          </div>
        </div>
      </div>

      <h2>Viewport units</h2>

      <div className={styles.preview}>
        <div className={styles.wrapper}>
          <div className={styles.viewportBox}>
            A
          </div>
        </div>
      </div>
    </div>
  );
}

export default SizingItemsInCSS;
