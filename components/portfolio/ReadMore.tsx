import { Typography } from "@mui/material";
import React, { FC, PropsWithChildren, useRef, useState } from "react";

interface Props {
    text : string;
    divRef: React.RefObject<HTMLDivElement>
}
  
const ReadMore:FC<Props> = ({ text, divRef }) => {
  

  
  


  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    
    
    if ( isReadMore == false )
  {   
     
     window.scrollTo({
      top: (divRef.current?.offsetTop || 0) - 45,
      left: 0,
      behavior: "smooth",
    });

  // divRef.current?.scrollIntoView (  {behavior:"smooth"});

};
  setIsReadMore(!isReadMore);
}
  return (
    <div
      
    >

    <Typography variant="body2" color="text.secondary">

      
      {isReadMore ? text.slice(0, 150)  : text}
      {
        text.length> 150 && (
          <a onClick={toggleReadMore} className="read-or-hide"  >
            {isReadMore ? "...read more" : " show less"}
          </a>
        )
        
      }
  </Typography>
  </div>

  );
};

export default ReadMore;