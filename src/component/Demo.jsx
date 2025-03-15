import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import './demo.css';
import image1 from '../images/featuresimg1.jpg';
import image2 from '../images/feimg2.jpg';
import image3 from '../images/feiimg3.jpg';
import image4 from '../images/feimg4.jpg';
import video from "../images/demobackvideo.mov";

const sciFiAudioUrl = "https://pixabay.com/sound-effects/futuristic-beep-123107/";

const Demo = () => {
  const videoRef = useRef(null);
  const audioRef = useRef(new Audio(sciFiAudioUrl));
  const [isAudioAllowed, setIsAudioAllowed] = useState(false);
  const [loading, setLoading] = useState(true); // State for loader

  useEffect(() => {
    // Slow down the video
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Adjust playback speed (0.8 is 80% speed)
    }

    // Simulate loading content
    const timer = setTimeout(() => {
      setLoading(false); // Content is loaded after 2 seconds (simulated)
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const enableAudio = () => {
    setIsAudioAllowed(true);
  };

  const handlePlaySound = () => {
    if (isAudioAllowed) {
      audioRef.current.play().catch(err => console.error("Audio playback error:", err));
    }
  };

  const handleLoreExpansion = () => {
    Swal.fire({
      title: 'Hidden Lore',
      text: 'This is a hidden lore expansion. Welcome to the Eonverse!',
      icon: 'info',
      confirmButtonText: 'Cool!',
    });
  };

  return (
    <div className="container" onClick={enableAudio}>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <video ref={videoRef} className="background-video" autoPlay muted loop>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="col-md-3 d-flex justify-content-center" onClick={handlePlaySound}>
              <div className="unique-lighthouse">
                <img className='demo-image' src={image1} alt="a lighthouse" />
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center" onClick={handleLoreExpansion}>
              <div className="unique-old-city">
                <img className='demo-image' src={image2} alt="an old city" />
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center" onClick={handlePlaySound}>
              <div className="unique-lighthouse">
                <img className='demo-image' src={image3} alt="a lighthouse" />
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center" onClick={handleLoreExpansion}>
              <div className="unique-old-city">
                <img className='demo-image' src={image4} alt="an old city" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Demo;
