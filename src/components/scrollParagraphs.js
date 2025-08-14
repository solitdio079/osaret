import * as React from "react"
const infos = [
   "JNIM : La stratégie actuelle du JNIM au Sahel repose sur une approche de guérilla combinant attaques asymétriques contre les forces étatiques et actions de propagande pour gagner le soutien des populations locales. Cabinet - Osaret",
"JNIM : Le groupe exploite les conflits intercommunautaires et l'affaiblissement des États pour étendre son influence territoriale tout en maintenant des négociations opportunistes avec certains acteurs locaux. Cabinet - Osaret"
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