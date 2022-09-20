import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Table as NeetoUITable, Avatar, Typography, Dropdown } from "neetoui";

import { monthDateFormatter } from "utils/date";

import { PROFILE_PICTURE_URL } from "./constants";

const renderAvatarWithNameAndRole = (_, { firstName, lastName, role }) => (
  <div className="flex space-x-2">
    <Avatar size="large" user={{ imageUrl: PROFILE_PICTURE_URL }} />
    <div className="flex flex-col">
      <Typography style="h4">
        {firstName} {lastName}
      </Typography>
      <Typography style="body3">{role}</Typography>
    </div>
  </div>
);

const renderActionDropdown = onDelete => (
  <Dropdown buttonStyle="text" icon={MenuHorizontal}>
    <div className="p-1.5">
      <li>Edit</li>
      <li onClick={onDelete}>Delete</li>
    </div>
  </Dropdown>
);

const Table = ({ contacts = [], onDelete }) => (
  <div className="contacts-table-height w-full">
    <NeetoUITable
      defaultPageSize={10}
      rowData={contacts}
      columnData={[
        {
          title: "Name and Role",
          dataIndex: "firstName",
          key: "firstName",
          width: "40%",
          render: renderAvatarWithNameAndRole,
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
          width: "30%",
        },
        {
          title: "Created at",
          dataIndex: "createdAt",
          key: "createdAt",
          width: "20%",
          render: monthDateFormatter,
        },
        {
          dataIndex: "id",
          key: "id",
          width: "10%",
          render: () => renderActionDropdown(onDelete),
        },
      ]}
    />
  </div>
);

export default Table;
