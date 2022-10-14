import React from 'react';
import Media from 'react-media';
import { Link } from 'react-router-dom';
import LandingImage from "../images/linkedin-sales-solutions-QgYvORVDdd8-unsplash.jpg";

const LandingMain = () => {
  return (
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
  );
};

export default LandingMain