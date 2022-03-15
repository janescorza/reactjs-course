import React from 'react';
import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import CartButton from './HeaderCartButton' 

const Header = (props) => {

    const clickHandler = (event) => {
        console.log("Button has been clicked");
    }

    return(
        <React.Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <CartButton
                onClick={clickHandler}
                />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="" />
            </div>
        </React.Fragment>
    )
}

export default Header;