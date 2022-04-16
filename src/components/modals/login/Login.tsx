import React from "react";
import styles from "./Login.scss";
import { CustomButton } from "../../../utils/custom-button";
import { Overlay } from "../../../utils/overlay/Overlay";

export const Login: React.FC = () => {
  return (
    <Overlay>
      <div className={styles.content}>
        <h2 className={styles.title}>Log in</h2>
        <div className={styles.email}>
          <label htmlFor={"email"}>User id*</label>
          <input type={"email"} id={"email"} value={""} />
        </div>
        <div className={styles.pass}>
          <label htmlFor={"password"}>Password*</label>
          <input
            type={"password"}
            id={"password"}
            value={""}
            placeholder="********"
          />
        </div>
        <div className={styles.btn}>
          <CustomButton
            buttonType={"reset"}
            buttonName={"Reset"}
            buttonClassName={"reset"}
          />
          <CustomButton
            buttonType={"submit"}
            buttonName={"Log in"}
            buttonClassName={"submit"}
          />
        </div>
      </div>
    </Overlay>
  );
};
