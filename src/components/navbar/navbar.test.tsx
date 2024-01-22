import { render } from '@testing-library/react';

describe('Button', () => {
    it('should generate Button component snapshot', () => {
        const tree = render(<div>1</div>);
        expect(tree).toMatchSnapshot();
    });
});
