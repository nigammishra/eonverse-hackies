import React, { useState } from 'react';
import { FaUnlockAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './CapsuleScene.css';

const TimeCapsulePage = () => {
  const [passcode, setPasscode] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDecryption = () => {
    if (passcode === 'nigam') {
      setPasscode(''); // Clear the input field after successful decryption
      navigate('/features'); // Navigate to the feature page after successful decryption
    } else {
      Swal.fire({
        title: 'Invalid Passcode!',
        text: 'Please check your passcode and try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="eonverse-container">
      <motion.div
        className="eonverse-container flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="eonverse-title" style={{ marginTop: '100px' }}>Eonverse Time Capsule</h1>

        {/* Passcode Decryption Section */}
        <div className="mt-10">
          <h2 className="eonverse-subtitle">Enter Passcode to Unlock Features</h2>
          <input
            type="text"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className="eonverse-input mb-5"
            placeholder="Enter Passcode"
          />
          <button
            onClick={handleDecryption}
            className="eonverse-button flex items-center"
          >
            <FaUnlockAlt className="mr-2" /> Unlock
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default TimeCapsulePage;
