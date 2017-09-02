import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-react';
import App from './app/containers/App';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore.jsx';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(<Provider store={store}>
    <App />

</Provider>, document.getElementById('root'));
registerServiceWorker();    
