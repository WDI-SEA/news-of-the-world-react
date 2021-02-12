import { Index } from './content/index.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavList from './Navbar.js'
import Landing from './content/Landing/index.js'

export const App = () => {
    return (
        <Router>
            < NavList />
            < Route exact path='/' component={Landing} />
            < Route path='/:category' render={(props) => {
            return < Index category={props.match.params.category} />} 
            }/>
        </Router>
    )
}