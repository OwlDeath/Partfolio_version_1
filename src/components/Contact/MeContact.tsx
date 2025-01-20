import frame from "@assets/image/framecon.svg";
import star from "@assets/image/star.svg";

const MeContact = () => {
  return (
    <>
      <section className="contact">
        <div className="frame-2">
          <img src={frame} alt="" />
        </div>
        <h1 className="contact-header" id="contact">
          Contact
        </h1>
        <img src={star} alt="" className="star" />
        <div className="contact-wrapper">
          <form id="contact-form" className="form-horizontal" role="form">
            <div className="form-group">
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="NAME"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  required
                />
              </div>
            </div>

            <textarea
              className="form-control"
              rows={10}
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button
              className="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              Send
            </button>
          </form>

          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <i className="fa-solid fa-location-dot">
                  <span className="contact-text place">
                    Uzbekistan, Tashkent
                  </span>
                </i>
              </li>

              <li className="list-item">
                <i className="fa-solid fa-phone">
                  <span className="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      +(998) 97-209-06-31
                    </a>
                  </span>
                </i>
              </li>

              <li className="list-item">
                <i className="fa-regular fa-envelope">
                  <span className="contact-text gmail">
                    <a
                      href="mailto:?subject=test&body=this+is+a+test"
                      title="Send me an email"
                    >
                      idoston708@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>

            <hr />
            <ul className="social-media-list">
              <a
                href="https://github.com/OwlDeath"
                target="_blank"
                className="contact-icon"
              >
                <li>
                  <i className="fa-brands fa-github"></i>
                </li>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100041772914115" target="_blank" className="contact-icon">
                <li>
                  <i className="fa-brands fa-facebook"></i>
                </li>
              </a>
              <a href="https://x.com/dosya1206" target="_blank" className="contact-icon">
                <li>
                  <i className="fa-brands fa-x-twitter"></i>
                </li>
              </a>
              <a
                href="https://www.instagram.com/feron04"
                target="_blank"
                className="contact-icon"
              >
                <li>
                  <i className="fa-brands fa-instagram"></i>
                </li>
              </a>
            </ul>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
};

export default MeContact;
