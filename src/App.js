import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="header text-white py-5 text-center">
        <h1 className="name">Mihir Biswas</h1>
        <p className="job-title">Full Stack Developer</p>
      </header>

      <section className="about py-5">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p>
            I'm a passionate Full Stack Developer with expertise in JavaScript,
            React, Node.js, and more. I enjoy creating web applications and
            solving complex problems.
          </p>
        </div>
      </section>

      <section className="contact py-5 text-white">
        <div className="container">
          <h2 className="section-title text-white">Contact Me</h2>
          <p>Email: biswasmihir355@gmail.com</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/mihir-biswas-55a563293/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/Mihir355"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
