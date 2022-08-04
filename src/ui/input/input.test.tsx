import React from 'react';
import { render } from '@testing-library/react';
import { replaceReactAriaIds } from 'helpers/replace-aria-react-ids';

import { Input } from './';

describe('Input', () => {
    it('should generate Input component snapshot', () => {
        const { container } = render(<Input label="Test Label" />);
        replaceReactAriaIds(container);
        expect(container).toMatchSnapshot();
    });
});
