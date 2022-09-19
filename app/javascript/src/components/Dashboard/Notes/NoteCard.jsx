import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Typography, Dropdown, Tag, Avatar, Tooltip } from "neetoui";

import { calculateCreatedAgo, dayTimeFormatter } from "utils/date";

import { SUB_TEXT_COLOR, PROFILE_PICTURE_URL } from "./constants";

const NoteCard = ({
  id,
  title,
  description,
  created_at: createdAt,
  onDelete,
}) => (
  <div className="my-2 flex w-full flex-col border border-solid border-gray-300 p-2.5 shadow">
    <div className="flex justify-between">
      <Typography style="h4" weight="semibold">
        {title}
      </Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <div className="p-1.5">
          <li>Edit</li>
          <li onClick={() => onDelete(id)}>Delete</li>
        </div>
      </Dropdown>
    </div>
    <p>{description}</p>
    <hr className="my-2.5" />
    <div className="flex justify-between align-middle">
      <Tag className="mr-2 flex-initial" label="Getting Started" />
      <div className="flex flex-initial items-center">
        <Clock color={SUB_TEXT_COLOR} size={16} />
        <Tooltip content={dayTimeFormatter(createdAt)} position="bottom">
          <Typography
            className="px-1"
            color={SUB_TEXT_COLOR}
            style="body3"
          >{`Created ${calculateCreatedAgo(createdAt)}`}</Typography>
        </Tooltip>
        <Avatar size="small" user={{ imageUrl: PROFILE_PICTURE_URL }} />
      </div>
    </div>
  </div>
);
export default NoteCard;
