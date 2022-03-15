import React from 'react';
import styles from './Header.module.css'

const Header = (props) => {

    return(
        <div>
            <section className={styles.header}>
                <h1>ReactMeals</h1>
            </section>
            <section className={`${styles['main-image']}`}>
                <img src={require("./meals.jpg")} alt="" />
            </section>
        </div>
    )
}

export default Header;