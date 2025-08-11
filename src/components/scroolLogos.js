import * as React from "react"
import partner1 from "../images/partner1.jpg"
import partner2 from "../images/partner2.jpg"
import partner3 from "../images/partner3.jpg"
const services = [
  partner1,partner2, partner3
]


export default function ScrollLogos() {
    return (
      <div className="flex gap-6 flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]">
        <div className="flex flex-nowrap gap-6 animate-logo">
             
            {services.map(service => 
                  <img className="h-16" src={service} alt="partner logo"/>
            )}
           
          
         
        </div>
        <div className="flex flex-nowrap gap-6 animate-logo">
        {services.map(service => 
                  <img className="h-16" src={service} alt="partner logo"/>
            )}
        </div>
        <div className="flex flex-nowrap gap-6 animate-logo">
        {services.map(service => 
                  <img className="h-16" src={service} alt="partner logo"/>
            )}
        </div>
     
       ß
      </div>
    );
  }
  