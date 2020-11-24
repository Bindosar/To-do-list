import React from "react";
import Modal from "../components/Modal";
const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <Button onClick={openModal}></Button>
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};
