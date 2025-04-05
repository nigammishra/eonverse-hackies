import React, { useState, useRef, useEffect } from "react";
import "./PandaForm.css"; // Use the updated CSS for styling
import video from "../../images/signinbackvideo.mov"; // Ensure the video path is correct
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "../../store/axios";

const CombinedForm = () => {
  // State for SignInForm
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Refs for PandaForm
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const eyeL = useRef(null);
  const eyeR = useRef(null);
  const handL = useRef(null);
  const handR = useRef(null);

  // PandaForm functions
  const normalEyeStyle = () => {
    if (eyeL.current && eyeR.current) {
      eyeL.current.style.cssText = `
        left: 0.6em;
        top: 0.6em;
      `;
      eyeR.current.style.cssText = `
        right: 0.6em;
        top: 0.6em;
      `;
    }
  };

  const normalHandStyle = () => {
    if (handL.current && handR.current) {
      handL.current.style.cssText = `
        height: 2.81em;
        top: 8.4em;
        left: 7.5em;
        transform: rotate(0deg);
      `;
      handR.current.style.cssText = `
        height: 2.81em;
        top: 8.4em;
        right: 7.5em;
        transform: rotate(0deg);
      `;
    }
  };

  useEffect(() => {
    // PandaForm event listeners
    const username = usernameRef.current;
    const password = passwordRef.current;

    if (username && password) {
      const handleUsernameFocus = () => {
        if (eyeL.current && eyeR.current) {
          eyeL.current.style.cssText = `
            left: 0.75em;
            top: 1.12em;
          `;
          eyeR.current.style.cssText = `
            right: 0.75em;
            top: 1.12em;
          `;
        }
        normalHandStyle();
      };

      const handlePasswordFocus = () => {
        if (handL.current && handR.current) {
          handL.current.style.cssText = `
            height: 6.56em;
            top: 3.87em;
            left: 11.75em;
            transform: rotate(-155deg);
          `;
          handR.current.style.cssText = `
            height: 6.56em;
            top: 3.87em;
            right: 11.75em;
            transform: rotate(155deg);
          `;
        }
        normalEyeStyle();
      };

      const handleDocumentClick = (e) => {
        if (e.target !== username && e.target !== password) {
          normalEyeStyle();
          normalHandStyle();
        }
      };

      username.addEventListener("focus", handleUsernameFocus);
      password.addEventListener("focus", handlePasswordFocus);
      document.addEventListener("click", handleDocumentClick);

      return () => {
        username.removeEventListener("focus", handleUsernameFocus);
        password.removeEventListener("focus", handlePasswordFocus);
        document.removeEventListener("click", handleDocumentClick);
      };
    }
  }, []);

  // SignInForm functions
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
    <div className="body-style">
      <video ref={videoRef} className="background-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container style-cont">
        <form onSubmit={handleSubmit} className="form-style">
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
              ref={usernameRef} // PandaForm username input
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
                ref={passwordRef} // PandaForm password input
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

        {/* PandaForm elements */}
        <div className="ear-l"></div>
        <div className="ear-r"></div>
        <div className="panda-face">
          <div className="blush-l"></div>
          <div className="blush-r"></div>
          <div className="eye-l">
            <div className="eyeball-l" ref={eyeL}></div>
          </div>
          <div className="eye-r">
            <div className="eyeball-r" ref={eyeR}></div>
          </div>
          <div className="nose"></div>
          <div className="mouth"></div>
        </div>
        <div className="hand-l" ref={handL}></div>
        <div className="hand-r" ref={handR}></div>
        <div className="paw-l"></div>
        <div className="paw-r"></div>
      </div>
    </div>
  );
};

export default CombinedForm;