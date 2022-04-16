import React from "react";
import styles from './InputView.scss';

export const InputView : React.FC = ({inputName, labelName, placeholder}:any)=> {
    return(
        <div className={styles.content}>
            <label htmlFor={inputName} className={styles.label}>{labelName}</label>
            <input type={"text"} className={styles.field} id={inputName} name={inputName} placeholder={placeholder}/>
        </div>
    )
}