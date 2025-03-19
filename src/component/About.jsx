import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaUsers, FaTrophy } from 'react-icons/fa';
import './about.css';

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className="about-body">
      {loading ? (
        <div className="about-loader-container">
          <div className="about-sci-fi-loader"></div>
        </div>
      ) : (
        <section className="about-section">
          <motion.div 
            className="about-hero-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="about-title">Welcome to the Eonverse Hackathon</h1>
            <p className="about-subtitle">Where innovation meets the future! Compete, collaborate, and create cutting-edge solutions in this sci-fi-themed hackathon.</p>
          </motion.div>

          <div className="about-details">
            <motion.div 
              className="about-card"
              whileHover={{ scale: 1.05 }}
            >
              <FaLaptopCode size={50} className="about-icon" />
              <h3 className="about-card-title">Code & Innovate</h3>
              <p className="about-card-text">Use cutting-edge technologies to build futuristic applications.</p>
            </motion.div>
            
            <motion.div 
              className="about-card"
              whileHover={{ scale: 1.05 }}
            >
              <FaUsers size={50} className="about-icon" />
              <h3 className="about-card-title">Collaborate & Compete</h3>
              <p className="about-card-text">Work with top talents, solve challenges, and compete for amazing prizes.</p>
            </motion.div>
            
            <motion.div 
              className="about-card"
              whileHover={{ scale: 1.05 }}
            >
              <FaTrophy size={50} className="about-icon" />
              <h3 className="about-card-title">Win Big</h3>
              <p className="about-card-text">Showcase your skills and grab exciting rewards and recognition.</p>
            </motion.div>
          </div>

          <motion.div 
            className="about-cta"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="about-cta-title">Ready to Shape the Future?</h2>
            <p className="about-cta-text">Join us in this journey of innovation and take your skills to the next level.</p>
            <Link
             to="/signin" className="about-register-button">Register Now</Link>
          </motion.div>
        </section>
      )}
    </div>
  );
};

export default About;