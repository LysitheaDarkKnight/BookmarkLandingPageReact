import logoBookmarkWhite from "../images/logo-bookmark-white.svg"
import iconFacebook from "../images/icon-facebook.svg"
import iconTwitter from "../images/icon-twitter.svg"

function Footer() {
  return (
    <footer >
      <div className="container">
        <img src={logoBookmarkWhite} alt="Bookmark" className="bookmark" />
        <ul className="nav">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div className="icons">
            <img src={iconFacebook} alt="Facebook" />
            <img src={iconTwitter} alt="Twitter" />
        </div>
        </div>
    </footer>
  )
}

export default Footer
