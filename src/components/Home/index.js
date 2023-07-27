import Header from '../Header'

import PopularMovies from '../PopularMovies'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <PopularMovies />
    </div>
  </>
)

export default Home
