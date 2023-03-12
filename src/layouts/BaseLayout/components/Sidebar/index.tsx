import React from "react";

import { MenuConfig } from "../../menuConfig";
import Nav from "@/components/Nav";

import styles from "./index.module.less";

interface SidebarProps {
  menuData: MenuConfig[];
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { menuData } = props;

  return (
    <div className={styles.sidebar}>
      <Nav dataSource={menuData} />
    </div>
  );
};

export default Sidebar;
