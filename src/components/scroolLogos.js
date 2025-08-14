import * as React from "react"
import partner1 from "../images/aes.png"
import partner2 from "../images/unicri.jpg"
import partner3 from "../images/onudc.jpg"
import partner4 from "../images/oua.png"
import partner5 from "../images/05.jpeg"
const services = [
  partner1,partner2, partner3, partner4,partner5
]


export default function ScrollLogos() {
    return (<>
     <div className="flex gap-6 overflow-hidden duration-300 [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]">
        <div className="flex flex-nowrap gap-6 animate-logo mx-3">
             
            {services.map(service => 
                  <img className="h-16" src={service} alt="partner logo"/>
            )}
            {services.map(service => 
                  <img className="h-16" src={service} alt="partner logo"/>
            )}
           
          
         
        </div>
        <div className="hidden lg:flex flex-nowrap gap-6 animate-logo mx-3">
        {services.map(service => 
                  <img className="h-16" src={service} alt="partner logo"/>
            )}
        {services.map(service => 
                  <img className="h-16" src={service} alt="partner logo"/>
            )}
        </div>
       
       
     
     
       
      </div>
     
    </>
     
    );
  }
  