import React from 'react';
import './Content.css';
import Img1 from '../../assets/dash5.jpg';
import Img2 from '../../assets/dash2.jpg';
import Img3 from '../../assets/dash3.jpg';
import Img4 from '../../assets/dash4.jpg';

function Content() {
  return (
    <div className="content">
      <section>
        <div className="container-fluid my-5 bannerImg">
          <div
            id="dotCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            <div className="carousel-indicators">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#dotCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-current={index === 0 ? 'true' : undefined}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner carousel-wrapper">
              <div className="carousel-item active">
                <img src={Img1} className="d-block w-100 carousel-img" alt="Image 1" />
              </div>
              <div className="carousel-item">
                <img src={Img2} className="d-block w-100 carousel-img" alt="Image 2" />
              </div>
              <div className="carousel-item">
                <img src={Img3} className="d-block w-100 carousel-img" alt="Image 3" />
              </div>
              <div className="carousel-item">
                <img src={Img4} className="d-block w-100 carousel-img" alt="Image 4" />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#dotCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#dotCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <div className="referral-strip slide-in-left">
        <div className="referral-marquee">
          <span className="referral-text">
            <span className="referral-label">Welcome Bonus:</span>&nbsp;
            100% Welcome Bonus on first deposit! Hurry up!
            <span id="yelcolor"> Affiliate Partnership: </span>
            Explore the amazing affiliate program to earn money as you refer!
            <span id="yelcolor"> Referral Bonus: </span>
            Invite your friends and families from your referral code and get rewarded ₹300 each.
          </span>
        </div>
      </div>
    </div>
  );
}
export default Content;



