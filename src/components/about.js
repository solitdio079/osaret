import * as React from "react";
import firstImg from "../images/03.jpeg"
import secondImg from "../images/05.jpeg"
import team1 from "../images/team1.jpeg"
const About = () => {
  return (
    <>
    <div className="bg-base-200 py-8 sm:py-16 px-5 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
        <div className="flex flex-col gap-12">
          <div className="space-y-4 text-center">
            <span className="badge badge-soft badge-primary rounded-xl">
              A Propos
            </span>
            <p className="text-base-content/80 text-xl  intersect:motion-preset-slide-left  intersect:motion-delay-[300ms]">
            Depuis 2021, plusieurs experts originaires du Sahel
                  collaborent de manière informelle dans le domaine de la
                  prévention de la radicalisation, de l’extrémisme violent et du
                  terrorisme, à travers des rencontres nationales et régionales.
                  Ces échanges ont progressivement donné naissance à un pôle
                  d’expertise et de compétences reconnu dans ce domaine. C’est
                  afin de consolider ces acquis que le Cabinet OSARET a été créé
                  par M. Fayké Papus SISSOKO, sociologue et expert en  en stratégie de prévention
                  de la radicalisation et de l’extrémisme violent menant au
                  terrorisme. Le cabinet est enregistré sous le numéro 42509191889097D,RCCM :MA.BKO.2525.5824
                  en République du Mali.
            </p>
          </div>

         

          <div className="mt-3">
           
            <div
             
              aria-labelledby="tabs-center-item-2"
              className="grid md:grid-cols-2 gap-12 items-center justify-center mb-12"
            >
              <div>
                <img  className="mask mask-parallelogram intersect:motion-preset-slide-left intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier" src={secondImg} />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-xl lg:text-2xl intersect:motion-preset-slide-right intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier">
                 Notre Mission
                </h2>
                <p className="text-base-content/80 intersect:motion-preset-slide-right intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier">
                Fournir une expertise indépendante, rigoureuse et contextualisée pour renforcer les capacités des acteurs dans la prévention du terrorisme, la consolidation de la paix et la cohésion sociale.

                </p>
               
              </div>
            </div>
            <div
            
              className=" grid md:grid-cols-2 gap-12 items-center justify-center"
            >
            
              <div className="flex flex-col gap-6">
                <h2 className="text-xl lg:text-2xl intersect:motion-preset-slide-left intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier">
                  Notre Vision
                </h2>
                <p className="text-base-content/80 intersect:motion-preset-slide-left intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier">
                Un Sahel résilient, pacifique et sécurisé, où les communautés sont immunisées contre les facteurs de radicalisation grâce à la recherche, à la prévention et à la coopération.

                </p>
               
              </div>
              <div>
                <img  className="mask mask-parallelogram intersect:motion-preset-slide-right intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier" src={firstImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-base-100 py-8 sm:py-16 lg:py-24 intersect:motion-preset-slide-left  intersect:motion-delay-[300ms]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
          <div className="mb-12 text-center sm:mb-16 lg:mb-24">
            <h2 className="text-base-content mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl">
             Notre équipe
            </h2>
            <p className="text-base-content/80 text-xl">
            Rencontrez les experts passionnés derrière notre succès et découvrez-en davantage sur leurs rôles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10 xl:grid-cols-4">
          
            <div className="card card-border hover:border-primary h-max shadow-none">
              <figure className="bg-base-200 pt-6">
                <img
                  src={secondImg}
                  alt="Phillip Bothman"
                  className="h-60 w-auto"
                />
              </figure>
              <div className="card-body gap-3">
                <h3 className="text-base-content text-lg font-medium">Phillip Bothman</h3>
                <div className="divider"></div>
                <div>
                  <p className="text-base-content mb-1 font-medium">Founder & CEO</p>
                  <p className="text-base-content/80">A visionary leader driving innovation and collaboration.</p>
                </div>
                <div className="card-actions h-5 gap-3">
                  <a href="#" className="text-accent"><span className="icon-[tabler--brand-facebook] size-5.5"></span></a>
                  <a href="#" className="text-primary"><span className="icon-[tabler--brand-twitter] size-5.5"></span></a>
                  <a href="#" className="text-base-content"><span className="icon-[tabler--brand-github] size-5.5"></span></a>
                  <a href="#" className="text-pink-500"><span className="icon-[tabler--brand-instagram] size-5.5"></span></a>
                </div>
              </div>
            </div>
           
            <div className="card card-border hover:border-primary h-max shadow-none">
              <figure className="bg-base-200 pt-6">
                <img
                  src={team1}
                  alt="James Kenter"
                  className="h-60 w-auto"
                />
              </figure>
              <div className="card-body gap-3">
                <h3 className="text-base-content text-lg font-medium">James Kenter</h3>
                <div className="divider"></div>
                <div>
                  <p className="text-base-content mb-1 font-medium">Engineering Manager</p>
                  <p className="text-base-content/80">A visionary leader driving innovation and collaboration.</p>
                </div>
                <div className="card-actions h-5 gap-3">
                  <a href="#" className="text-accent"><span className="icon-[tabler--brand-facebook] size-5.5"></span></a>
                  <a href="#" className="text-primary"><span className="icon-[tabler--brand-twitter] size-5.5"></span></a>
                  <a href="#" className="text-base-content"><span className="icon-[tabler--brand-github] size-5.5"></span></a>
                  <a href="#" className="text-pink-500"><span className="icon-[tabler--brand-instagram] size-5.5"></span></a>
                </div>
              </div>
            </div>
           
            <div className="card card-border hover:border-primary h-max shadow-none">
              <figure className="bg-base-200 pt-6">
                <img
                  src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/team/team-8.png"
                  alt="Cristofer Kenter"
                  className="h-60 w-auto"
                />
              </figure>
              <div className="card-body gap-3">
                <h3 className="text-base-content text-lg font-medium">Cristofer Kenter</h3>
                <div className="divider"></div>
                <div>
                  <p className="text-base-content mb-1 font-medium">Product Designer</p>
                  <p className="text-base-content/80">A visionary leader driving innovation and collaboration.</p>
                </div>
                <div className="card-actions h-5 gap-3">
                  <a href="#" className="text-accent"><span className="icon-[tabler--brand-facebook] size-5.5"></span></a>
                  <a href="#" className="text-primary"><span className="icon-[tabler--brand-twitter] size-5.5"></span></a>
                  <a href="#" className="text-base-content"><span className="icon-[tabler--brand-github] size-5.5"></span></a>
                  <a href="#" className="text-pink-500"><span className="icon-[tabler--brand-instagram] size-5.5"></span></a>
                </div>
              </div>
            </div>
           
            <div className="card card-border hover:border-primary h-max shadow-none">
              <figure className="bg-base-200 pt-6">
                <img
                  src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/team/team-5.png"
                  alt="Alena Lubin"
                  className="h-60 w-auto"
                />
              </figure>
              <div className="card-body gap-3">
                <h3 className="text-base-content text-lg font-medium">Alena Lubin</h3>
                <div className="divider"></div>
                <div>
                  <p className="text-base-content mb-1 font-medium">Frontend Developer</p>
                  <p className="text-base-content/80">A visionary leader driving innovation and collaboration.</p>
                </div>
                <div className="card-actions h-5 gap-3">
                  <a href="#" className="text-accent"><span className="icon-[tabler--brand-facebook] size-5.5"></span></a>
                  <a href="#" className="text-primary"><span className="icon-[tabler--brand-twitter] size-5.5"></span></a>
                  <a href="#" className="text-base-content"><span className="icon-[tabler--brand-github] size-5.5"></span></a>
                  <a href="#" className="text-pink-500"><span className="icon-[tabler--brand-instagram] size-5.5"></span></a>
                </div>
              </div>
            </div>
           
            <div className="card card-border hover:border-primary h-max shadow-none">
              <figure className="bg-base-200 pt-6">
                <img
                  src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/team/team-9.png"
                  alt="Jayden Lipshultz"
                  className="h-60 w-auto"
                />
              </figure>
              <div className="card-body gap-3">
                <h3 className="text-base-content text-lg font-medium">Jayden Lipshultz</h3>
                <div className="divider"></div>
                <div>
                  <p className="text-base-content mb-1 font-medium">Sales Lead</p>
                  <p className="text-base-content/80">A visionary leader driving innovation and collaboration.</p>
                </div>
                <div className="card-actions h-5 gap-3">
                  <a href="#" className="text-accent"><span className="icon-[tabler--brand-facebook] size-5.5"></span></a>
                  <a href="#" className="text-primary"><span className="icon-[tabler--brand-twitter] size-5.5"></span></a>
                  <a href="#" className="text-base-content"><span className="icon-[tabler--brand-github] size-5.5"></span></a>
                  <a href="#" className="text-pink-500"><span className="icon-[tabler--brand-instagram] size-5.5"></span></a>
                </div>
              </div>
            </div>
          
            <div className="card card-border hover:border-primary h-max shadow-none">
              <figure className="bg-base-200 pt-6">
                <img
                  src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/team/team-3.png"
                  alt="Maria Donin"
                  className="h-60 w-auto"
                />
              </figure>
              <div className="card-body gap-3">
                <h3 className="text-base-content text-lg font-medium">Maria Donin</h3>
                <div className="divider"></div>
                <div>
                  <p className="text-base-content mb-1 font-medium">Product Manager</p>
                  <p className="text-base-content/80">A visionary leader driving innovation and collaboration.</p>
                </div>
                <div className="card-actions h-5 gap-3">
                  <a href="#" className="text-accent"><span className="icon-[tabler--brand-facebook] size-5.5"></span></a>
                  <a href="#" className="text-primary"><span className="icon-[tabler--brand-twitter] size-5.5"></span></a>
                  <a href="#" className="text-base-content"><span className="icon-[tabler--brand-github] size-5.5"></span></a>
                  <a href="#" className="text-pink-500"><span className="icon-[tabler--brand-instagram] size-5.5"></span></a>
                </div>
              </div>
            </div>
           
            <div className="card card-border hover:border-primary h-max shadow-none">
              <figure className="bg-base-200 pt-6">
                <img
                  src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/team/team-2.png"
                  alt="Carter Saris"
                  className="h-60 w-auto"
                />
              </figure>
              <div className="card-body gap-3">
                <h3 className="text-base-content text-lg font-medium">Carter Saris</h3>
                <div className="divider"></div>
                <div>
                  <p className="text-base-content mb-1 font-medium">UX Researcher</p>
                  <p className="text-base-content/80">A visionary leader driving innovation and collaboration.</p>
                </div>
                <div className="card-actions h-5 gap-3">
                  <a href="#" className="text-accent"><span className="icon-[tabler--brand-facebook] size-5.5"></span></a>
                  <a href="#" className="text-primary"><span className="icon-[tabler--brand-twitter] size-5.5"></span></a>
                  <a href="#" className="text-base-content"><span className="icon-[tabler--brand-github] size-5.5"></span></a>
                  <a href="#" className="text-pink-500"><span className="icon-[tabler--brand-instagram] size-5.5"></span></a>
                </div>
              </div>
            </div>
          
            <div className="card card-border hover:border-primary h-max shadow-none">
              <figure className="bg-base-200 pt-6">
                <img
                  src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/team/team-4.png"
                  alt="Ahmad Donin"
                  className="h-60 w-auto"
                />
              </figure>
              <div className="card-body gap-3">
                <h3 className="text-base-content text-lg font-medium">Ahmad Donin</h3>
                <div className="divider"></div>
                <div>
                  <p className="text-base-content mb-1 font-medium">Customer Success</p>
                  <p className="text-base-content/80">A visionary leader driving innovation and collaboration.</p>
                </div>
                <div className="card-actions h-5 gap-3">
                  <a href="#" className="text-accent"><span className="icon-[tabler--brand-facebook] size-5.5"></span></a>
                  <a href="#" className="text-primary"><span className="icon-[tabler--brand-twitter] size-5.5"></span></a>
                  <a href="#" className="text-base-content"><span className="icon-[tabler--brand-github] size-5.5"></span></a>
                  <a href="#" className="text-pink-500"><span className="icon-[tabler--brand-instagram] size-5.5"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</>
  );
};

export default About;
