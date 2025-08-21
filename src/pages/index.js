import * as React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ObjectifCard from "../components/ObjectifCard";
import Organigrame from "../components/Organigrane";
import ScrollCards from "../components/scrollCards";
import Seo from "../components/Seo";
import firstImg from "../images/02.jpeg";
import ShapedCard from "../components/shapedCard";
import News from "../components/news";
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <div className="flex flex-col gap-6 px-10">
        <div className="bg-primary mt-6 relative mx-auto w-full px-8 text-center p-1">
          <h2 className="text-base-content text-2xl font-bold md:text-3xl lg:text-4xl">
            Objectifs Global
          </h2>
         
        </div>
        <div className="grid md:grid-cols-3 mb-12 gap-6 my-5 p-5 rounded-none">
          <ObjectifCard
            text={
              "Formations et assistance technique aux ONG, Etats et organisations internationales "
            }
            icon="icon-[tabler--books] size-10 rtl:rotate-180"
          />
          <ObjectifCard
            text={"Études et recherches"}
            icon="icon-[tabler--chart-dots] size-10 rtl:rotate-180"
          />
          <ObjectifCard
            text={"Analyses et statistiques"}
            icon="icon-[tabler--chart-histogram] size-10 rtl:rotate-180"
          />
          <ObjectifCard
            text={
              "Enquêtes communautaires sur la sécurité et le développement communautaire"
            }
            icon="icon-[tabler--clipboard-text] size-10 rtl:rotate-180"
          />
          <ObjectifCard
            text={
              "Conception, suivi et évaluation de projets, programmes, stratégies et plans d’action"
            }
            icon="icon-[tabler--file-chart] size-10 rtl:rotate-180"
          />
          <ObjectifCard
            text={
              " Organisation d’événements (ateliers, forums, séminaires, conférences, colloques)."
            }
            icon="icon-[tabler--timeline-event-text] size-10 rtl:rotate-180"
          />
        </div>
      </div>

      <div className="my-5 p-5 rounded-none">
        <div className="">
          <div className="grid gap-6 px-5 lg:grid-cols-2 motion-translate-y-in-100 motion-blur-in-md">
            <div className="">
              <div className="space-y-4 mb-6">
              <div className="bg-primary relative mx-auto mb-6 text-center p-1">
                <h2 className="text-base-content text-2xl intersect:motion-preset-slide-left intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier font-semibold md:text-3xl lg:text-4xl">
                  Objectif spécifique
                </h2>
               
               </div>
                <div className="card card-border border-success bg-success/20 rounded-none shadow-none intersect:motion-preset-slide-right intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier">
                  <div className="card-body">
                    <h5 className="card-title text-xl flex gap-4">
                      <span className="icon-[tabler--circle-check] size-6 rtl:rotate-180"></span>
                      Concevoir 
                    </h5>
                    <p className="mb-4 lg:text-2xl">
                      des projets d’analyse, de recherche, d’études,
                      de formation et d’assistance technique pour les pays du
                      Sahel, des institutions, des agences et organisations
                      internationales, des ONG, des acteurs sociaux et
                      communautaires, afin de renforcer la compréhension et la
                      prévention de la radicalisation, de l’extrémisme violent
                      et du terrorisme au Sahel
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                className="mask hidden lg:block mask-parallelogram intersect:motion-preset-slide-right intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier"
                src={firstImg}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3  p-5">
            <div className="card card-border border-success bg-success/20 rounded-none shadow-none intersect:motion-preset-slide-right intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier">
              <div className="card-body">
                <h5 className="card-title text-xl flex gap-4">
                  <span className="icon-[tabler--circle-check] size-6 rtl:rotate-180"></span>
                  Creer
                </h5>
                <p className="mb-4">
                  des partenariats et mobiliser des ressources pour soutenir les
                  États du Sahel dans la prévention et la lutte contre le
                  terrorisme
                </p>
              </div>
            </div>

            <div className="card card-border border-info bg-info/20 rounded-none  shadow-none intersect:motion-preset-slide-right intersect:motion-delay-[600ms] intersect:motion-ease-spring-bouncier">
              <div className="card-body">
                <h5 className="card-title text-xl flex gap-4">
                  <span className="icon-[tabler--circle-check] size-6 rtl:rotate-180"></span>
                  Accompagner
                </h5>
                <p className="mb-4">
                  les États, les institutions, les ONG, les agences et
                  organisations internationales dans la conception, la mise en
                  œuvre et l’opérationnalisation de projets, programmes,
                  politiques, stratégies et initiatives visant à prévenir et à
                  lutter contre la radicalisation, de l’extrémisme violent et du
                  terrorisme dans la région sahélienne
                </p>
              </div>
            </div>
            <div className="card card-border border-warning bg-warning/20  rounded-none shadow-none intersect:motion-preset-slide-right intersect:motion-delay-[800ms] intersect:motion-ease-spring-bouncier">
              <div className="card-body">
                <h5 className="card-title text-xl flex gap-4 items-center">
                  {" "}
                  <span className="icon-[tabler--circle-check] size-6 rtl:rotate-180"></span>
                  Accompagner
                </h5>
                <p className="mb-4">
                  les pays du Sahel dans les efforts de médiation et de gestion
                  des conflits communautaires, inter- et intracommunautaires,
                  ainsi que religieux, en lien avec la radicalisation,
                  l’extrémisme violent et le terrorisme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-6 lg:px-8 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
        <div className="bg-primary relative mx-auto mb-6 text-center p-1 ">
          <h2 className="text-base-content text-2xl font-bold md:text-3xl lg:text-4xl">
            Nos Services
          </h2>
          <span className="from-primary/90 to-primary/50 absolute start-0 top-9 h-1 w-full rounded-full bg-gradient-to-r"></span>
        </div>
        <div className="grid items-center gap-12 md:grid-cols-1">
          <ScrollCards />
        </div>
      </div>

      <div className="px-8">
        <div className="bg-primary relative mx-auto text-center p-1  mb-6">
          <h2 className="text-base-content text-2xl font-bold md:text-3xl  lg:text-4xl">
            Organigramme fonctionnel
          </h2>
         
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-20 my-10">
          <ShapedCard
            title={"Pole religion et terrorisme"}
            items={[
              "Fondamentalisme religieux (doctrine, tendance, croyance et sectarisme)",
              "Dérive sectaire",
              "Secte",
              "Radicalisation en milieu carcéral",
              "Ecoles coraniques et enfants talibés en lien avec la menace sécuritaire à travers des études prospectives.",
            ]}
          />
          <ShapedCard
            title={"Pôle formation et renforcement des capacités"}
            items={[
              "Responsable formation",
              "Formateurs/experts thématiques (internes ou associés)",
              "Chargé de logistique et planification des sessions",
            ]}
          />
          <ShapedCard
            title={"Pôle scientifique (études  recherche)"}
            items={[
              "Directeur scientifique",
              "Coordinateur recherche",
              "Chargés de recherche (sécurité, radicalisation, gouvernance, droits, conflits communautaires, humains, etc.)",
            ]}
          />
          <ShapedCard
            title={"Pôle communication et partenariat"}
            items={[
              "Responsable communication et relations publiques",
              "Chargé des partenariats et réseaux",
              "Community manager (site web, réseaux sociaux)",
            ]}
          />

          <ShapedCard
            title={"Pole Crime organisé et transnational"}
            items={[
              "Trafic de stupéfiants, arme et Drogue",
              "Financement du terrorisme",
              "Economie criminelle (Contrebande, flux financiers illicites) ",
              "Migrations irrégulières",
              "Trafic traite humain",
            ]}
          />
          <ShapedCard
            title={"Zones de miroir d’intervention"}
            bgColor="bg-success/80"
            borderColor="border-success"
            items={[
              "Zone des 3 frontières",
              "Basin du lac Tchad",
              "Grand Sahara & corridors",
              "Bande Sahélo sahélienne & méditerrané",
              "Zones de transit.",
            ]}
          />
        </div>
      </div>

      <News />

      <Organigrame />

      <div className="grid items-center gap-12 lg:grid-cols-1">
        <div>
          <div style={{ width: "100%" }}>
            <iframe
              width="100%"
              className="h-80 lg:h-[350px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.911917048306!2d-7.9344892248710215!3d12.653779887633114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe51d3004d077799%3A0x5714d50eeae0f5dc!2sRond-point%20G%C3%A9n%C3%A9ral%20Abdoulaye%20Soumar%C3%A9!5e0!3m2!1sen!2str!4v1754921257508!5m2!1sen!2str"
            >
              <a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">
                Carte démographique
              </a>
            </iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title={"Accueil"} />;
