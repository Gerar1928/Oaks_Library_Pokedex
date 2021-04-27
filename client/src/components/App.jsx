import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './main/Main';
import General from './general/General';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <Main />
                </Route>
                <Route path='/:pokemonName/general'>
                    <General />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;