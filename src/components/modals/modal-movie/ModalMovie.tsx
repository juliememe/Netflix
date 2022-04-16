import React from "react";
import { CrossBtn } from "../../ui-kit/cross-btn/CrossBtn";
import { CustomButton } from "../../../utils/custom-button/CustomButton";

import styles from "./ModalMovie.scss";
import { Overlay } from "../../../utils/overlay/Overlay";

export const ModalMovie = ({ modalTitle }: ModalMovieInterface) => {
  const genres = ["Select genre", "Crime", "Documentary", "Horror", "Comedy"];

  return (
      <Overlay>
    <div className={styles.content}>
       <div className={styles.cross}> <CrossBtn/></div>
      <h1 className={styles.title}>{modalTitle}</h1>
      <form className={styles.form}>
        <div className={styles.top}>
          <div className={styles.left}>
            <label htmlFor="movieTitle" className={styles.label}>
              Title
            </label>
            <input type="text" id="movieTitle" placeholder="Write title" />
            <label htmlFor="movieUrl" className={styles.label}>
              Movie URL
            </label>
            <input type="text" id="movieUrl" placeholder="http://" />
            <label htmlFor="genre" className={styles.label}>
              Genre
            </label>
            <select id="genre" className={styles.genre}>
              {genres.map((genre) => {
                return <option value={genre}>{genre}</option>;
              })}
            </select>
          </div>
          <div className={styles.right}>
            <label htmlFor="releaseDate" className={styles.label}>
              Release Date
            </label>
            <input type="date" id="releaseDate" placeholder="Select date" />
            <label htmlFor="rating" className={styles.label}>
              Rating
            </label>
            <input type="number" id="rating" step="0.1" placeholder="7.8" />
            <label htmlFor="runtime" className={styles.label}>
              Runtime
            </label>
            <input type="text" id="runtime" placeholder="minutes" />
          </div>
        </div>
        <label htmlFor="overview" className={styles.label}>
          Overview
        </label>
        <textarea className={styles.overview} id="overview" rows={10} data-resize='none'></textarea>
        <div className={styles.btns}>
          <CustomButton
            buttonClassName="reset"
            buttonName="Reset"
            buttonType="reset"
          />
          <CustomButton
            buttonClassName="submit"
            buttonName="Submit"
            buttonType="submit"
          />
        </div>
      </form>
    </div>
    </Overlay>
  );
};
