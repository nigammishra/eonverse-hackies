import React from 'react'
import './features.css'

const Features = () => {
  return (
    <div className="container">
      
      <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="col-md-3 d-flex justify-content-center">
          <div className="unique-lighthouse">
            <img src="https://picsum.photos/id/58/300/300" alt="a lighthouse"/>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
          <div className="unique-old-city">
            <img src="https://picsum.photos/id/61/300/300" alt="an old city"/>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
          <div className="unique-lighthouse">
            <img src="https://picsum.photos/id/58/300/300" alt="a lighthouse"/>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
          <div className="unique-old-city">
            <img src="https://picsum.photos/id/61/300/300" alt="an old city"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
