import React from 'react';
import styles from './styles.css';
import { FriendText } from './friend';

export const App = () => {
    return (
        <h1 className={styles['some-class']}>
            Hey you, <FriendText />
        </h1>
    );
};