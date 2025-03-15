# Eonverse Time Capsule

**Eonverse Time Capsule** is a 3D interactive sci-fi story portal, offering a unique experience with a floating time capsule. The site features glowing cyberpunk aesthetics, hidden messages, and an animated UI. Built with React, Three.js, GSAP, Framer Motion, Spring Boot, and PostgreSQL, the project showcases immersive animations and interactive elements.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a sci-fi inspired website that allows users to explore the **Eonverse Time Capsule**. It combines interactive 3D elements with smooth animations to bring a futuristic experience. The user interacts with a floating time capsule while discovering hidden messages and exploring a cyberpunk-themed interface.

## Technologies Used

- **React.js**: Front-end library for building user interfaces.
- **Three.js**: JavaScript library for creating 3D graphics and animations.
- **GSAP (GreenSock Animation Platform)**: JavaScript library for high-performance animations.
- **Framer Motion**: React library for animations and transitions.
- **Spring Boot**: Backend framework for creating the server-side logic.
- **PostgreSQL**: Database used to store and manage messages and data.
- **TailwindCSS**: Utility-first CSS framework for designing the website.

## Features

- **3D Interactive Time Capsule**: Users can interact with the floating time capsule and explore hidden features.
- **Cyberpunk Aesthetics**: The website design follows glowing, futuristic cyberpunk aesthetics.
- **Hidden Messages**: Users can uncover hidden messages within the site, enhancing the storyline.
- **Smooth Animations**: GSAP and Framer Motion handle all animations for seamless user interaction.
- **Responsive Design**: Optimized for mobile and desktop devices with responsive layout via TailwindCSS.

## Installation

Follow the steps below to install and run the project locally:

1. Clone the repository:

    ```bash
    git clone (https://github.com/nigammishra/eonverse-hackies.git)
    ```

2. Navigate to the project directory:

    ```bash
    cd eonverse-time-capsule
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Set up the backend:

    - Navigate to the `backend/` directory and configure Spring Boot with PostgreSQL.
    - Update the `application.properties` file with your PostgreSQL credentials.

5. Run the project:

    - To run the frontend:

        ```bash
        npm start
        ```

    - To run the backend:

        ```bash
        mvn spring-boot:run
        ```

6. Open your browser and go to `http://localhost:3000` to view the website.

## Usage

Once the application is running, you can:

- Interact with the floating time capsule to trigger animations and uncover hidden messages.
- Explore the cyberpunk-themed interface.
- The website features smooth transitions and animations powered by GSAP and Framer Motion.

## Project Structure


- **backend/**: Contains the Spring Boot backend code.
- **public/**: Static files like `index.html`.
- **src/**: React front-end components and pages.
- **tailwind.config.js**: TailwindCSS configuration.
- **package.json**: Project dependencies and scripts.

## Contributing

Feel free to fork this repository and submit pull requests. Here are a few ways you can contribute:

- Report bugs or request features.
- Contribute code, design, or documentation improvements.

Please follow the standard GitHub contribution process: fork the repo, create a new branch, make your changes, and submit a pull request.

## License

MIT License

Copyright (c) [2025] [Frontend Ace]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

