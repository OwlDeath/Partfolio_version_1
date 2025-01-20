import me from "@assets/image/me.svg";
import frame from "@assets/image/frame.svg";
import star from "@assets/image/star.svg";

const Content = () => {

  return (
    <div className="header">
      <div className="header__content">
        <img src={star} alt="" className="star"/>
        <img src={me} alt="" className="header__content-avatar" />
        <h1>Hi. I’m Doston. A frontend developer.</h1>
        <img src={frame} alt="" />
      </div>
    </div>
  );
};

export default Content;
