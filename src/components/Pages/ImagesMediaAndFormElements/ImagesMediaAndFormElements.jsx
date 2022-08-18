import React, { useId } from 'react';
import { Preview, TutorialTask, TutorialTemplate } from '../../TutorialComponents/TutorialComponents';
import styles from './ImagesMediaAndFormElements.module.css';

function ImagesMediaAndFormElements() {
  const id = useId();

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

      <TutorialTask title="Replaced elements in layout">
        <Preview>
          <div className={styles.replacedElementsInLayout}>
            <img src={`${process.env.PUBLIC_URL}/images/balloons.jpg`} alt="ballon" />
            <div />
            <div />
            <div />
          </div>
        </Preview>
      </TutorialTask>

      <TutorialTask title="Form elements">
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/Forms"
        >
          Creating and styling web forms advanced guides
        </a>

        <Preview>
          <form className={styles.formElements}>
            <div>
              <label htmlFor={`${id}-name`}>Name</label>
            </div>
            <input type="text" id={`${id}-name`} />
            <div>
              <label htmlFor={`${id}-email`}>Email</label>
            </div>
            <input type="email" id={`${id}-email`} />

            <div className="buttons">
              <input type="submit" value="Submit" />
            </div>
          </form>

        </Preview>
      </TutorialTask>
    </TutorialTemplate>
  );
}

export default ImagesMediaAndFormElements;
