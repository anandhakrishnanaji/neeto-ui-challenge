import * as yup from "yup";

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

export const PROFILE_PICTURE_URL = "https://picsum.photos/200";

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const ROLES_DUMMY_DATA = [
  {
    id: 0,
    name: "Owner",
  },
  {
    id: 1,
    name: "Admin",
  },
  {
    id: 2,
    name: "User",
  },
];

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Valid email is required")
    .required("Email is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLES_DUMMY_DATA.map(role => role.name)),
      value: yup.number().oneOf(ROLES_DUMMY_DATA.map(role => role.id)),
    })
    .required("Role is required"),
});
