import React, { useState } from "react";

import { LeftArrow, RightArrow } from "neetoicons";
import { Sidebar as NeetoUISidebar } from "neetoui/layouts";
import { useHistory } from "react-router-dom";

import authenticationApi from "apis/authentication";
import {
  PROFILE_PATH,
  CHANGE_PASSWORD_PATH,
  LOGIN_PATH,
} from "components/routeConstants";
import { useAuthDispatch } from "contexts/auth";
import { useUserState } from "contexts/user";

import { APP_NAME, PROFILE_PICTURE_URL, SIDENAV_LINKS } from "./constants";

const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const history = useHistory();
  const authDispatch = useAuthDispatch();
  const { user } = useUserState();

  const renderCollapseToggleButton = () => {
    const Icon = isSidebarCollapsed ? RightArrow : LeftArrow;
    return (
      <Icon onClick={() => setIsSidebarCollapsed(prevState => !prevState)} />
    );
  };

  const handleLogout = async () => {
    try {
      await authenticationApi.logout();
      authDispatch({ type: "LOGOUT" });
      window.location.href = LOGIN_PATH;
    } catch (error) {
      logger.error(error);
    }
  };

  const bottomLinks = [
    {
      label: "My Profile",
      onClick: () => history.push(PROFILE_PATH, { resetTab: true }),
    },
    {
      label: "Change Password",
      onClick: () => history.push(CHANGE_PASSWORD_PATH, { resetTab: true }),
    },
    {
      label: "Logout",
      onClick: handleLogout,
    },
  ];

  return (
    <NeetoUISidebar
      appName={APP_NAME}
      changelogProps={{ id: "neetochangelog-trigger" }}
      isCollapsed={isSidebarCollapsed}
      navLinks={SIDENAV_LINKS}
      footerLinks={[
        {
          label: isSidebarCollapsed ? "Expand" : "Collapse",
          icon: renderCollapseToggleButton,
          to: "",
        },
      ]}
      organizationInfo={{
        name: "Wheel",
        subdomain: "bigbinary.com",
      }}
      profileInfo={{
        name: `${user.first_name} ${user.last_name}`,
        imageUrl: PROFILE_PICTURE_URL,
        email: user.email,
        bottomLinks,
      }}
    />
  );
};

export default Sidebar;
