import React, { useEffect, useState } from "react";
import Slide from "./Slide";

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
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          personIndex={personIndex}
          currentPerson={currentPerson}
        />
      ))}
    </div>
  );
};

export default Carousel;
