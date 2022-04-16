import React from "react";
import styles from './Overlay.scss';

export const Overlay: React.FC = ({children}) =>{
    return <>
        {children}
        <div className={styles.content}></div>
        </>
}