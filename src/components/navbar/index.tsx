import * as React from 'react';
import { useTranslation } from 'react-i18next';
import type { To } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styles from './navbar.module.scss';

type NavLink = {
    to: To;
    name: string;
};

type Props = {
    navLinks: NavLink[];
};

export const Navbar = ({ navLinks }: Props) => {
    const { t } = useTranslation();

    return (
        <nav className={styles.navbar}>
            <h1>{t('title')}</h1>
            <ul>
                {navLinks.map(({ to, name }) => (
                    <li key={name}>
                        <Link to={to}>{name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
