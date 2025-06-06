import { motion } from "framer-motion";
import "./style.css";

const Home = () => {
  // Массив объектов с данными для кнопок
  const buttons = [
    { text: "Projects", className: "projects-btn" },
    { text: "My Skills", className: "skills-btn" },
    { text: "GitHub", className: "github-btn" },
    { text: "Contacts", className: "contact-btn" },
    { text: "Blog", className: "blog-btn" },
    { text: "CV", className: "cv-btn" },
    { text: "Lab", className: "lab-btn" },
    { text: "Art", className: "art-btn" }
  ];

  // Анимация для шахматного порядка
  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i % 2 === 0 ? i * 0.15 : (i + 1) * 0.15,
        duration: 0.6
      }
    })
  };

  return (
    <>
      <main className="section">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1 }}
        >
          <ul className="content-list">
            <li className="header__wrapper">
              <h1 className="header__title">
                <strong>
                  Hi, my name is <br />
                  <em className="name">Vladimir</em>
                </strong>
                <br />I am a beginner frontend developer
              </h1>
            </li>
          </ul>
        </motion.div>

        <motion.ul 
          className="button-list"
          initial="hidden"
          animate="visible"
        >
          {buttons.map((btn, i) => (
            <motion.li 
              key={i} 
              custom={i} 
              variants={staggerVariants}
            >
              <button className={btn.className}>
                {btn.text}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </main>
    </>
  );
};

export default Home;