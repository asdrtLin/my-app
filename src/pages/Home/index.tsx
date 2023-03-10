import React,{ useState } from 'react';
import styles from './index.module.less'

interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = (props) => {
    return ( <div className={styles.home}>home</div> );
}
 
export default Home;