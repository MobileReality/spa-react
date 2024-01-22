import { Navbar, NavbarOutlet } from '@components';

export const LayoutNavbar = () => {
    return (
        <NavbarOutlet>
            <Navbar
                navLinks={[
                    { to: '/', name: 'Home' },
                ]}
            />
        </NavbarOutlet>
    );
};
