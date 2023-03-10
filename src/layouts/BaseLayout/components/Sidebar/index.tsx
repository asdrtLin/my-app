import React from 'react';
import styles from './index.module.less';

interface SidebarProps {
    
}
 
const Sidebar: React.FC<SidebarProps> = (props) => {
    const {  }=props;
    return ( <div className={styles.sidebar}>
      Sidebar
    </div> );
}
 
export default Sidebar;