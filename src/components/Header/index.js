import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="header-container">
      <nav className="nav-container">
        <Link to="/">
          <img
            className="header-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          />
        </Link>

        <div className="mobile-nav-container">
          <Link to="/">
            <button className="mobile-buttons" type="button">
              <AiFillHome className="mobile-icons" />
            </button>
          </Link>
          <Link to="/jobs">
            <button className="mobile-buttons" type="button">
              <BsFillBriefcaseFill className="mobile-icons" />
            </button>
          </Link>
          <button
            onClick={onClickLogout}
            className="mobile-buttons"
            type="button"
          >
            <FiLogOut className="mobile-icons" />
          </button>
        </div>

        <div className="large-nav-container">
          <Link className="large-link" to="/">
            <p className="large-buttons">Home</p>
          </Link>
          <Link className="large-link" to="/jobs">
            <p className="large-buttons">Jobs</p>
          </Link>
          <button
            onClick={onClickLogout}
            className="large-logout-button"
            type="button"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  )
}

export default withRouter(Header)
