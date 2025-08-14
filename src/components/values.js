import * as React from "react";

const Values = () => {
  return (
    <>
      <div className="relative mx-auto  w-fit mb-6 mt-12">
        <h2 className="text-base-content text-2xl font-bold md:text-3xl lg:text-4xl">
          Valeurs
        </h2>
        <span className="from-primary/40 to-primary/5 absolute start-0 top-9 h-1 w-full rounded-full bg-gradient-to-r"></span>
      </div>
      <div className="grid gap-6 md:grid-cols-3  p-5">
        <div className="card card-border border-success bg-success/20 rounded-none shadow-none intersect:motion-preset-slide-right intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier">
          <div className="card-body">
            <h5 className="card-title text-xl flex gap-4">
              Intégrité scientifique
            </h5>
            <ul role="list" className="space-y-5 my-3 ">
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
                <span class="text-base font-normal leading-tight  ms-3">
                  Rigueur
                </span>
              </li>
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
                <span class="text-base font-normal leading-tight   ms-3">
                  éthique
                </span>
              </li>
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
                <span class="text-base font-normal leading-tight   ms-3">
                transparence
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="card card-border border-info bg-info/20 rounded-none  shadow-none intersect:motion-preset-slide-right intersect:motion-delay-[600ms] intersect:motion-ease-spring-bouncier">
          <div className="card-body">
            <h5 className="card-title text-xl flex gap-4">
            Ancrage communautaire 
            </h5>
            <ul role="list" className="space-y-5 my-3">
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
                <span class="text-base font-normal leading-tight   ms-3">
                Approche participative
                </span>
              </li>
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
                <span class="text-base font-normal leading-tight   ms-3">
                Approche locale et inclusive

                </span>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="card card-border border-warning bg-warning/20  rounded-none shadow-none intersect:motion-preset-slide-right intersect:motion-delay-[800ms] intersect:motion-ease-spring-bouncier">
          <div className="card-body">
            <h5 className="card-title text-xl flex gap-4 items-center">
              {" "}
              Partenariat et collaboration
            </h5>
            <ul role="list" className="space-y-5 my-3">
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
                <span class="text-base font-normal leading-tight   ms-3">
                Synergies institutionnelles et internationales

                </span>
              </li>
             
            </ul>
           
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Values;
