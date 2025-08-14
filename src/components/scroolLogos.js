import * as React from "react"
import partner1 from "../images/aes.png"
import partner2 from "../images/unicri.jpg"
import partner3 from "../images/onudc.jpg"
import partner4 from "../images/oua.png"
import partner5 from "../images/05.jpeg"
const services = [
  partner1,partner2, partner3, partner4,partner5
]

const infos = [
  "La France reconnaît officiellement son rôle dans la répression violente des mouvements indépendantistes camerounais (1945–1971).",
  "Redémarrage d’un réacteur à la centrale nucléaire de Gravelines après l’arrêt causé par une invasion de méduses.",
  "Un dernier vendeur de journaux à la criée à Paris honoré par la Légion d’honneur.",
  "Point sur la situation en France : l’alerte canicule est levée, mais les fortes températures persistent."
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
      <div className="flex gap-6 overflow-hidden duration-300 [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]">
        <div className="flex flex-nowrap gap-6 animate-news mx-3">
             
            {infos.map(info => 
                  <p className="text-white "> {info} </p>
            )}
           
    
         
        </div>
       
       
       
     
     
       
      </div>
    </>
     
    );
  }
  