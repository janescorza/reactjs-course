import React, {Fragment} from 'react';
import styles from './Modal.module.css';


const Modal = (props) => {

    return (
        <Fragment>
            <div className={styles.backdrop} onClick={props.onClick}/>
            <div className={styles.modal}>
                {props.children}
            </div>
        </Fragment>
    )
}

export default Modal;