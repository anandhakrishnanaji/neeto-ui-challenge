import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";
import Menu from "components/Common/Menu";

import { CONTACTS_DUMMY_DATA, MENU_BAR_BLOCKS } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  return (
    <>
      <Menu menuBarBlocks={MENU_BAR_BLOCKS} showMenu={showMenuBar} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenuBar(previousState => !previousState)}
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Contact"
              onClick={() => {
                setShowNewContactPane(true);
              }}
            />
          }
          searchProps={{
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number, Etc.",
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {CONTACTS_DUMMY_DATA.length ? (
          <Table
            contacts={CONTACTS_DUMMY_DATA}
            onDelete={() => setShowDeleteAlert(true)}
          />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => null}
            primaryActionLabel="Add New Contact"
            subtitle="Add your contacts to send customized emails to them."
            title="Looks like you don't have any contacts!"
          />
        )}
        <NewContactPane
          setShowPane={setShowNewContactPane}
          showPane={showNewContactPane}
        />
        {showDeleteAlert && (
          <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
        )}
      </Container>
    </>
  );
};

export default Contacts;
