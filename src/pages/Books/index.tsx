import React  from 'react';
import styles from './index.module.scss'

interface BooksProps {
    
}
 
const Books: React.FC<BooksProps> = (props) => {
    return ( <div className={styles.books}>books</div> );
}
 
export default Books;