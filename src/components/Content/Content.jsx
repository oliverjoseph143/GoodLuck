import React from 'react';
import './Content.css';
import img1 from '../../assets/cas2.jpg';
import img2 from '../../assets/car22img.jpeg';
import img3 from '../../assets/car33img.jpeg';
import img4 from '../../assets/car44img.jpeg';
import img5 from '../../assets/car55img.jpeg';

function Content() {
  return (
    <div className="content">
<section>
  <div class="container-fluid my-5">
    <div
      id="dotCarousel"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#dotCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#dotCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#dotCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#dotCarousel"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#dotCarousel"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={img1}
            class="d-block w-100 h-100"
            alt="Image 1"
          />
        </div>
        <div class="carousel-item">
          <img
            src={img2}
            class="d-block w-100 h-100"
            alt="Image 2"
          />
        </div>
        <div class="carousel-item">
          <img
            src={img3}
            class="d-block w-100 h-100"
            alt="Image 3"
          />
        </div>
        <div class="carousel-item">
          <img
            src={img4}
            class="d-block w-100 h-100"
            alt="Image 4"
          />
        </div>
        <div class="carousel-item">
          <img
            src={img5}
            class="d-block w-100 h-100"
            alt="Image 5"
          />
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#dotCarousel"
        data-bs-slide="prev"
      >
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#dotCarousel"
        data-bs-slide="next"
      >
      
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>   

<div className="referral-strip slide-in-left">
  <div className="referral-marquee">
    <span className="referral-text">
      <span className="referral-label">Welcome Bonus:</span>
      &nbsp;Welcome Bonus:
100 % Welcome Bonus on first deposit! Hurry up
<span id='yelcolor'>Affiliate Partnership:</span>
Explore the amazing affiliate program to earn money as you refer !
<span id='yelcolor'>          Referral Bonus:</span>
Great satisfaction comes from sharing with others. Invite your friends and families from your referral code and get rewarded ₹300 each.
    </span>
  </div>
</div> 

</div>

  );
}
export default Content;
