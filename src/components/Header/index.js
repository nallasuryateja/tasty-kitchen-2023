import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <nav className="nav-header">
        <div className="nav-bar-large-container">
          <div className="icon-container">
            <Link to="/" className="nav-link">
              <h1 className="icon-heading">MovieDb</h1>
            </Link>
          </div>

          <ul className="nav-menu">
            <Link to="/" className="nav-link">
              <li className="nav-menu-item">Home</li>
            </Link>

            <Link to="/top-rated" className="nav-link">
              <li className="nav-menu-item">Top Rated</li>
            </Link>
            <Link to="/up-coming" className="nav-link">
              <li className="nav-menu-item">Upcoming</li>
            </Link>
          </ul>
          <input
            value={searchInput}
            type="search"
            onChange={this.onChangeInput}
          />
          <button type="button">Search</button>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
