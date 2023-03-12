import React from "react";
import { Link } from "react-router-dom";
import styles from './index.module.less';

interface MenuItemProps {
  path: string;
  title: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { path, title } = props;
  return (
    <div className={styles.menuItem}>
      <Link to={path}>{title}</Link>
    </div>
  );
};

export default MenuItem;
