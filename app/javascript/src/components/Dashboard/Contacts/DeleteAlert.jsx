import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose }) => {
  const handleDelete = () => {
    Toastr.success("Contact deleted successfully.");
    onClose();
  };

  return (
    <Alert
      isOpen
      size="lg"
      title="Delete contact?"
      message="Are you sure you want to continue with deleting this contact? This cannot be undone.
      "
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
