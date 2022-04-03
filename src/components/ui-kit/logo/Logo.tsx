import React from "react";
import LogoImage from '../../../assets/netflixroulette.svg';
import styles from './Logo.scss';

export const Logo: React.FC = () =>{
    return(
        <div className={styles.wapper}>
        <LogoImage/>
        </div>
    )
}