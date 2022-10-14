import React from 'react';
import "../css/landingPage.css";
import MainBackground from '../images/jason-dent-eB1ziPSixlQ-unsplash.jpg';
import LandingMain from '../components/LandingMain';
import Partners from '../components/Partners';

const LandingPage = () => {
  return (
    <div className='landing-page' style={{ backgroundImage: `url(${MainBackground})`}}>
        <main>
          <LandingMain/>
        </main>
        <footer>
          <Partners/>
        </footer>
    </div>
  )
}

export default LandingPage