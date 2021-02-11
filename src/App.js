import { Index } from './content/index.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar.js'

export const App = () => {
    return (
        <Router>
            < Navbar />
            < Route path='/:category' render={(props) => {
            return < Index category={props.match.params.category} />} 
            }/>
        </Router>
    )
}