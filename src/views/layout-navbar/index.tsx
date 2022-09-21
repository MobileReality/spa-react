import React from 'react';
import { useForm } from 'react-hook-form';
import { Navbar } from 'components/navbar';
import { NavbarOutlet } from 'components/navbar-outlet';
import { TextInput } from 'components/text-input';

export const LayoutNavbar = () => {
    const { control } = useForm({
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
