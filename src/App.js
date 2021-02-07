import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

function App() {
    return (
        <Provider store={ConfigureStore()}>
            <BrowserRouter>
                <div>
                    <Main />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
