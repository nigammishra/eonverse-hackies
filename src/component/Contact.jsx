import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 3 seconds)
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="sci-fi-loader"></div>
        </div>
      ) : (
        <div>Contact</div>
      )}
    </div>
  );
};

export default Contact;
