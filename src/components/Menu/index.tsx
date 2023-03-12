import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.less";

interface MenuProps {
  children: React.ReactNode;
  path: string;
  title: string;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { children, path, title } = props;
  return (
    <div className={styles.menu}>
      <div className={styles.title}>
        <Link to={path}>{title}</Link>
      </div>
      <div className={styles.menuChildren}>{children}</div>
    </div>
  );
};

export default Menu;
