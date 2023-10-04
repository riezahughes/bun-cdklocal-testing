import { PropsWithChildren, ReactNode } from "react";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

interface IModalComponent {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onSuccessButtonText?: string;
  onCancelButtonText?: string;
  header?: string;
  children?: ReactNode;
}

const ModalComponent = ({
  isOpen,
  onClose,
  onSuccess,
  onSuccessButtonText,
  onCancelButtonText,
  header,
  children,
}: IModalComponent) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onSuccess}>
            {onSuccessButtonText}
          </Button>
          <Button variant="ghost" onClick={onClose}>
            {onCancelButtonText ? <>{onCancelButtonText}</> : <>Cancel</>}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
