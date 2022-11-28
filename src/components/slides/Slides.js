import "./slides.css";
import { useState } from "react";
import { IconButton } from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import UndoIcon from "@mui/icons-material/Undo";

const slides = [
  {
    title: "October Month",
    text: "12th STD : 2 CAT exams, 1 Unit test.\n No saturday leave this month \n 10th STD: October Unit test will be held on 3rd week ",
  },
  {
    title: "November Month",
    text: "12th STD : 2 CAT exams, 1 Unit test.\n No saturday leave this month \n 10th STD: November Unit test will be held on 3rd week ",
  },
  {
    title: "December Month",
    text: "12th STD : 2 CAT exams, 1 Unit test and\n Half-yearly exam \n No saturday leave this month \n 10th STD: December Unit test will be held on 2nd week \n Half-yearly exams will be held on 3rd week \n 4th week will be holidays ",
  },
  {
    title: "January",
    text: "will be updated soon, until then focus on before exams",
  },
];

const defaultSlide = 0;

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(defaultSlide);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const updateSlide = (nextSlide) => {
    nextSlide === 0 ? setIsFirstSlide(true) : setIsFirstSlide(false);
    nextSlide === slides.length - 1
      ? setIsLastSlide(true)
      : setIsLastSlide(false);
    setCurrentSlide(nextSlide);
  };
  return (
    <div className="slides">
      <div className="heading">
        <button
          className="slide-button"
          aria-label="restart"
          color="secondary"
          disabled={currentSlide === defaultSlide}
          onClick={() => updateSlide(defaultSlide)}
        >
          <UndoIcon />
        </button>
        <button
          className="slide-button"
          aria-label="previous"
          color="secondary"
          disabled={isFirstSlide}
          onClick={() => updateSlide(currentSlide - 1)}
        >
          <SkipPreviousIcon />
        </button>
        <button
          className="slide-button"
          aria-label="next"
          color="secondary"
          disabled={isLastSlide}
          onClick={() => updateSlide(currentSlide + 1)}
        >
          <SkipNextIcon />
        </button>
      </div>
      <div className="content">
        <h1>{slides[currentSlide].title}</h1>
        <br/>
        <p style={{ whiteSpace: "pre-line", color:"#00000094" }}>{slides[currentSlide].text}</p>
      </div>
    </div>
  );
};

export default Slides;
