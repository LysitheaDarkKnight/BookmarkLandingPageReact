import illustrationHero from "../images/illustration-hero.svg"

function Manager() {
  return (
    <main className="manager">
      <div className="container">
        <div className="manager__img">
          <img src={illustrationHero} alt="Illustration" />
        </div>
        
        <div className="manager__description">
          <h1>A Simple Bookmark Manager</h1>
          <p>A clean and simple interface to organize your favourite websites. Open a new 
          browser tab and see your sites load instantly. Try it for free.</p>
          <div className="selection">
              <button className="btn btn-chrome">Get it on Chrome</button>
              <button className="btn btn-firebox">Get it on Firebox</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Manager
