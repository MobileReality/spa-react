import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '@ui';

describe('Button', () => {
    it('should generate Button component snapshot', () => {
        const tree = render(<Button>Hello</Button>);
        expect(tree).toMatchSnapshot();
    });
});
