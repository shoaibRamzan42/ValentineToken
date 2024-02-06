import React from "react"
import Banner from "./Component/Banner"
import Navbar from "./Component/Navbar"
import Section3 from "./Component/Section3"
import Section4 from "./Component/Section4"
import Footer from "./Component/Footer"




function App() {
 

  return (
 <>
 <div   className="  max-w-[100vw] font-custom    min-h-screen overflow-hidden   ">


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
