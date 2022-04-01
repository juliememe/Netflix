import React from "react";
import {Header} from "../header";
import {Main} from "../../main";
import {Footer} from "../footer";
import styles from './content.scss';

export const Content: React.FC = () =>{
return(
    <div className={styles.contentContainer}>
        <Header/>
        <Main/>
        <Footer/>

    </div>
)

}