import logoChrome from "../images/logo-chrome.svg"
import logoFirefox from "../images/logo-firefox.svg"
import logoOpera from "../images/logo-opera.svg"
import bgDots from "../images/bg-dots.svg"
import Card from "./shared/Card"

function Download() {
  return (
    <div className="download">
      <div className="container">
      <h2>Download the extension</h2>
      <p>We've got more browsers in the pipeline. Please do let us know if you've 
  got a favourite you'd like us to prioritize.</p>
        <div className="cards">
        <Card
          image={logoChrome}
          alt="Chrome"
          type="Add to Chrome"
          version="Minimum version 62"
          buttonText="More Info"
        />
        <Card
          image={logoFirefox}
          alt="Firefox"
          type="Add to Firefox"
          version="Minimum version 55"
        />
        <Card
          image={logoOpera}
          alt="Opera"
          type="Add to Opera"
          version="Minimum version 46"
        />
        </div>
        </div>
    </div>
  )
}

export default Download
