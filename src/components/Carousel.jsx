import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { list, longList } from "../data";

const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  useEffect(() => {
    let intervalID = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(intervalID);
  }, [currentPerson]);

  const nextSlide = () => {
    setCurrentPerson((person) => {
      const result = (person + 1) % people.length;
      return result;
    });
  };

  const prevSlide = () => {
    setCurrentPerson((person) => {
      const result = (person - 1 + people.length) % people.length;
      return result;
    });
  };

  return (
    <div className="slider-container">
      {people.map((person, personIndex) => (
        <Slide
          key={person.id}
          {...person}
          personIndex={personIndex}
          currentPerson={currentPerson}
        />
      ))}
      <div className="btn-container">
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
