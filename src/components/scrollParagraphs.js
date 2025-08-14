import * as React from "react"
const infos = [
    "La France reconnaît officiellement son rôle dans la répression violente des mouvements indépendantistes camerounais (1945–1971).",
    "Redémarrage d’un réacteur à la centrale nucléaire de Gravelines après l’arrêt causé par une invasion de méduses.",
    "Un dernier vendeur de journaux à la criée à Paris honoré par la Légion d’honneur.",
    "Point sur la situation en France : l’alerte canicule est levée, mais les fortes températures persistent."
  ]
  
const ScrollParagrapths = () => {
   return ( <div className="flex gap-6 overflow-hidden duration-300 [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]">
    <div className="flex flex-nowrap gap-6 animate-news mx-3">
         
        {infos.map(info => 
              <p className="text-white whitespace-nowrap"> {info} </p>
        )}
       

     
    </div>
   
   
   
 
 
   
  </div>)
}
export default ScrollParagrapths