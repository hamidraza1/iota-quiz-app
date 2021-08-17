import {
  EuiModal,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiModalBody,
  EuiSpacer,
  EuiModalFooter,
  EuiButton,
} from "@elastic/eui";
import React from "react";
import { useHistory } from "react-router-dom";

export type IConfirmationModalProps = {
  onModalClose: () => void;
};

const ConfirmationModal: React.FC<IConfirmationModalProps> = ({
  onModalClose,
}) => {
  const router = useHistory();
  const onResultPageNavigate = () => {
    router.replace("result");
  };
  return (
    <EuiModal
      onClose={() => {
        onModalClose();
      }}
    >
      <EuiModalHeader>
        <EuiModalHeaderTitle>
          <h1>Confirmation</h1>
        </EuiModalHeaderTitle>
      </EuiModalHeader>

      <EuiModalBody>
        Are you sure you want to submit your Quiz?
        <EuiSpacer />
      </EuiModalBody>

      <EuiModalFooter>
        <EuiButton onClick={onModalClose} color="primary" fill>
          No
        </EuiButton>
        <EuiButton onClick={onResultPageNavigate} color="accent" fill>
          Yes
        </EuiButton>
      </EuiModalFooter>
    </EuiModal>
  );
};

export { ConfirmationModal };
