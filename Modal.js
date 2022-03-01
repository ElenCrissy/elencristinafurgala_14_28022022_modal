import React, { useEffect, useRef } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './modal.module.css';

const Modal = ({ modalStyle, children, show, onClose, backdropStyle }) => {
    const modalRef = useRef(null);
    useEffect(() => {
            if (show) {
                modalRef.current.classList.add(styles.visible);
            }
            else {
                modalRef.current.classList.remove(styles.visible);
            }
        }, [show]);
    return (
        <div ref={modalRef} style={backdropStyle} className={`${styles.modalWrapper}`}>
            <FontAwesomeIcon
                icon="fa-solid fa-circle-xmark"
                className={styles.closeIcon}
                onClick={onClose}
            />
            <div style={modalStyle} className={styles.modal}>
                {children}
            </div>
        </div>
    );
};

export default Modal;