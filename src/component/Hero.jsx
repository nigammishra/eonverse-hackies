import { useEffect, useState } from "react";
import "./Hero.css";

// Import images
import image1 from "../images/capimg1.avif";
import image2 from "../images/capimg2.avif";
import image3 from "../images/capimg3.jpg";
import image4 from "../images/capimg4.jpg";
import image5 from "../images/capimg5.jpg";
import image6 from "../images/capimg6.jpg";

const images = [image1, image2, image3, image4, image5, image6];

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const stack = document.querySelector(".stack");
    const cards = Array.from(stack.children)
      .reverse()
      .filter((child) => child.classList.contains("card"));

    cards.forEach((card) => stack.appendChild(card));

    const moveCard = () => {
      const lastCard = stack.lastElementChild;
      if (lastCard.classList.contains("card")) {
        lastCard.classList.add("swap");
        setTimeout(() => {
          lastCard.classList.remove("swap");
          stack.insertBefore(lastCard, stack.firstElementChild);
        }, 1200);
      }
    };

    const autoplayInterval = setInterval(moveCard, 4000);

    const handleClick = (e) => {
      const card = e.target.closest(".card");
      if (card && card === stack.lastElementChild) {
        card.classList.add("swap");
        setTimeout(() => {
          card.classList.remove("swap");
          stack.insertBefore(card, stack.firstElementChild);
        }, 1200);
      }
    };

    stack.addEventListener("click", handleClick);

    return () => {
      clearInterval(autoplayInterval);
      stack.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <main>
      <div className="content" style={isMobile ? { marginTop: "30px" } : {}}>
        <h1>FrontEnd Ace...</h1>
        <p>
          "Created a hero section with a Bootstrap `col-6` layout, featuring a
          3D carousel on one side, providing a dynamic and visually immersive
          experience that draws users' attention."
        </p>
        <a href="https://nigammishra.github.io/Nigam_Portfolio2/">
          <button className="btn">Explore More</button>
        </a>
      </div>
      <div className="stack" style={isMobile ? { marginTop: "60px" } : {}}>
        {images.map((src, index) => (
          <div key={index} className="card">
            <img src={src} alt="herosectionimage" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Hero;
