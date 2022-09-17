import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

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

export const SUB_TEXT_COLOR = "#68737D";
export const PROFILE_PICTURE_URL = "https://picsum.photos/200";
