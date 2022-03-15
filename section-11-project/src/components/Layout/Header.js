import React, {useState} from 'react';
import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton'; 
import Modal from '../UI/Modal';
const Header = (props) => {

    // const [showCart, setShowCart] = useState();

    // const cartCancelHandler = () => {
    //     setShowCart(null);
    //   };
    // const cartShowHandler = () => {
    //     setShowCart(true);
    // };

    
    
    return(
        
        <React.Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton
                onShowCart={props.onShowCart}
                />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="" />
            </div>
        </React.Fragment>
    )
}

export default Header;