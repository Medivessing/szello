import React from "react";

const HeroSections = () => {
  return (
    <section className=" snap-section hero-section">
      <div className="main-name">
        <div className="name">
          <p className="">BALATONI SZELLŐ</p>
          <p className="kozmetika">HAJÓKOZMETIKA</p>
        </div>
      </div>
      <div className="hero-items">
        <div className="left">
          <p>Tiszta hajó, gondtalan vitorlázás.</p>
          <p className="secondary-description">
            Hagyja ránk hajója tisztaságát, és többé nem kell a kosz miatt
            aggódnia!
          </p>
        </div>
        <div className="right">
          <div className="right-items">
            <h3>Miért válasszon minket?</h3>
            <ul>
              <li>✅ Professzionális hajótisztítás</li>
              <li>✅ Környezetbarát tisztítószerek</li>
              <li>✅ Gyors és megbízható szolgáltatás</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wave-container">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            className="wave"
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L40,154.7C80,149,160,139,240,154.7C320,171,400,213,480,213.3C560,213,640,171,720,149.3C800,128,880,128,960,149.3C1040,171,1120,213,1200,197.3C1280,181,1360,107,1400,69.3L1440,32L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSections;
