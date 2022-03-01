import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './modal.module.css';

const ModalWrapper = styled.div`
    #closeIcon{
      height: 30px;
      width: 30px;
    }
`


const Modal = ({ modalStyle, children, show, onClose, backdropStyle }) => {
    const modalRef = useRef(null);
    useEffect(
        () => {
            if (show) {
                modalRef.current.classList.add(styles.visible);
            }
            else {
                modalRef.current.classList.remove(styles.visible);
            }
        },
        [
            show
        ]
    );
    return (
        <ModalWrapper ref={modalRef} style={backdropStyle} className={`${styles.modalwrapper}`}>
            <FontAwesomeIcon
                icon="fa-solid fa-circle-xmark"
                className={styles.closeIcon}
                onClick={onClose}
            />
            <div style={modalStyle} className={styles.modal}>
                {children}
            </div>
        </ModalWrapper>
    );
};

export default Modal;
// module.exports = {
//     Modal
// }