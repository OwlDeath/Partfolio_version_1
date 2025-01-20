import logo from "@assets/image/logo.svg";

const Navbar = () => {
  const changeTheme = () => {
    let html = document.querySelector("html");
    html?.classList.toggle("white-theme");
  };
  return (
    <header className="heafer">
      <nav className="nav">
        <div className="container header__nav">
          <div className="header__nav-logo">
            <img src={logo} alt="" />
            <p>Dosya</p>
          </div>
          <ul className="nav__list">
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li className="nav__list-but">
              <a href="https://github.com/OwlDeath" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <i
                className="fa-regular fa-moon"
                onClick={() => changeTheme()}
              ></i>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
