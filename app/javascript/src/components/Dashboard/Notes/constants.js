import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tag: [],
};

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

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
      label: "Users",
      active: false,
    },
    {
      id: 3,
      count: 60,
      label: "Leads",
      active: true,
    },
    {
      id: 4,
      count: 60,
      label: "Visitors",
      active: false,
    },
  ],
  segments: [
    {
      id: 5,
      count: 80,
      label: "Europe",
    },
    {
      id: 6,
      count: 60,
      label: "Middle-East",
    },
    {
      id: 7,
      count: 60,
      label: "Asia",
    },
  ],
  tags: [
    {
      id: 8,
      count: 80,
      label: "Sales",
    },
    {
      id: 9,
      count: 60,
      label: "Finance",
    },
    {
      id: 10,
      count: 60,
      label: "User Experience",
    },
  ],
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

export const TAGS_DUMMY_DATA = [
  {
    id: 0,
    name: "Getting Started",
  },
  {
    id: 1,
    name: "Onboarding",
  },
  {
    id: 2,
    name: "User Flow",
  },
  {
    id: 3,
    name: "UX",
  },
  {
    id: 4,
    name: "Bugs",
  },
  {
    id: 5,
    name: "V2",
  },
];

export const SUB_TEXT_COLOR = "#68737D";
export const PROFILE_PICTURE_URL = "https://picsum.photos/200";
export const INITIAL_DELETE_STATE = {
  showDeleteAlert: false,
  selectedNoteId: null,
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup
    .object()
    .nullable()
    .shape({
      label: yup
        .string()
        .oneOf(CONTACTS_DUMMY_DATA.map(contact => contact.firstName))
        .required("Label not present"),
      value: yup
        .number()
        .oneOf(CONTACTS_DUMMY_DATA.map(contact => contact.id))
        .required("Value not present"),
    })
    .required("Contact is required"),
  tag: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().oneOf(TAGS_DUMMY_DATA.map(tag => tag.name)),
        value: yup.number().oneOf(TAGS_DUMMY_DATA.map(tag => tag.id)),
      })
    )
    .min(1, "Select atleast one tag")
    .required("Tag is required"),
});
