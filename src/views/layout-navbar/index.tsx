import React from 'react';
import { Navbar, NavbarOutlet, TextInput } from '@components';
import { useBaseForm } from '@hooks';
import { layoutNavbarFormSchema } from '@views/layout-navbar/schema';

export const LayoutNavbar = () => {
    const { control } = useBaseForm({
        schema: layoutNavbarFormSchema,
        defaultValues: {
            test: 'test default value',
        },
    });

    return (
        <NavbarOutlet>
            <TextInput control={control} name="test" />
            <Navbar
                navLinks={[
                    { to: '/', name: 'Home' },
                    { to: '/about', name: 'About' },
                    { to: '/dashboard', name: 'Dashboard' },
                ]}
            />
        </NavbarOutlet>
    );
};
