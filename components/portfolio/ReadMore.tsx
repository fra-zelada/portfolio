import React, { FC, PropsWithChildren, useRef, useState } from "react";

interface Props {
    text : string;
}
  
const ReadMore:FC<Props> = ({ text }) => {
  

  

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    document.getElementById('porfolio')?.focus();
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      {isReadMore ? text.slice(0, 150)  : text}
      {
        text.length> 150 && (
          <a onClick={toggleReadMore} className="read-or-hide"  id="foquito" href="#portfolio">
            {isReadMore ? "...read more" : " show less"}
          </a>
        )
        
      }
    </>
  );
};

export default ReadMore;