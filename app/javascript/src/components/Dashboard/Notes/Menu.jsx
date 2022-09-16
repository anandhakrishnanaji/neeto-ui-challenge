import React, { useState } from "react";

import { Search, Plus, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

import { MENU_BAR_BLOCKS } from "./constants";

const Menu = ({ showMenu }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  return (
    <MenuBar showMenu={showMenu} title="Contacts">
      {MENU_BAR_BLOCKS.users.map(element => (
        <MenuBar.Block
          count={element.count}
          key={element.id}
          label={element.label}
        />
      ))}
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
            onClick: () => setIsSearchCollapsed(!isSearchCollapsed),
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Segments
        </Typography>
      </MenuBar.SubTitle>
      <MenuBar.Search
        collapse={isSearchCollapsed}
        onCollapse={() => setIsSearchCollapsed(true)}
      />
      {MENU_BAR_BLOCKS.segments.map(element => (
        <MenuBar.Block
          count={element.count}
          key={element.id}
          label={element.label}
        />
      ))}
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Settings,
          },
          {
            icon: Plus,
          },
          {
            icon: Search,
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Tags
        </Typography>
      </MenuBar.SubTitle>
      {MENU_BAR_BLOCKS.tags.map(element => (
        <MenuBar.Block
          count={element.count}
          key={element.id}
          label={element.label}
        />
      ))}
    </MenuBar>
  );
};

export default Menu;
