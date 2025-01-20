import wid from '@assets/image/work1.svg'
import coffe from '@assets/image/work2.svg'
import lamp from '@assets/image/work3.svg'
import mik from '@assets/image/work4.svg'
import frame from '@assets/image/framework.svg'
import star from "@assets/image/star.svg";

const WorkExp = () => {
  return (
    <>
    <section className="container work">
      <h2>Work Experience</h2>
      <img src={star} alt=""  className='star'/>
      <div className="work__box">
        <div className="work__box-card">
          <img src={wid} alt="" />
          <div className="work__box-content">
            <h3>CIB on the Mobile</h3>
            <p>
              Take your client onboard seamlessly by our amazing tool of digital
              onboard process.
            </p>
            <a href="">LEARN MORE</a>
          </div>
        </div>
        <div className="work__box-card">
          <img src={lamp} alt="" />
          <div className="work__box-content">
            <h3>CIB on the Mobile</h3>
            <p>
              Take your client onboard seamlessly by our amazing tool of digital
              onboard process.
            </p>
            <a href="">LEARN MORE</a>
          </div>
        </div>
        <div className="work__box-card">
          <img src={coffe} alt="" />
          <div className="work__box-content">
            <h3>CIB on the Mobile</h3>
            <p>
              Take your client onboard seamlessly by our amazing tool of digital
              onboard process.
            </p>
            <a href="">LEARN MORE</a>
          </div>
        </div>
        <div className="work__box-card">
          <img src={mik} alt="" />
          <div className="work__box-content">
            <h3>CIB on the Mobile</h3>
            <p>
              Take your client onboard seamlessly by our amazing tool of digital
              onboard process.
            </p>
            <a href="">LEARN MORE</a>
          </div>
        </div>
      </div>
    </section>
    <div className="frame-1"><img src={frame} alt="" /></div>
    </>
  );
};

export default WorkExp;
