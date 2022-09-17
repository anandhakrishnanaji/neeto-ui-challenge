import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import { INITIAL_DELETE_STATE } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Menu from "./Menu";
import NoteCard from "./NoteCard";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);

  const [deleteStatus, setDeleteStatus] = useState(INITIAL_DELETE_STATE);
  const { showDeleteAlert, selectedNoteId } = deleteStatus;

  const closeDeleteAlert = () => setDeleteStatus(INITIAL_DELETE_STATE);
  const openDeleteAlert = selectedNoteId =>
    setDeleteStatus({ showDeleteAlert: true, selectedNoteId });

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const {
        data: { notes },
      } = await notesApi.fetch();
      setNotes(notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <Menu showMenu={showMenuBar} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenuBar(!showMenuBar)}
          title="All Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Note"
              onClick={() => setShowNewNotePane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number, Etc.",
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notes.length ? (
          notes.map(element => (
            <NoteCard
              {...element}
              key={element.id}
              onDelete={openDeleteAlert}
            />
          ))
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
        <NewNotePane
          fetchNotes={fetchNotes}
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            refetch={fetchNotes}
            selectedNoteId={selectedNoteId}
            onClose={closeDeleteAlert}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
