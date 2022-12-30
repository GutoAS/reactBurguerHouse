import React from "react";
import aboutimage from "../assets/about.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-text">
        <h1>PROXIMOS PRATOS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          consequatur repellat repudiandae amet quaerat a excepturi accusantium
          sapiente, fugit eius laborum ipsum laboriosam totam, commodi quae
          beatae labore consequuntur maiores.
        </p>
        <button>Mais Informações</button>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
    </div>
  );
};

export default About;
