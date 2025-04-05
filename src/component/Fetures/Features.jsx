import React from 'react';
import './features.css'; // We'll create this for styling
import capimg1 from '../../assets/images/capimg1.avif';
import capimg2 from '../../assets/images/capimg2.avif';
import capimg3 from '../../assets/images/capimg3.jpg';
import capimg4 from '../../assets/images/capimg4.jpg';
import capimg5 from '../../assets/images/capimg5.jpg';
import capsule1 from '../../assets/images/capsule1.jpg';
import featuresimg1 from '../../assets/images/featuresimg1.jpg';
import feiimg3 from '../../assets/images/feiimg3.jpg';
import feimg2 from '../../assets/images/feimg2.jpg';
import feimg4 from '../../assets/images/feimg4.jpg';
import modeimg from '../../assets/images/modeimg.jpg';

const Features = () => {
  const images = [
    capimg1, capimg2, capimg3, capimg4, capimg5,
    capsule1, featuresimg1, feiimg3, feimg2, feimg4
  ];

  return (
    <div className="banner" style={{ '--bg-image': `url(${modeimg})` }}>
      <div className="slider" style={{ '--quantity': images.length }}>
        {images.map((img, index) => (
          <div className="item" style={{ '--position': index + 1 }} key={index}>
            <img src={img} alt={`slider-${index}`} />
          </div>
        ))}
      </div>
      <div className="content">
        <h1 data-content="EONVERCE">EONVERCE</h1>
        <div className="author">
          <h2>LUN DEV</h2>
          <p><b>Web Design</b></p>
          <p>Subscribe to the channel to watch many interesting videos</p>
        </div>
        <div className="model"></div>
      </div>
    </div>
  );
};

export default Features;
