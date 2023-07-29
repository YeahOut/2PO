import React from "react";
import Scrollspy from "react-scrollspy";
import {
  SidebarContainer,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemLink,
  SidebarHeader,
} from "./TokenSection/styled";

const ScrollSpySidebar = ({ items }) => {
  return (
    <SidebarContainer>
      <SidebarHeader>목차</SidebarHeader>
      <SidebarMenu>
        <Scrollspy items={items} currentClassName="is-current">
          {items.map((id) => (
            <SidebarMenuItem key={id}>
              <SidebarMenuItemLink href={`#${id}`}>{id}</SidebarMenuItemLink>
            </SidebarMenuItem>
          ))}
        </Scrollspy>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default ScrollSpySidebar;
