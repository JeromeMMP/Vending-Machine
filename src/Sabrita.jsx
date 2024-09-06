import React from "react";


const Sabrita = ({img, x, y, rotation}) => {
    return(

            <img src={img} alt="img" 
            style={{
                width: '300px',
                position: 'absolute',
                top: `${y}vh`,
                left: `${x}vw`,
                rotate:`${rotation}deg`
                }}
            />
      
    )
}

export default Sabrita