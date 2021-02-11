import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import {toast} from 'react-toastify';


function App() {
    toast.configure();
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
