import React from "react";
import styles from './movie-card.scss';

export const MovieCard  =({title, year, description}: MovieCardProps) => {
    return(
        <div className={styles.movieCard}>
            <div className={styles.movieCover}>
            <img alt={`${title} cover`}/>
            </div>
            <div className={styles.upperMovieCard}>
            <h3 className={styles.movieTitle}>{title}</h3>
            <span className={styles.movieYear}>{year}</span>

            </div>
            <span className={styles.movieDescription}>{description}</span>
        </div>
    )
}

MovieCard.defaultProps = {
    title: 'Pulp Fiction',
    year: 2004,
    description: 'Action & Adventure'
};