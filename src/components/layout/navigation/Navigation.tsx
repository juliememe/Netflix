import React from "react";
import styles from './Navigation.scss';
import {NAVIGATION_LIST} from "./NavigationList";

export const Navigation: React.FC = ()=>{
    return(
            <ul className={styles.content}>
                {NAVIGATION_LIST.map(({id,link, line})=>{
                    return <li key={id}><a href={link}>{line}</a></li>
                })}
          </ul>
    )
}