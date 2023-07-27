import {Component} from 'react'

import {RiArrowDropLeftLine, RiArrowDropRightLine} from 'react-icons/ri'

import Loader from 'react-loader-spinner'

import MovieCard from '../MovieCard'

import './index.css'

class PopularRestaurants extends Component {
  state = {
    restaurantsList: [],
    isLoading: false,
    activePage: 1,

    totalPages: 0,
  }

  componentDidMount() {
    this.getRestaurants()
  }

  getRestaurants = async () => {
    this.setState({isLoading: true})
    const {activePage} = this.state
    const apiKey = `c45a857c193f6302f2b5061c3b85e743`

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${activePage}`
    const options = {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    const totalPages = data.total_pages
    const updatedData = data.results.map(eachItem => ({
      id: eachItem.id,
      posterPath: eachItem.poster_path,
      title: eachItem.title,
      voteAverage: eachItem.vote_average,
    }))
    console.log(updatedData)
    this.setState({
      restaurantsList: updatedData,
      isLoading: false,
      totalPages,
    })
  }

  decrementPage = () => {
    const {activePage} = this.state
    if (activePage > 1) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage - 1,
        }),
        this.getRestaurants,
      )
    }
  }

  incrementPage = () => {
    const {activePage} = this.state
    if (activePage < 4) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage + 1,
        }),
        this.getRestaurants,
      )
    }
  }

  renderPopularRestaurants = () => {
    const {restaurantsList, activePage, totalPages} = this.state
    return (
      <>
        <ul className="restaurants-list">
          {restaurantsList.map(eachItem => (
            <MovieCard movie={eachItem} key={eachItem.id} />
          ))}
        </ul>
        <div className="pagination-container">
          <button
            type="button"
            className="pagination-button"
            onClick={this.decrementPage}
          >
            <RiArrowDropLeftLine size={20} />
          </button>
          <p className="page-count">{activePage}</p>
          <span
            className="page-count"
            style={{marginLeft: '5px', marginRight: '5px'}}
          >
            of
          </span>
          <p className="page-count"> {totalPages}</p>
          <button
            type="button"
            className="pagination-button"
            onClick={this.incrementPage}
          >
            <RiArrowDropRightLine size={20} />
          </button>
        </div>
      </>
    )
  }

  renderLoader = () => (
    <div className="carousel-loader">
      <Loader type="ThreeDots" color="#F7931E" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return isLoading ? this.renderLoader() : this.renderPopularRestaurants()
  }
}

export default PopularRestaurants
