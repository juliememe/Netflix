import React from "react";
import { Overlay } from "../../../utils/overlay/Overlay";
import { CustomButton } from "../../../utils/custom-button";
import styles from "./DeleteMovie.scss";
import { CrossBtn } from "../../ui-kit/cross-btn/CrossBtn";

export const DeleteMovie: React.FC = () => {
  return (
    <Overlay>
      
      <div className={styles.container}>
      <div className={styles.cross}>
        <CrossBtn />
      </div>
        <h2 className={styles.title}>Delete movie</h2>
        <span className={styles.subtitle}>
          Are you sure you want to delete this movie?
        </span>
        <div className={styles.btn}>
          <CustomButton
            buttonType={"submit"}
            buttonName={"Confirm"}
            buttonClassName={"submit"}
          />
        </div>
      </div>
    </Overlay>
  );
};
