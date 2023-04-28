import React from 'react'
import bgDots from "../../images/bg-dots.svg"

function Card(card) {
  return (
    <div className="card">
        <img src={card.image} alt={card.alt} className="logo-browser" />
        <h3>{card.type}</h3>
        <p>{card.version}</p>
        <img src={bgDots} alt="" className="dots"/>
        <button className="btn btn-add">Add & Install Extension</button>
    </div>
  )
}

export default Card
