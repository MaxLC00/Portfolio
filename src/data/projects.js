import gtnbrgImage from '../imgs/GTNBRG.png';
import playwiseImage from '../imgs/playwise.png';
import siuImage from '../imgs/SIU.png';

export const projectList = [
  {
    title: "BookClub Hosting Application",
    description: "An application that allows users to host book clubs and share their favorite books with others.",
    image: gtnbrgImage,
    technologies: ["Handlebars", "Node.js", "Express", "Sequelize", "PostgreSQL"],
    github: "https://github.com/Team-we-dont-know-yet/Bookclub",
    deployed: "https://gtnbrg.onrender.com/"
  },
  {
    title: "Simple Online Web Game Application",
    description: "An application that allows users to play a simple online web game like tic-tac-toe and connect 4.",
    image: playwiseImage,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/p3t2-awesometeamname/project3",
    deployed: "https://project3-027o.onrender.com/"
  },
  {
    title: "Recipe Search Application",
    description: "A recipe search application that allows users to search for recipes by name, ingredient, or cuisine.",
    image: siuImage,
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/overwhelmedbyindecision/Spice-It-Up",
    deployed: "https://overwhelmedbyindecision.github.io/Spice-It-Up/index.html"
  }
]; 