import * as React from "react";
import { Link } from "gatsby";
import heroBg from "./aks.png";
import partner1 from "../images/partner1.jpg";
import partner2 from "../images/partner2.jpg";
import partner3 from "../images/partner3.jpg";
import ScrollLogos from "./scroolLogos";
import ScrollParagrapths from "./scrollParagraphs";
//import ScrollCards from "./scrollCards"
const Hero = () => {
  return (
    <div className="bg-base-100">
      <main className={`h-screen bg-linear-to-r from-cyan-500 to-blue-500 `}>
        <ScrollParagrapths />
        <div className="flex h-full lg:flex-row flex-col justify-between gap-18 overflow-x-hidden pt-20 md:gap-24 md:pt-20 lg:gap-15 lg:pt-10">
          <img
            src={heroBg}
            className="m-5 hidden lg:flex w-1/8"
            alt="soldiers fighting"
          />
          <div className="flex flex-col gap-6">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 justify-self-center px-4 text-center sm:px-6 lg:px-8">
              <div className="bg-base-200 intersect:motion-preset-slide-right intersect:motion-ease-spring-bouncier border-base-content/20 flex w-fit items-center gap-2.5 rounded-none border px-3 py-2">
                <span className="text-base-content/80">Cabinet</span>
                <span className="badge badge-primary shrink-0 rounded-none">
                  OSARET
                </span>
              </div>
              <h1 className="text-white text-shadow-lg intersect:motion-preset-slide-right intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier relative z-1 text-4xl leading-[1.15] font-bold max-md:text-2xl md:max-w-3xl md:text-balance">
                <span>
                  Observatoire Sahélien d’Analyse, de Recherche et d’Étude sur
                  le Terrorisme
                </span>
                <svg
                  width="223"
                  height="12"
                  viewBox="0 0 223 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-1.5 left-10 -z-1 max-lg:left-4 max-md:hidden"
                >
                  <path
                    d="M1.30466 10.7431C39.971 5.28788 76.0949 3.02 115.082 2.30401C143.893 1.77489 175.871 0.628649 204.399 3.63102C210.113 3.92052 215.332 4.91391 221.722 6.06058"
                    stroke="url(#paint0_linear_10365_68643)"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_10365_68643"
                      x1="19.0416"
                      y1="4.03539"
                      x2="42.8362"
                      y2="66.9459"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.2" stop-color="var(--color-primary)" />
                      <stop
                        offset="1"
                        stop-color="var(--color-primary-content)"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </h1>
              <p className="text-red-500 lg:text-md font-bold max-w-3xl z-1 intersect:motion-preset-slide-right intersect:motion-delay-[600ms] intersect:motion-ease-spring-bouncier">
                C'est un cabinet de consultation indépendant, spécialisé dans
                l’analyse, l’étude et la recherche appliquée sur le terrorisme
                au Sahel. Il regroupe en son sein des experts civils,
                militaires, chercheurs et universitaires originaires des pays du
                Sahel, aux spécialités variées.
              </p>

              <Link
                to="/about"
                className="btn z-1 btn-primary btn-gradient btn-lg intersect:motion-preset-slide-right intersect:motion-delay-[800ms] intersect:motion-ease-spring-bouncier"
              >
                A Propos
                <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 flex-nowrap overflowy-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]">
              <h1 className="text-white text-lg font-bold">Nos Partenaires</h1>
              <ScrollLogos />
            </div>
          </div>
          <img
            src={heroBg}
            className="m-5  hidden lg:flex w-1/8"
            alt="soldiers fighting"
          />
        </div>
      </main>
    </div>
  );
};

export default Hero;
