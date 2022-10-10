import React from 'react';
import Media from 'react-media';
import { Link } from 'react-router-dom';
import "../css/landingPage.css";
import LandingImage from "../images/linkedin-sales-solutions-QgYvORVDdd8-unsplash.jpg";
import MainBackground from '../images/jason-dent-eB1ziPSixlQ-unsplash.jpg';
import { ReactComponent as RemotiveLogo } from '../icons/remotive-logo.svg';
import { ReactComponent as IconFinderLogo } from '../icons/iconfinder.svg';

const LandingPage = () => {
  return (
    <div className='landing-page' style={{ backgroundImage: `url(${MainBackground})`}}>
        <main>
          <Media query="(min-width:600px)">
            {
              matches => matches ? (
                <>
                <div className='landing-page-large-screen' style={{ backgroundImage: `url(${LandingImage})`}}>
                  <div className='bg-blur'>
                  <div className="landing-text">
                    <h1>Find Your Dream Job Today</h1>
                    Your tech skills are in high demand around the world. Find jobs in your location, as well as in remote locations in the United States, Europe and more.
                  </div>
                  <Link to="/jobs">
                    <button>Search Jobs</button>
                  </Link>
                  </div>
                </div>

                </>
              ) : (
                <>
                <div className='landing-page-card'>
                  <figure className='landing-image'>
                    <img src={LandingImage} alt="" />
                    <figcaption>
                      <h1>Find Your Dream Job Today</h1>
                      Your tech skills are in high demand around the world. Find jobs in your location, as well as in remote locations in the United States, Europe and more.
                    </figcaption>
                  </figure>
                  <Link to="/jobs">
                    <button>Search Jobs</button>
                  </Link>
                </div>
                
                </>
              )
            }

          </Media>
          

          <div className="partners">
            <a href="https://remotive.com/">
              <RemotiveLogo/>
            </a>
            <a href="https://www.iconfinder.com/">
              <IconFinderLogo/>
            </a>
          </div>
        </main>
    </div>
  )
}

export default LandingPage