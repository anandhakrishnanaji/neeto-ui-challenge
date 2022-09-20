import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";
import Menu from "components/Common/Menu";

import { CONTACTS_DUMMY_DATA, MENU_BAR_BLOCKS } from "./constants";
import Table from "./Table";

const Contacts = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Menu menuBarBlocks={MENU_BAR_BLOCKS} showMenu={showMenuBar} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenuBar(!showMenuBar)}
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Contact"
              onClick={() => {}}
            />
          }
          searchProps={{
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number, Etc.",
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {CONTACTS_DUMMY_DATA.length ? (
          <Table contacts={CONTACTS_DUMMY_DATA} />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => null}
            primaryActionLabel="Add New Contact"
            subtitle="Add your contacts to send customized emails to them."
            title="Looks like you don't have any contacts!"
          />
        )}
      </Container>
    </>
  );
};

export default Contacts;
