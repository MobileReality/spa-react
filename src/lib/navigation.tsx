import { Home } from '@pages/home';
import { NoMatch } from '@pages/no-match';
import { LayoutNavbar } from '@views/layout-navbar';

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
                path: '*',
                element: <NoMatch />,
            },
        ],
    },
];
