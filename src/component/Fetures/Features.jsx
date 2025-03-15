import React, { useState } from 'react'
import './features.css'
import image1 from '../../images/featuresimg1.jpg';
import image2 from '../../images/feimg2.jpg';
import image3 from '../../images/feiimg3.jpg';
import image4 from '../../images/feimg4.jpg';



const Features = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3000); // Simulate loading time
  return (
    <>
    {loading ? (
      <div className="loader-container">
        <div className="sci-fi-loader"></div>
      </div>
    ) : (
      <div className="container">
      
      <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="col-md-3 d-flex justify-content-center">
          <div className="unique-lighthouse">
            <img src={image1} alt="a lighthouse"/>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
          <div className="unique-old-city">
            <img src={image2} alt="an old city"/>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
          <div className="unique-lighthouse">
            <img src={image3} alt="a lighthouse"/>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
          <div className="unique-old-city">
            <img src={image4} alt="an old city"/>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  )
}

export default Features
