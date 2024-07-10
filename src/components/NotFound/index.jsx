import './index.css'

//import notFoundImg from '../../assets/not-found-image.png'

const NotFound = () => (
  <div className="not-found-bg-container">
    <img
      className="not-found-image"
      src="https://res.cloudinary.com/ddx1atlse/image/upload/v1720507337/Group_7504_st5f2a.png"
      alt="not found"
    />
    <div className="not-found-text-container">
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-para">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </div>
)

export default NotFound
