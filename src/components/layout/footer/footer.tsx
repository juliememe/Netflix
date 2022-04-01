import React from "react";
import {Logo} from "../../ui-kit/logo";
import styles from './footer.scss';

export const Footer: React.FC = () =>{
    return(
        <footer className={styles.footer}>
            <Logo/>
        </footer>
    )
}