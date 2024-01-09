import styled from "styled-components";
import { useState } from "react";

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: #00000067;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 50%;
`;

export const ControlledModal = ({ shouldDisplay, onClose, children }) => {
  return (
    <>
      {shouldDisplay && (
        <ModalBackground onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose}>Close Modal</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export const ParentComponent = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false);
  return (
    <>
      <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      >
        <h1>Modal Content</h1>
      </ControlledModal>
      <button onClick={() => setShouldDisplay((prev) => !prev)}>
        {shouldDisplay ? "Hide" : "Show"} Modal
      </button>
    </>
  );
};
