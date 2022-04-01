import React from "react";
import LogoImage from '../../../assets/netflixroulette.svg';
import styles from './logo.scss';

export const Logo: React.FC = () =>{
    return(
        <div className={styles.logoWrapper}>
        <LogoImage/>
        </div>
    )
}