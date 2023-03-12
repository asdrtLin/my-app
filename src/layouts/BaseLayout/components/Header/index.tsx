import React from 'react';
import styles from './index.module.less';


interface HeaderProps {
    
}
 
const Header: React.FC<HeaderProps> = (props) => {
    const {  }=props;
    return ( <div className={styles.header}>后台管理系统</div> );
}
 
export default Header;