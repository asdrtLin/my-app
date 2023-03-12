import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import {sidebarMenuConfig} from "./menuConfig";

import styles from "./index.module.less";

interface BaseLayoutProps {}

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  const {} = props;
  return (
    <section className={styles.section}>
        <header className={styles.header}>
          <Header />
        </header>
        <section className={styles.content}>
          <aside className={styles.aside}><Sidebar menuData={sidebarMenuConfig} /></aside>
          <section className={styles.container}>
            <div className={styles.outlet}><Outlet /></div>
          </section>
        </section>
    </section>
  );
};

export default BaseLayout;
