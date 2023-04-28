import iconArrow from "../images/icon-arrow.svg"

import { useState } from "react"

function Faq() {
    const [question, setQuestion] = useState('')

    
    const handleFaqSelection = (id) => {
        if (id === question){
            setQuestion('')
        } else {
            setQuestion(id);
        }
      }

  return (
    <div className="faq">
        <div className="container">
        <h2>Frequently Asked Questions</h2>
        <p>Here are some of our FAQs. If you have any other questions you’d like 
        answered please feel free to email us.</p>
        <ul className="faq__questions">
            <li>
                <div onClick={() => handleFaqSelection('q1')} className="question">
                    <p>What is Bookmark?</p>
                    <img className={question === 'q1' ? 'selected' : ''}  src={iconArrow} alt="click" />
                </div>

                {question === 'q1' && (
                <p id="q1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>
                )}
            </li>
            <li>
                <div onClick={() => handleFaqSelection('q2')} className="question">
                    <p>How can I request a new browser?</p>
                    <img className={question === 'q2' ? 'selected' : ''} src={iconArrow} alt="click" />
                </div>

                {question === 'q2' && (
                <p id="q2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>
                )}
            </li>
            <li>
                <div onClick={() => handleFaqSelection('q3')} className="question">
                    <p>Is there a mobile app?</p>
                    <img className={question === 'q3' ? 'selected' : ''} src={iconArrow} alt="click" />
                </div>

                {question === 'q3' && (
                <p id="q3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>
                )}
            </li>
            <li>
                <div onClick={() => handleFaqSelection('q4')} className="question">
                    <p>What about other Chromium browsers?</p>
                    <img className={question === 'q4' ? 'selected' : ''} src={iconArrow} alt="click" />
                </div>

                {question === 'q4' && (
                <p id="q4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>
                )}
            </li>
        </ul>
        <button className="btn btn-info">More Info</button>
        </div>
    </div>
  )
}

export default Faq
