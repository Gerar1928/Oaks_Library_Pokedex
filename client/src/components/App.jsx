import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './search/Search';
import Main from './main/Main';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <Search />
                </Route>
                <Route path='/:pokemonName/general'>
                    <Main />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;