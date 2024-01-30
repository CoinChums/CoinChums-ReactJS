import CoinChums from "../../assets/images/logo.png";

export const Jumbotron = () => {
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">All New</h2>
      <img className="logo" src={CoinChums} alt="coinchums" />
      <p className="text">Smart Tracking and Savvy Settlements</p>
      <span className="description">
        Streamline your Expense Management by tracking finances, and simplified
        settlements.
      </span>
      <ul className="links">
        <li>
          <button className="button">Coming soon!</button>
        </li>
        <li className="link">Learn more</li>
      </ul>
      <img className="logo" src={CoinChums} alt="coinchums" />
      {/* TODO: CHANGE LOGO */}
    </div>
  );
};
