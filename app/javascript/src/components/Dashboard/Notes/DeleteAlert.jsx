import React, { useState } from "react";

import { Alert } from "neetoui";

import notesApi from "apis/notes";

const DeleteAlert = ({ refetch, onClose, selectedNoteId }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await notesApi.destroy({ ids: [selectedNoteId] });
      onClose();
      refetch();
    } catch (error) {
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      isSubmitting={deleting}
      size="md"
      title="Delete note?"
      message="Are you sure you want to continue with the deleting this note? This cannot be undone.
      "
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
