import illustrationFeaturesTab1 from "../images/illustration-features-tab-1.svg"
import illustrationFeaturesTab2 from "../images/illustration-features-tab-2.svg"
import illustrationFeaturesTab3 from "../images/illustration-features-tab-3.svg"

import {motion, AnimatePresence} from 'framer-motion'
import { useState } from "react"
import Tab from "./shared/Tab"

function Features() {
    const [tab, setTab] = useState('tab-1')
  return (
    <div className='features'>
      <div className="container">
        <h2>Features</h2>
        <p> Our aim is to make it quick and easy for you to access your favourite websites. 
            Your bookmarks sync between your devices so you can access them on the go.</p>
        <ul className='features__hover'>
            <li onClick={() => setTab('tab-1')} className={tab === 'tab-1' ? 'selected' : ''} id='simple-bookmarking'>Simple Bookmarking</li>
            <li onClick={() => setTab('tab-2')} className={tab === 'tab-2' ? 'selected' : ''} id='speedy-searching'>Speedy Searching</li>
            <li onClick={() => setTab('tab-3')} className={tab === 'tab-3' ? 'selected' : ''} id='easy-sharing'>Easy Sharing</li>
        </ul>

        {tab === 'tab-1' && (
          <Tab
          id="tab-1"
          image={illustrationFeaturesTab1}
          alt="Tab1"
          title="Bookmark in one click"
          description="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
          buttonText="More Info"
        />

        )}
        {tab === 'tab-2' && (
                  <Tab
                  id="tab-2"
                  image={illustrationFeaturesTab2}
                  alt="Tab2"
                  title="Intelligent search"
                  description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
                  buttonText="More Info"
                />
        )}
        {tab === 'tab-3' && (
          <Tab
          id="tab-3"
          image={illustrationFeaturesTab3}
          alt="Tab3"
          title="Share your bookmarks"
          description="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
          buttonText="More Info"
        />
        )}
        {/* </AnimatePresence> */}
        </div>
    </div>
  )
}

export default Features
