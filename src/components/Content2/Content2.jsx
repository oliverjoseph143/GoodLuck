import React from 'react';
import './Content2.css';

// Reusing the same image for demo, you can change it later
import img11 from '../../assets/Float11.jpg';
import img12 from '../../assets/Float12.jpg';
import img13 from '../../assets/Float13.jpg';
import img14 from '../../assets/Float14.jpg';
import img21 from '../../assets/Float21.jpg';
import img22 from '../../assets/Float22.jpg';
import img23 from '../../assets/Float23.jpg';
import img24 from '../../assets/Float24.jpg';
import img31 from '../../assets/Float31.jpg';
import img32 from '../../assets/Float32.jpg';
import img33 from '../../assets/Float33.jpg';
import img34 from '../../assets/Float34.jpg';



const imageGroups = [
  [img11, img12, img13, img14],
  [img21, img22, img23, img24],
 [img31, img32, img33, img34]
];

const Content2 = () => {
  return (
    <section className="content2-section">
      {imageGroups.map((group, index) => (
        <div className="container" key={index}>
          <div className="row g-4">
            {group.map((imgSrc, idx) => (
              <div className="col-md-3 col-sm-6" key={idx}>
                <div className="floating-img">
                  <img src={imgSrc} alt={`Image ${idx + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Content2;
