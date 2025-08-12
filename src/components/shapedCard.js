import * as React from "react";

const ShapedCard = ({title, items,bgColor="bg-primary/20", borderColor="border-primary"}) => {
  return (
    <div className={`w-full flex flex-col items-center rounded-full min-w-60 p-20 intersect:motion-preset-slide-right intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier  border  shadow-sm ${bgColor} ${borderColor}`}>
      <h5 className="mb-4 text-xl font-medium  text-white">
        {title}
      </h5>
     
      <ul role="list" className="space-y-5 my-7 mx-auto">
       

      {items.map(item => 
         <li class="flex items-center">
         <svg
           className="shrink-0 w-4 h-4 text-blue-500"
           aria-hidden="true"
           xmlns="http://www.w3.org/2000/svg"
           fill="currentColor"
           viewBox="0 0 20 20"
         >
           <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
         </svg>
         <span class="text-base font-normal leading-tight  text-white ms-3">
           {item}
         </span>
       </li>
     )}
       
       
      </ul>
     
    </div>
  );
};

export default ShapedCard;
