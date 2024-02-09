import React, { useEffect } from 'react';
import RainingHearts from './Component/RainingHearts';
import Banner from "./Component/Banner"
import Navbar from "./Component/Navbar"
import Section3 from "./Component/Section3"
import Section4 from "./Component/Section4"
import Footer from "./Component/Footer"




function App() {
  useEffect(() => {
   run();
  }, []);

  function run(){
    console.log("aaancjd");
    setTimeout(() => {
      document.getElementById('heart-rain').style.display = 'none';
    }, 100000);
  }

   function run(){
    console.log("aaancjd");
    setTimeout(() => {
      document.getElementById('heart-rain').style.display = 'none';
    },100000);
  }

  function run1(){
    
    setTimeout(() => {
      document.getElementById('heart-rain').style.display = 'none';
    }, 100000);
  }

 
  return (
 <>
     
      
   

 <div   className="  max-w-[100vw] font-custom    min-h-screen overflow-hidden   ">
 <RainingHearts />

 <div className=" max-w-[1469px]   mx-auto    ">

 <Navbar />
<Banner />
<Section3 />
<Section4 />
<Footer />

</div>
</div>

 </>
  )
}

export default App
