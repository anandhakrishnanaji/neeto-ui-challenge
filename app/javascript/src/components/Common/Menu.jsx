import React, { useState } from "react";

import { Search, Plus, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

const Menu = ({ showMenu, menuBarBlocks }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  return (
    <MenuBar showMenu={showMenu} title="Contacts">
      {menuBarBlocks.users.map(blockSection => (
        <MenuBar.Block
          count={blockSection.count}
          key={blockSection.id}
          label={blockSection.label}
        />
      ))}
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
            onClick: () =>
              setIsSearchCollapsed(previousState => !previousState),
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
      {menuBarBlocks.segments.map(blockSection => (
        <MenuBar.Block
          count={blockSection.count}
          key={blockSection.id}
          label={blockSection.label}
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
      {menuBarBlocks.tags.map(blockSection => (
        <MenuBar.Block
          count={blockSection.count}
          key={blockSection.id}
          label={blockSection.label}
        />
      ))}
    </MenuBar>
  );
};

export default Menu;
