import { Notes, Settings, UserCircle } from "neetoicons";

export const APP_NAME = "Wheel";

export const PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";
export const PROFILE_PICTURE_URL = "https://picsum.photos/200";

export const SIDENAV_LINKS = [
  {
    label: "Notes",
    to: "/notes",
    icon: Notes,
  },
  {
    label: "Contacts",
    to: "/contacts",
    icon: UserCircle,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: Settings,
  },
];
