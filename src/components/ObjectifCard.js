
import * as React from "react"
 
export default function ObjectifCard({
  text, icon="icon-[tabler--circle-check] size-10 rtl:rotate-180"
}) {
 
 
  return <div className="card card-border border-primary  shadow-none rounded-none intersect:motion-preset-slide-right intersect:motion-delay-[200ms] intersect:motion-ease-spring-bouncier">
  <div className="card-body">
  <span className={icon}></span>
    <h5 className="card-title text-xl flex gap-4">
     
     {text}
    
    </h5>
   
     
  </div>
</div>;
}