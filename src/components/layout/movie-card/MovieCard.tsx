import React from "react";
import styles from './MovieCard.scss';

export const MovieCard  =({title, year, description}: MovieCardInterface) => {
    return(
        <div className={styles.content}>
            <div className={styles.cover}>
            <img alt={`${title} cover`}/>
            </div>
            <div className={styles.upper}>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.year}>{year}</span>

            </div>
            <span className={styles.description}>{description}</span>
        </div>
    )
}

MovieCard.defaultProps = {
    title: 'Pulp Fiction',
    year: 2004,
    description: 'Action & Adventure'
};