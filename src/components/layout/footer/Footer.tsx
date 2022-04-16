import React from "react";
import {Logo} from "../../ui-kit/logo";
import styles from './Footer.scss';

export const Footer: React.FC = () =>{
    return(
        <footer className={styles.content}>
            <Logo/> 
        </footer> 
    )
} 