import { useRoutes } from 'react-router-dom';
import { routes } from '@lib/navigation';

const App = () => {
    const element = useRoutes(routes);
    return element;
};

export default App;
