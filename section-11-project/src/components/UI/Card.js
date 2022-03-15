import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
return(
    <React.Fragment className={styles.card}>
        {props.children}
    </React.Fragment>
)
}

export default Card;