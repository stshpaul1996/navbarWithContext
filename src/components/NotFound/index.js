// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutBgClassName = isDarkTheme
        ? 'dark-about-container'
        : 'light-about-container'

      const aboutTextClassName = isDarkTheme
        ? 'about-heading'
        : 'about-light-heading'

      return (
        <div className={`about-app-container ${aboutBgClassName}`}>
          <Navbar />
          <div className="about-page-container">
            <div className="about-container">
              <img
                className="dark-about-image"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1 className={aboutTextClassName}>Lost Your Way?</h1>
              <p className={aboutTextClassName}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
