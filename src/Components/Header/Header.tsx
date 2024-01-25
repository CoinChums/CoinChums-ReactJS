import logo from "../../assets/images/logo.png";

export const Header = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={logo} height={44} width={55} alt="CoinChums" />
          </li>
          <li className="link-styled">Home</li>
          <li className="link-styled">CoinChums</li>
          <li className="link-styled">About Us</li>
          <li className="link-styled">Let's Talk</li>
        </ul>
      </div>
    </nav>
  );
};
