import React from 'react';
import { About } from 'pages/about';
import { Dashboard } from 'pages/dashboard';
import { Home } from 'pages/home';
import { NoMatch } from 'pages/no-match';
import { LayoutNavbar } from 'views/layout-navbar';

export const routes = [
    {
        path: '/',
        element: <LayoutNavbar />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
            {
                path: '*',
                element: <NoMatch />,
            },
        ],
    },
];
