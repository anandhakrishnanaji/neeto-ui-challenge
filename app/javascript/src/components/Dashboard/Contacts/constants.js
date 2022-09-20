export const MENU_BAR_BLOCKS = {
  users: [
    {
      id: 1,
      count: 200,
      label: "All",
      active: true,
    },
    {
      id: 2,
      count: 60,
      label: "Archived",
      active: false,
    },
    {
      id: 3,
      count: 60,
      label: "Completed",
      active: false,
    },
    {
      id: 4,
      count: 60,
      label: "Phase 2",
      active: false,
    },
  ],
  segments: [],
  tags: [],
};

export const CONTACTS_DUMMY_DATA = [
  {
    id: 0,
    firstName: "Ronald",
    lastName: "Richards",
    email: "albert@borer.com",
    createdAt: "2018-04-13 19:18",
    role: "owner",
  },
  {
    id: 1,
    firstName: "Jacob",
    lastName: "Jones",
    email: "albert@borer.com",
    createdAt: "2018-04-13 19:18",
    role: "owner",
  },
  {
    id: 2,
    firstName: "Ronald",
    lastName: "Richards",
    email: "albert@borer.com",
    createdAt: "2018-04-13 19:18",
    role: "owner",
  },
  {
    id: 3,
    firstName: "Jacob",
    lastName: "Jones",
    email: "albert@borer.com",
    createdAt: "2018-04-13 19:18",
    role: "owner",
  },
];

export const PARTIAL_CONTACTS_TABLE_COLUMN_DATA = [
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
  },
];

export const PROFILE_PICTURE_URL = "https://picsum.photos/200";
