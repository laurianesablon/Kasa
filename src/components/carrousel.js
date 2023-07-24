import React, { useEffect, useState, useMemo, useCallback } from 'react';
import arrowLeft from '../icons/arrow_left.png';
import arrowRight from '../icons/arrow_right.png';

function Carrousel({data}) {
    // État pour suivre l'indice actuel
    const [i, setI] = useState(0);
  
    // Tableau de diapositives mémorisé en fonction de la prop data
    const slides = useMemo(() => [data?.data[0]?.pictures?.map((picture) => picture)], [data]);
  
    const handleLeftArrowClick = useCallback(() => {
      setI((prevI) => (prevI === 0 ? slides[0].length - 1 : (prevI - 1) % slides[0].length));
      console.log(i);
    }, [slides]);
  
    const handleRightArrowClick = useCallback(() => {
      setI((prevI) => (prevI + 1) % slides[0].length);
    }, [slides]);
  
    useEffect(() => {
      const arrow_left = document.querySelector(".carrousel_arrow_left");
      arrow_left.addEventListener("click", handleLeftArrowClick);
      const arrow_right = document.querySelector(".carrousel_arrow_right");
      arrow_right.addEventListener("click", handleRightArrowClick);
  
      return () => {
        arrow_left.removeEventListener("click", handleLeftArrowClick);
        arrow_right.removeEventListener("click", handleRightArrowClick);
      };
    }, [handleLeftArrowClick, handleRightArrowClick]);
  
    return (
      <div className="carrousel">
        <img className="carrousel_img" src={slides[0][i]} />
        <img className="carrousel_arrow_left arrow" alt="left" src={arrowLeft} />
        <img className="carrousel_arrow_right arrow" alt="right" src={arrowRight} />
        <p className='carrousel_position'>{i}/4</p>
      </div>
    );
  }

  export default Carrousel

  /*function Carrousel() {
  let i = 0;
  let slides = [data.data[0].pictures.map((picture) => picture)];

  
  const handleLeftArrowClick = () => {
    i = (i === 0) ? slides[0].length - 1 : (i - 1) % slides[0].length;

    console.log(i)
  };
  const handleRightArrowClick = () => {
    i = (i + 1) % slides[0].length;
    console.log(i)
  }
  
  useEffect(() => {
    const arrow_left = document.querySelector(".carrousel_arrow_left");
    arrow_left.addEventListener("click", handleLeftArrowClick);
    const arrow_right = document.querySelector(".carrousel_arrow_right");
    arrow_right.addEventListener("click", handleRightArrowClick);
    
    return () => {
      arrow_left.removeEventListener("click", handleLeftArrowClick);
      arrow_right.removeEventListener("click", handleRightArrowClick);
      

    };
  });
  
  return (
    <div className="carrousel">
      <img className="carrousel_img" src={slides[0][i]}/>
      <img className="carrousel_arrow_left arrow" alt="left" src={arrowLeft}/>
      <img className="carrousel_arrow_right arrow" alt="right" src={arrowRight}/>
    </div>
  );
  
}*/