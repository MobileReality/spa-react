import React from 'react';
import { render } from '@testing-library/react';

import { Button } from './button';

describe('Button', () => {
    it('should generate Button component snapshot', () => {
        const tree = render(<Button>1</Button>);
        expect(tree).toMatchSnapshot();
    });
});
