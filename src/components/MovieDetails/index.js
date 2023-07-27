import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Header from '../Header'
import MovieBanner from '../MovieBanner'

import './index.css'

class MovieDetails extends Component {
  state = {
    movieData: {},
    isLoading: false,
  }

  componentDidMount() {
    this.getMovieDetails()
  }

  getMovieDetails = async () => {
    this.setState({isLoading: true})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiKey = `c45a857c193f6302f2b5061c3b85e743`
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    const options = {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log('surya')
    const movieData = {
      costForTwo: data.cost_for_two,
      cuisine: data.cuisine,
    }

    this.setState({
      movieData,
      isLoading: false,
    })
  }

  renderMovieDetails = () => {
    const {movieData} = this.state
    return (
      <>
        <MovieBanner movieData={movieData} />
      </>
    )
  }

  renderLoader = () => (
    <div className="restaurant-loader">
      <Loader type="ThreeDots" color="#F7931E" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <>
        <Header />
        {isLoading ? this.renderLoader() : this.renderMovieDetails()}
      </>
    )
  }
}

export default MovieDetails
