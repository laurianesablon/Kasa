import React, { useEffect, useState, useMemo, useCallback } from 'react';
import arrowLeft from '../icons/arrow_left.png';
import arrowRight from '../icons/arrow_right.png';

function Carrousel({data}) {
  const [i, setI] = useState(0); // State to track the current index

  const slides = useMemo(() => [data?.pictures?.map((picture) => picture)], [data]); // Array of slides based on the data prop
  const slides_length = slides[0].length; // Length of the slides array

  const handleLeftArrowClick = useCallback(() => {
    setI((prevI) => (prevI === 0 ? slides[0].length - 1 : (prevI - 1) % slides[0].length)); // Handle left arrow click
  }, [slides]);

  const handleRightArrowClick = useCallback(() => {
    setI((prevI) => (prevI + 1) % slides[0].length); // Handle right arrow click
  }, [slides]);

  useEffect(() => {
    const arrow_left = document.querySelector(".carrousel_arrow_left"); // Get the left arrow element
    const arrow_right = document.querySelector(".carrousel_arrow_right"); // Get the right arrow element

    const handleArrowClick = (event) => {
      if (event.target === arrow_left) {
        handleLeftArrowClick(); // Call the handleLeftArrowClick function on left arrow click
      } else if (event.target === arrow_right) {
        handleRightArrowClick(); // Call the handleRightArrowClick function on right arrow click
      }
    };
    arrow_left.addEventListener("click", handleArrowClick); // Add event listener for left arrow click
    arrow_right.addEventListener("click", handleArrowClick); // Add event listener for right arrow click
   
  }, [handleLeftArrowClick, handleRightArrowClick]);

  return (
    <div className="carrousel">
      <img className="carrousel_img" src={slides[0][i]} alt="carrousel" /> {/* Display the current slide */}
      <img className="carrousel_arrow_left arrow" alt="left" src={arrowLeft} /> {/* Display the left arrow */}
      <img className="carrousel_arrow_right arrow" alt="right" src={arrowRight} /> {/* Display the right arrow */}
      <p className='carrousel_position'>{i+1}/{slides_length}</p> {/* Display the current position */}
    </div>
  );
}

  export default Carrousel