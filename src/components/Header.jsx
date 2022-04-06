export const Header = () => {
  return (
    <header id="header" className="header">
      <a href="index.html" className="header__logo-box">
        <h1 className="header__logo">BlackBox</h1>
      </a>
      <div className="header__user">
        <img className="header__user--img" src="img/user.png" width="35" alt="admin" />
        <h2 className="header__user--title">Harry Potter</h2>
        <svg className="medium-svg">
          <use xlinkHref="img/blackbox.svg#arrow-down"></use>
        </svg>
      </div>
    </header>
  );
};
