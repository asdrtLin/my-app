import React from "react";
import Menu from "@/components/Menu";
import MenuItem from "@/components/MenuItem";

import { MenuConfig } from "@/layouts/BaseLayout/menuConfig";

import styles from './index.module.less';

const getNavMenuItems = (menuData: MenuConfig[]) => {
  return menuData.map((item) => getSubMenuOrItem(item));
};

const getSubMenuOrItem = (item: MenuConfig): React.ReactNode => {
  const childrenItems = getNavMenuItems(item.children || []);
  if (item.children && item.children?.length > 0) {
    const menu = (
      <Menu key={item.path} path={item.path} title={item.title}>
        {childrenItems}
      </Menu>
    );
    return menu;
  }
  const menuItem = <MenuItem path={item.path} title={item.title} />;
  return menuItem;
};

interface NavProps {
  dataSource: MenuConfig[];
}

const Nav: React.FC<NavProps> = (props) => {
  const { dataSource } = props;
  return <div className={styles.nav}>{getNavMenuItems(dataSource)}</div>;
};

export default Nav;
