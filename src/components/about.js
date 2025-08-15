import * as React from "react";
import firstImg from "../images/vision.png";
import secondImg from "../images/05.jpeg";
import dgImg from "../images/dg.jpeg";
import topImg from "../images/02.jpeg";
import team1 from "../images/team1.jpeg";
import team2 from "../images/team2.jpeg";
import team3 from "../images/team3.jpg";
import team5 from "../images/team5.jpeg";
import team6 from "../images/team6.jpeg";
import team7 from "../images/team7.jpeg";
import team8 from "../images/team8.jpeg";
import cravateImg from "../images/cravate2.jpeg";
import Values from "./values";
const About = () => {
  return (
    <>
      <div className="bg-base-200 px-5">
        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
          <div className="flex flex-col gap-6">
            <div className="space-y-4 text-center">
              <span className="badge badge-soft badge-primary rounded-xl">
                A Propos
              </span>
              <div className="grid  px-10 lg:grid-cols-2 motion-translate-y-in-100 motion-blur-in-md">
                <div className="">
                  <div className="space-y-4 mb-12">
                    <h2 className="text-base-content text-2xl intersect:motion-preset-slide-left intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier font-semibold md:text-3xl lg:text-4xl">
                      Historique
                    </h2>
                    <p className="text-base-content/80 text-xl intersect:motion-preset-slide-left intersect:motion-delay-[500ms] intersect:motion-ease-spring-bouncier">
                      Depuis 2021, plusieurs experts originaires du Sahel
                      collaborent de manière informelle dans le domaine de la
                      prévention de la radicalisation, de l’extrémisme violent
                      et du terrorisme, à travers des rencontres nationales et
                      régionales. Ces échanges ont progressivement donné
                      naissance à un pôle d’expertise et de compétences reconnu
                      dans ce domaine. C’est afin de consolider ces acquis que
                      le Cabinet OSARET a été créé par M. Fayké Papus SISSOKO,
                      sociologue et expert en en stratégie de prévention de la
                      radicalisation et de l’extrémisme violent menant au
                      terrorisme. Le cabinet est enregistré sous le numéro
                      42509191889097D,RCCM :MA.BKO.2525.5824 en République du
                      Mali.
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    className="mask mask-parallelogram intersect:motion-preset-slide-right intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier"
                    src={topImg}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="grid md:grid-cols-2 gap-6 items-center justify-center">
                <div>
                  <img
                    className="mask mask-parallelogram intersect:motion-preset-slide-left intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier"
                    src={secondImg}
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <h2 className="text-xl lg:text-2xl intersect:motion-preset-slide-right intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier">
                    Notre Mission
                  </h2>
                  <p className="text-base-content/80 intersect:motion-preset-slide-right intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier">
                    Fournir une expertise indépendante, rigoureuse et
                    contextualisée pour renforcer les capacités des acteurs dans
                    la prévention du terrorisme, la consolidation de la paix et
                    la cohésion sociale.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 items-center justify-center">
                <div className="flex flex-col gap-6">
                  <h2 className="text-xl lg:text-2xl intersect:motion-preset-slide-left intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier">
                    Notre Vision
                  </h2>
                  <p className="text-base-content/80 intersect:motion-preset-slide-left intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier">
                    Un Sahel résilient, pacifique et sécurisé, où les
                    communautés sont immunisées contre les facteurs de
                    radicalisation grâce à la recherche, à la prévention et à la
                    coopération.
                  </p>
                </div>
                <div>
                  <img
                    className="mask mask-parallelogram-3 mask-half-1 intersect:motion-preset-slide-right intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier"
                    src={cravateImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Values />
      <div className="bg-base-100 py-8 sm:py-16 lg:py-12 intersect:motion-preset-slide-left  intersect:motion-delay-[300ms]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
          <div className="mb-12 text-center sm:mb-16 lg:mb-24">
            <h2 className="text-base-content mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl">
              Notre équipe
            </h2>
            <p className="text-base-content/80 text-xl">
              Rencontrez les experts du Sahel passionnés derrière notre succès
              et découvrez-en davantage sur leurs rôles.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10 xl:grid-cols-4">
            <div className="card card-border hover:border-primary h-max shadow-none">
              <figure className="bg-base-200 pt-6">
                <img
                  src={dgImg}
                  alt="Fayké Papus SISSOKO"
                  className="h-60 w-auto"
                />
              </figure>
              <div className="card-body gap-2">
                <h3 className="text-base-content text-center text-lg font-medium">
                  Fayké Papus SISSOKO
                </h3>
                <div className="divider"></div>
                <div>
                  <div className="flex gap-2">
                    <p className="text-base-content mb-1 font-medium">
                      Directeur Général
                    </p>
                    <span className="icon-[twemoji--flag-mali] size-8"></span>
                  </div>

                  <p className="text-base-content/80">+223 76 59 80 59</p>
                  <p className="text-base-content/80">blancsissoko20@gmail.com</p>
                </div>
                <div className="card-actions h-5 gap-2">
                  <a href="#" className="text-accent">
                    <span className="icon-[tabler--brand-facebook] size-5.5"></span>
                  </a>
                  <a href="#" className="text-primary">
                    <span className="icon-[tabler--brand-twitter] size-5.5"></span>
                  </a>
                  <a href="#" className="text-base-content">
                    <span className="icon-[tabler--brand-github] size-5.5"></span>
                  </a>
                  <a href="#" className="text-pink-500">
                    <span className="icon-[tabler--brand-instagram] size-5.5"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="card card-border hover:border-primary h-max shadow-none">
              <figure className="bg-base-200 pt-6">
                <img src={team1} alt="James Kenter" className="h-60 w-auto" />
              </figure>
              <div className="card-body gap-2">
                <h3 className="text-base-content text-center text-lg font-medium">
                  Moussa Mohamed
                </h3>
                <div className="divider"></div>
                <div>
                  <div className="flex gap-2">
                    <p className="text-base-content mb-1 font-medium">
                      Anthropologue - Expert
                    </p>
                    <span className="icon-[twemoji--flag-niger] size-8"></span>
                  </div>
                  <p className="text-base-content/80">+227 89 65 60 71</p>
                  <p className="text-base-content/80">moussa_sg@yahoo.fr</p>
                </div>
                <div className="card-actions h-5 gap-2">
                  <a href="#" className="text-accent">
                    <span className="icon-[tabler--brand-facebook] size-5.5"></span>
                  </a>
                  <a href="#" className="text-primary">
                    <span className="icon-[tabler--brand-twitter] size-5.5"></span>
                  </a>
                  <a href="#" className="text-base-content">
                    <span className="icon-[tabler--brand-github] size-5.5"></span>
                  </a>
                  <a href="#" className="text-pink-500">
                    <span className="icon-[tabler--brand-instagram] size-5.5"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="card card-border hover:border-primary h-max shadow-none">
              <figure className="bg-base-200 pt-6">
                <img
                  src={team2}
                  alt="Cristofer Kenter"
                  className="h-60 w-auto"
                />
              </figure>
              <div className="card-body gap-2">
                <h3 className="text-base-content text-center text-lg font-medium">
                  Tamboura Ali
                </h3>
                <div className="divider"></div>
                <div>
                  <div className="flex gap-2">
                    <p className="text-base-content mb-1 font-medium">
                      Sociologue - Expert
                    </p>
                    <span className="icon-[twemoji--flag-burkina-faso] size-8"></span>
                  </div>
                  <p className="text-base-content/80"> +226 76 14 32 42</p>
                  <p className="text-base-content/80"> alimogho@gmail.com</p>
                </div>
                <div className="card-actions h-5 gap-2">
                  <a href="#" className="text-accent">
                    <span className="icon-[tabler--brand-facebook] size-5.5"></span>
                  </a>
                  <a href="#" className="text-primary">
                    <span className="icon-[tabler--brand-twitter] size-5.5"></span>
                  </a>
                  <a href="#" className="text-base-content">
                    <span className="icon-[tabler--brand-github] size-5.5"></span>
                  </a>
                  <a href="#" className="text-pink-500">
                    <span className="icon-[tabler--brand-instagram] size-5.5"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="card card-border hover:border-primary h-max shadow-none">
              <figure className="bg-base-200 pt-6">
                <img src={team3} alt="Alena Lubin" className="h-60 w-auto" />
              </figure>
              <div className="card-body gap-2">
                <h3 className="text-base-content text-center text-lg font-medium">
                  Colonel TABATE Makliwe
                </h3>
                <div className="divider"></div>
                <div>
                  <div className="flex gap-2">
                    <p className="text-base-content mb-1 font-medium">
                      Expert Securitaire
                    </p>
                    <span className="icon-[twemoji--flag-togo] size-8"></span>
                  </div>
                  <p className="text-base-content/80"> +228 90 04 45 80</p>
                  <p className="text-base-content/80"> madouele@gmail.com</p>
                </div>
                <div className="card-actions h-5 gap-2">
                  <a href="#" className="text-accent">
                    <span className="icon-[tabler--brand-facebook] size-5.5"></span>
                  </a>
                  <a href="#" className="text-primary">
                    <span className="icon-[tabler--brand-twitter] size-5.5"></span>
                  </a>
                  <a href="#" className="text-base-content">
                    <span className="icon-[tabler--brand-github] size-5.5"></span>
                  </a>
                  <a href="#" className="text-pink-500">
                    <span className="icon-[tabler--brand-instagram] size-5.5"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="card card-border hover:border-primary h-max shadow-none">
              <figure className="bg-base-200 pt-6">
                <img
                  src={team5}
                  alt="Jayden Lipshultz"
                  className="h-60 w-auto"
                />
              </figure>
              <div className="card-body gap-2">
                <h3 className="text-base-content text-center text-lg font-medium">
                  Anschaire Aveved, PhD
                </h3>
                <div className="divider"></div>
                <div>
                  <div className="flex gap-2">
                    <p className="text-base-content mb-1 font-medium">
                      Expert Securitaire
                    </p>
                    <span className="icon-[twemoji--flag-cameroon] size-8"></span>
                  </div>
                  <p className="text-base-content/80"> +237 69 15 300 36</p>
                  <p className="text-base-content/80"> aangolda5@gmail.com</p>
                </div>

                <div className="card-actions h-5 gap-2">
                  <a href="#" className="text-accent">
                    <span className="icon-[tabler--brand-facebook] size-5.5"></span>
                  </a>
                  <a href="#" className="text-primary">
                    <span className="icon-[tabler--brand-twitter] size-5.5"></span>
                  </a>
                  <a href="#" className="text-base-content">
                    <span className="icon-[tabler--brand-github] size-5.5"></span>
                  </a>
                  <a href="#" className="text-pink-500">
                    <span className="icon-[tabler--brand-instagram] size-5.5"></span>
                  </a>
                </div>
              </div>
            </div>

            
            <div className="card card-border hover:border-primary h-max shadow-none">
              <figure className="bg-base-200 pt-6">
                <img
                  src={team6}
                  alt="Jayden Lipshultz"
                  className="h-60 w-auto"
                />
              </figure>
              <div className="card-body gap-2">
                <h3 className="text-base-content text-center text-md font-bold">
                Loukoumanou Adam Nouhoun
                </h3>
                <div className="divider"></div>
                <div>
                  <div className="flex gap-2">
                    <p className="text-base-content mb-1 font-medium">
                      Expert Securitaire
                    </p>
                    <span className="icon-[twemoji--flag-benin] size-8"></span>
                  </div>
                  <p className="text-base-content/80"> +229 96 97 33 03</p>
                  <p className="text-base-content/80"> loukmanadam@gmail.com</p>
                </div>

                <div className="card-actions h-5 gap-2">
                  <a href="#" className="text-accent">
                    <span className="icon-[tabler--brand-facebook] size-5.5"></span>
                  </a>
                  <a href="#" className="text-primary">
                    <span className="icon-[tabler--brand-twitter] size-5.5"></span>
                  </a>
                  <a href="#" className="text-base-content">
                    <span className="icon-[tabler--brand-github] size-5.5"></span>
                  </a>
                  <a href="#" className="text-pink-500">
                    <span className="icon-[tabler--brand-instagram] size-5.5"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="card card-border hover:border-primary h-max shadow-none">
              <figure className="bg-base-200 pt-6">
                <img
                  src={team7}
                  alt="Jayden Lipshultz"
                  className="h-60 w-auto"
                />
              </figure>
              <div className="card-body gap-2">
                <h3 className="text-base-content text-center text-lg font-medium">
                Adam Netcho
                </h3>
                <div className="divider"></div>
                <div>
                  <div className="flex gap-2">
                    <p className="text-base-content mb-1 font-medium">
                      Expert Securitaire
                    </p>
                    <span className="icon-[twemoji--flag-chad] size-8"></span>
                  </div>
                  <p className="text-base-content/80"> +235 66 37 63 00</p>
                  <p className="text-base-content/80"> adamnetcho84@gmail.com</p>
                </div>

                <div className="card-actions h-5 gap-2">
                  <a href="#" className="text-accent">
                    <span className="icon-[tabler--brand-facebook] size-5.5"></span>
                  </a>
                  <a href="#" className="text-primary">
                    <span className="icon-[tabler--brand-twitter] size-5.5"></span>
                  </a>
                  <a href="#" className="text-base-content">
                    <span className="icon-[tabler--brand-github] size-5.5"></span>
                  </a>
                  <a href="#" className="text-pink-500">
                    <span className="icon-[tabler--brand-instagram] size-5.5"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="card card-border hover:border-primary h-max shadow-none">
              <figure className="bg-base-200 pt-6">
                <img
                  src={team8}
                  alt="Jayden Lipshultz"
                  className="h-60 w-auto"
                />
              </figure>
              <div className="card-body gap-2">
                <h3 className="text-base-content text-center text-lg font-medium">
                Mustafa Bal
                </h3>
                <div className="divider"></div>
                <div>
                  <div className="flex gap-2">
                    <p className="text-base-content mb-1 font-medium">
                      Expert Securitaire
                    </p>
                    <span className="icon-[twemoji--flag-mauritania] size-8"></span>
                  </div>
                  <p className="text-base-content/80"> +000 00 00 00 00</p>
                  <p className="text-base-content/80"> balmohamed@yahoo.fr</p>
                </div>

                <div className="card-actions h-5 gap-2">
                  <a href="#" className="text-accent">
                    <span className="icon-[tabler--brand-facebook] size-5.5"></span>
                  </a>
                  <a href="#" className="text-primary">
                    <span className="icon-[tabler--brand-twitter] size-5.5"></span>
                  </a>
                  <a href="#" className="text-base-content">
                    <span className="icon-[tabler--brand-github] size-5.5"></span>
                  </a>
                  <a href="#" className="text-pink-500">
                    <span className="icon-[tabler--brand-instagram] size-5.5"></span>
                  </a>
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
