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
  header?: string;
  children?: ReactNode;
}

const ModalComponent = ({
  isOpen,
  onClose,
  onSuccess,
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
            Close
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Secondary Action
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
