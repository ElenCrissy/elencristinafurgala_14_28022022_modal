import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import ReactDOM from "react-dom";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 1;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgba(0,0,0,0.75);
  text-align: center;
  :before{
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.05em;
  }
`

const ModalContent = styled.div`
  vertical-align: middle;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  max-width: 500px;
  box-sizing: border-box;
  width: 90%;
  background: #fff;
  padding: 15px 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px #000;
  text-align: left;
  #closeIcon{
    position: absolute;
    top: -12.5px;
    right: -12.5px;
    display: block;
    width: 30px;
    height: 30px;
    text-indent: -9999px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: white;
    border-radius: 100%;
  }
`

const Modal = ({ app, children, open, onClose }) => {
    if(!open) {
        app.setAttribute("aria-hidden", "false")
        document.body.style.overflow = 'scroll'
        return null
    }

    if(open){
        app.setAttribute("aria-hidden", "true")
        document.body.style.overflow = 'hidden'
    }

    document.onkeydown = (e) =>{
        if(e.key === "Escape"){
            onClose()
        }
    }

    return ReactDOM.createPortal(
        <ModalWrapper
            onClick={onClose}>
            <ModalContent
                onClick={(e) => e.stopPropagation()}
                id={'modal'}
            >
                {children}
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    onClick={onClose}
                    id={"closeIcon"}
                />
            </ModalContent>
        </ModalWrapper>,
        document.getElementById("portal")
    );
};

export default Modal;