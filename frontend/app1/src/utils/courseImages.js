import javaImg from "../assets/Java.jpeg";
import pythonImg from "../assets/Python.jpg";
import nodeImg from "../assets/Node.png";
import mernImg from "../assets/Mern.jpg";
import reactImg from "../assets/React.jpg";
import iiotImg from "../assets/IIOT.png";
import defaultImg from "../assets/default-course.png";

// New courses
import dsImg from "../assets/DataScience.png";
import csImg from "../assets/CyberSecurity.png";
import uiuxImg from "../assets/UIUX.png";

const courseImages = {
  Java: javaImg,
  "Java advance": javaImg,
  "Python Advanced": pythonImg,
  "Node JS": nodeImg,
  "Full Stack MERN": mernImg,
  Mern: mernImg,
  React: reactImg,
  IIOT: iiotImg,
  "Data Science": dsImg,
  "Cyber Security": csImg,
  "UI/UX Design": uiuxImg,
};

export const getCourseImage = (title) => {
  return courseImages[title] || defaultImg;
};

export default courseImages;
