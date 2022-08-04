import React from 'react';
import imgUrl from 'assets/dog.webp';
import { ReactComponent as Logo } from 'assets/react.svg';

import styles from './hero-image.module.scss';

export const HeroImage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.hello}>Hello!</h1>
            <Logo />
            <img src={imgUrl} alt="Dog" className={styles.image} />
        </div>
    );
};
