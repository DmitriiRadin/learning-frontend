import React from 'react';
import { Preview, TutorialTask, TutorialTemplate } from '../../TutorialComponents/TutorialComponents';
import styles from './ImagesMediaAndFormElements.module.css';

function ImagesMediaAndFormElements() {
  return (
    <TutorialTemplate
      title="Images, media, and form elements"
      tutorialReference="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Images_media_form_elements"
    >
      <TutorialTask title="Sizing images">
        <Preview>
          <div className={styles.smallBox}>
            <img
              src={`${process.env.PUBLIC_URL}/images/star.png`}
              alt="start"
            />
          </div>

          <div className={styles.smallFlexiableBox}>
            <img
              src={`${process.env.PUBLIC_URL}/images/balloons.jpg`}
              alt="ballons"
              className={styles.smallFlexiableImage}
            />
          </div>

          <div className={styles.smallBox}>
            <img
              src={`${process.env.PUBLIC_URL}/images/balloons.jpg`}
              alt="ballons"
            />
          </div>
        </Preview>
        <Preview>
          <div className={styles.smallBox}>
            <img
              src={`${process.env.PUBLIC_URL}/images/balloons.jpg`}
              alt="start"
              className={styles.contain}
            />
          </div>
          <div className={styles.smallBox}>
            <img
              src={`${process.env.PUBLIC_URL}/images/balloons.jpg`}
              alt="start"
              className={styles.cover}
            />
          </div>
        </Preview>
      </TutorialTask>
    </TutorialTemplate>
  );
}

export default ImagesMediaAndFormElements;
