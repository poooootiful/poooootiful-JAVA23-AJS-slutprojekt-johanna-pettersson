import {createRoot} from 'react-dom/client'
import App from './Components/App';

export const root = createRoot(document.querySelector('#root'));

root.render(<App/>);