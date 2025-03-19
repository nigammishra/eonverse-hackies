import React, { useState, useRef, useEffect } from "react";
import "./signin.css";
import video from "../../images/signinbackvideo.mov";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "../../store/axios";


const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }

    setTimeout(() => setLoading(false), 3000); // Simulate loading time
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isForgotPassword) {
      try {
        await axios.put("/update-password", { email });
        swal("Reset Password", `Reset link sent to: ${email}`, "success").then(
          () => resetFields()
        );
      } catch (error) {
        swal(
          "Error",
          error.response?.data?.message || "Something went wrong",
          "error"
        );
      }
    } else if (isSignUp) {
      if (password !== confirmPassword) {
        swal("Error", "Passwords do not match!", "error");
      } else {
        try {
          await axios.post("/register", {
            name,
            email,
            password,
            confirmPassword,
          });
          swal(
            "Success",
            `Welcome, ${name}! Your account has been created.`,
            "success"
          ).then(() => resetFields());
        } catch (error) {
          swal(
            "Error",
            error.response?.data?.message || "Something went wrong",
            "error"
          );
        }
      }
    } else {
      try {
        const response = await axios.post("/login", { email, password });
        swal(
          "Success",
          `Signed in as ${response.data.user.name}`,
          "success"
        ).then(() => {
          resetFields();
          navigate("/demo"); // Redirecting to demo page
        });
      } catch (error) {
        swal(
          "Error",
          error.response?.data?.message || "Invalid credentials",
          "error"
        );
      }
    }
  };

  const resetFields = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
  };

  const handleForgotPasswordClick = () => {
    setIsForgotPassword(true);
    setIsSignUp(false);
  };

  const handleBackToSignInClick = () => {
    setIsForgotPassword(false);
    setIsSignUp(false);
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
    setIsForgotPassword(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="signin-form-container">
      {loading ? (
        <div className="loader-container">
          <div className="sci-fi-loader"></div>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            className="background-video"
            autoPlay
            muted
            loop
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <form onSubmit={handleSubmit} className="signin-form">
            <h2 className="signin-heading">
              {isForgotPassword
                ? "Reset Password"
                : isSignUp
                ? "Sign Up"
                : "Sign In"}
            </h2>

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

            {(isSignUp || !isForgotPassword) && (
              <div className="signin-input-box">
                <i
                  className="signin-icon fa fa-unlock-alt"
                  aria-hidden="true"
                ></i>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  required
                  className="signin-input"
                />
                <i
                  className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={togglePasswordVisibility}
                  aria-hidden="true"
                ></i>
              </div>
            )}

            {isSignUp && (
              <div className="signin-input-box">
                <i
                  className="signin-icon fa fa-unlock-alt"
                  aria-hidden="true"
                ></i>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="signin-input"
                />
                <i
                  className={`fa ${
                    showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                  onClick={toggleConfirmPasswordVisibility}
                  aria-hidden="true"
                ></i>
              </div>
            )}

            <div className="signin-input-box row justify-content-center">
              <div className="col-md-12 text-center">
                <button type="submit" className="signin-submit-btn">
                  {isForgotPassword
                    ? "Reset Password"
                    : isSignUp
                    ? "Sign Up"
                    : "Login"}
                </button>
              </div>
              <div className="col-md-12 text-center mt-3">
                {!isForgotPassword && !isSignUp && (
                  <button
                    type="button"
                    onClick={handleSignUpClick}
                    className="signin-submit-btn"
                  >
                    Sign Up
                  </button>
                )}
              </div>
              <div className="col-md-12 text-center">
                {isForgotPassword ? (
                  <button
                    type="button"
                    className="signin-forgot-link signin-submit-btn"
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
        </>
      )}
    </div>
  );
};

export default SignInForm;
