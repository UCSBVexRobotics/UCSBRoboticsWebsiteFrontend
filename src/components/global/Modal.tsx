import React from "react"
import styled from "styled-components"
import { Close } from "@styled-icons/material-outlined/Close"

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${props => (props.visible ? "visible" : "hidden")};
`

const ModalContainer = styled.div`
  background-color: white;
  height: auto;
  width: 600px;
  border: 1px white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledClose = styled(Close)`
  align-self: flex-end;
  padding-top: 15px;
  padding-right: 15px;
  cursor: pointer;
`

const ModalBody = styled.div`
  flex-grow: 1;
  padding: 5%;
  width: 80%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ModalTitle = styled.h2`
  margin: 0;
  margin-left: 15px;
`

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
`
export default function Modal(props) {
  return (
    <ModalBackground visible={props.isOpen}>
      <ModalContainer>
        <StyledClose size="50" onClick={() => props.closeModal()} />
        <ModalBody>
          <ModalTitle>{props.title}</ModalTitle>
          <ModalContent>{props.children}</ModalContent>
        </ModalBody>
      </ModalContainer>
    </ModalBackground>
  )
}
