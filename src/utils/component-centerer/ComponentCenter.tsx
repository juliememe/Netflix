import React from "react";
import styles from './ComponentCenter.scss';

export const ComponentCenter:React.FC = ({children }) =>{
    return(
        <div className={styles.content}>
        {children}
        </div>
    )
}