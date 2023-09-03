import React, { useEffect, useState, useMemo, useCallback } from "react";
import arrowLeft from "../icons/arrow_left.png";
import arrowRight from "../icons/arrow_right.png";

function Carrousel({ data }) {
  const [i, setI] = useState(0);

  const slides = useMemo(
    () => [data?.pictures?.map((picture) => picture)].filter(Boolean),
    [data]
  );
  const slides_length = slides[0]?.length ?? 0;

  const handleLeftArrowClick = useCallback(() => {
    setI((prevI) =>
      prevI === 0 ? slides_length - 1 : (prevI - 1) % slides_length
    );
  }, [slides_length]);

  const handleRightArrowClick = useCallback(() => {
    setI((prevI) => (prevI + 1) % slides_length);
  }, [slides_length]);
  if (slides_length === 1) {
    return (
      <div className="carrousel">
        <img className="carrousel_img" src={slides[0]?.[i]} alt="carrousel" />
      </div>
    );
  }
  return (
    <div className="carrousel">
      <img className="carrousel_img" src={slides[0]?.[i]} alt="carrousel" />
      <img
        className="carrousel_arrow_left arrow"
        alt="left"
        src={arrowLeft}
        onClick={handleLeftArrowClick}
      />
      <img
        className="carrousel_arrow_right arrow"
        alt="right"
        src={arrowRight}
        onClick={handleRightArrowClick}
      />
      <p className="carrousel_position">
        {i + 1}/{slides_length}
      </p>
    </div>
  );
}

export default Carrousel;
