import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Upcoming from './components/Upcoming'
import TopRated from './components/TopRated'
import MovieDetails from './components/MovieDetails'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/up-coming" component={Upcoming} />
    <Route exact path="/top-rated" component={TopRated} />
    <Route exact path="/movie/:id" component={MovieDetails} />
  </Switch>
)

export default App
