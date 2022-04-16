import React from "react";
import styles from './CustomButton.scss';
import {CustomButtonInterface} from "./CustomButton.interface";

export const CustomButton = ({buttonType, buttonName, buttonClassName}: CustomButtonInterface) => {
    return <button type={buttonType} className={`${styles.view} ${styles[buttonClassName]}`} >{buttonName}</button>
}