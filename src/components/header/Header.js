import "./style.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Vladimir</em>
          </strong>
          <br />I am a beginner frontend developer
        </h1>
      </div>
    </header>
  );
};

export default Header;
