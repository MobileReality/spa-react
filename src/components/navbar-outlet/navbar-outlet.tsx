import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

type Props = {
    children: ReactNode;
};

export const NavbarOutlet = ({ children }: Props) => {
    return (
        <div>
            {children}
            <Outlet />
        </div>
    );
};
