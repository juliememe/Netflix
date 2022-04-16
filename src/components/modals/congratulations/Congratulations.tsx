import React from "react";
import styles from './Congratulations.scss';
import {Overlay} from "../../../utils/overlay/Overlay";
import {CrossBtn} from "../../ui-kit/cross-btn/CrossBtn";
import Sign from '../../../assets/Group.svg';

export const Congratulations: React.FC = ()=>{
    return(
        <Overlay>
            <div className={styles.content}>
                <div className={styles.cross}><CrossBtn/></div>
                <div className={styles.sign}><Sign/></div>
                <h2 className={styles.title}>Congratulations!</h2>
                <p className={styles.subtitle}>The movie has been added to database successfully </p>
            </div>
        </Overlay>
    )
}