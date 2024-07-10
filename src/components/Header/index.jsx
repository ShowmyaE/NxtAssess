import {Link, withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'

import './index.css'

//import logo from '../../assets/header-logo.png'

const Header = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="header-container">
      <Link to="/" className="header-home-link">
        <img
          src="https://res.cloudinary.com/ddx1atlse/image/upload/v1720508974/headerImage_gn9aum.png"
          alt="website logo"
          className="header-logo-img"
        />
      </Link>
      <button
        type="button"
        onClick={onClickLogout}
        className="header-logout-btn"
      >
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
