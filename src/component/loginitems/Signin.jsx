import React, { useState, useRef, useEffect } from "react";
import "./signin.css";
import video from "../../images/signinbackvideo.mov";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirm password
  const [name, setName] = useState(""); // New state for name
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // New state for Sign Up
  const videoRef = useRef(null);

  useEffect(() => {
    // Slow down the video
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission based on the current view
    if (isForgotPassword) {
      console.log("Reset Password", { email });
    } else if (isSignUp) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
      } else {
        console.log("Sign Up", { name, email, password });
      }
    } else {
      console.log("Sign In", { email, password });
    }
  };

  const handleForgotPasswordClick = () => {
    setIsForgotPassword(true);
    setIsSignUp(false); // Ensure Sign Up view is hidden
  };

  const handleBackToSignInClick = () => {
    setIsForgotPassword(false);
    setIsSignUp(false); // Go back to sign-in
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
    setIsForgotPassword(false); // Ensure Forgot Password view is hidden
  };

  return (
    <div className="signin-form-container">
      <video ref={videoRef} className="background-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <form onSubmit={handleSubmit} className="signin-form">
        <h2 className="signin-heading">{isForgotPassword ? "Reset Password" : isSignUp ? "Sign Up" : "Sign In"}</h2>

        {/* Name input (only show for Sign Up) */}
        {isSignUp && (
          <div className="signin-input-box">
            <i className="signin-icon fa fa-user" aria-hidden="true"></i>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="signin-input"
            />
          </div>
        )}

        {/* Email input */}
        <div className="signin-input-box">
          <i className="signin-icon fa fa-user" aria-hidden="true"></i>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="signin-input"
          />
        </div>

        {/* Password input (only show this for Sign In and Sign Up) */}
        {(isSignUp || !isForgotPassword) && (
          <div className="signin-input-box">
            <i className="signin-icon fa fa-unlock-alt" aria-hidden="true"></i>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
              className="signin-input"
            />
          </div>
        )}

        {/* Confirm Password input (only show for Sign Up) */}
        {isSignUp && (
          <div className="signin-input-box">
            <i className="signin-icon fa fa-unlock-alt" aria-hidden="true"></i>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="signin-input"
            />
          </div>
        )}

        {/* Buttons */}
        <div className="signin-input-box row justify-content-center">
          <div className="col-md-12 text-center">
            <button type="submit" className="signin-submit-btn">
              {isForgotPassword ? "Reset Password" : isSignUp ? "Sign Up" : "Login"}
            </button>
          </div>
          <div className="col-md-12 text-center mt-3">
            {!isForgotPassword && !isSignUp && (
              <button type="button" onClick={handleSignUpClick} className="signin-submit-btn">
                Sign Up
              </button>
            )}
          </div>
          <div className="col-md-12 text-center">
            {isForgotPassword ? (
              <button
                type="button"
                className="signin-forgot-link"
                onClick={handleBackToSignInClick}
              >
                Back to Sign In
              </button>
            ) : (
              <Link
                to="#"
                className="signin-forgot-link"
                onClick={handleForgotPasswordClick}
              >
                Forgot Password
              </Link>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
