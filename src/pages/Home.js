
import "./style.css"

const Home = () => {
  return (
    <>
      <main className="section">
       
        <div className="container">
          <ul className="content-list">
            <li className="header__wrapper">
              <h1 className="header__title">
                <strong>
                  Hi, my name is <br /><em>Vladimir</em>
                </strong>
                <br />I am a beginner frontend developer
              </h1>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Angular, Vue, Redux, HTML,
                SCSS, Yarn, gitHub
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
