import frame from "@assets/image/framet.svg";
import star from "@assets/image/star.svg";

const Skils = () => {
  return (
    <section className="container main__skils" id="skills">
      <h2>Skills</h2>
      <img src={star} alt=""  className="star"/>
      <ul className="main__skils-list">
        <li>
          <a href="#">TypeScript</a>
        </li>
        <li>
          <a href="#">JavaScript</a>
          <i className="fa-brands fa-js"></i>
        </li>
        <li>
          <a href="#">React</a>
          <i className="fa-brands fa-react"></i>
        </li>
        <li>
          <a href="#">Html 5</a>
          <i className="fa-brands fa-html5"></i>
        </li>
        <li>
          <a href="#">Scss/Css</a>
          <i className="fa-brands fa-sass"></i>
        </li>
        <li>
          <a href="#">Git</a>
          <i className="fa-brands fa-github"></i>
        </li>
      </ul>
      <img src={frame} alt="" />
    </section>
  );
};

export default Skils;
