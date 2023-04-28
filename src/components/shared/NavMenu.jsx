import iconFacebook from "../../images/icon-facebook.svg"
import iconTwitter from "../../images/icon-twitter.svg"

function NavMenu() {
  return (
    <div className="modal-nav">
      <ul className="nav">
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
        <li><button className="btn btn-login">Login</button></li>
      </ul>
      <div className="icons">
        <img src={iconFacebook} alt="Facebook" />
        <img src={iconTwitter} alt="Twitter" />
      </div>
    </div>
  );
}

export default NavMenu;