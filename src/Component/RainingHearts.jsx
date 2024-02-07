import React from 'react';


const RainingHearts = () => {
  return (
    <div id='heart-rain' className="heart-rain">
      {[...Array(30)].map((_, index) => (
        <div key={index} className="heart">
        <p  >❤️</p>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff4d6d" width="24" height="24">
           
          </svg> */}
        </div>
      ))}
    </div>
  );
};

export default RainingHearts;