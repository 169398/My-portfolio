import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaLinkedin, FaTwitter, FaGithub, FaDownload } from "react-icons/fa"; // Import the icons
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/idris-kulubi");
  };

  const handleTwitterClick = () => {
    window.open("https://twitter.com/IdrisMulesi");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/169398");
  };

  const handleResumeDownload = () => {
    const resumeUrl =
      "/"
    window.open(resumeUrl, "_blank");
  };

  //  This renders the PDF in an iframe
  const PDFViewer = () => {
    const resumeUrl =
      "";

    return (
      <iframe src={resumeUrl} width="100%" height="600" title="PDF Viewer" />
    );
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Idris Kulubi
          <br />
          Web developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          <div className="home__social-links">
            <a onClick={handleLinkedInClick}>
              <FaLinkedin />
            </a>
            <a onClick={handleTwitterClick}>
              <FaTwitter />
            </a>
            <a onClick={handleGitHubClick}>
              <FaGithub />
            </a>
            <a onClick={handleResumeDownload}>
              <FaDownload />
            </a>
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
