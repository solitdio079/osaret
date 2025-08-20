import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
const services = [
  <p>
    {" "}
    Analyse rigoureuse, ainsi qu'à des études et recherches approfondies sur les
    causes et facteurs de la radicalisation, de l’extrémisme violent et du
    terrorisme au Sahel{" "}
  </p>,
  <p>
    {" "}
    Assistance technique aux acteurs étatiques, communautaires, sociaux, aux
    ONG, ainsi qu’aux institutions nationales et internationales, afin de
    renforcer leur compréhension et leurs capacités de prévention de la
    radicalisation, de l’extrémisme violent et du terrorisme dans la région du
    Sahel{" "}
  </p>,
  <p>
    {" "}
    Mise en avant une approche scientifique, stratégique et communautaire, axée
    sur la production de connaissances et le renforcement des capacités des
    acteurs publics et non étatiques face aux enjeux sécuritaires au Sahel {" "}
  </p>,
  <p>
    Réalisation des projets de recherche, d’études, de formations et
    d’assistance technique aux pays du Sahel et aux acteurs de la prévention de
    la radicalisation, de l’extrémisme violent menant au terrorisme
  </p>,
  <p>
    {" "}
    Fourniture d’expertise indépendante, rigoureuse et contextualisée pour
    renforcer les capacités des acteurs dans la prévention du terrorisme, la
    consolidation de la paix et la cohésion sociale {" "}
  </p>,
  <p>
    {" "}
    Renforcement de la coopération interétatique au Sahel en matière de
    prévention et de lutte contre la radicalisation, l’extrémisme violent et le
    terrorisme, à travers l’analyse, la recherche, l’étude, la formation et le
    renforcement des capacités {" "}
  </p>,
  <p>
    {" "}
    Soutien aux États, les institutions et les organisations non
    gouvernementales dans la conception, la mise en œuvre et
    l’opérationnalisation de projets, programmes, stratégies et initiatives en
    matière de prévention de la radicalisation et de l’extrémisme violent menant
    au terrorisme aux niveaux étatique et institutionnel ;
  </p>,
  <p>
    {" "}
    Etude d’état générale sur les communautés vulnérable, les réfugiés, enfants
    talibés et déplacés de guerres pour une meilleure prise en charge psycho
    cial, réhabilitation, réintégration et réinsertion socioéconomiques
  </p>,

  <p>
    Conseil, appui et organisation de sessions, atelier, séminaire, collègue, et
    conférence à l’échelle nationale et internationale en lien avec la
    radicalisation, l’extrémisme volent et le terrorisme au Sahel 
  </p>,
  <p>
    {" "}
    Conception et évaluation de plan PTAB et quinquennal, programmes,
    politiques, stratégies appartient aux états du Sahel, ONG, Agences et
    institutions internationales.
  </p>,
];

const Services = () => {
  return (
    <>
    <Layout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-12 lg:px-8 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
        <div className="relative mx-auto mb-12 w-fit sm:mb-16 lg:mb-24">
          <h2 className="text-base-content bg-primary text-2xl font-bold md:text-3xl lg:text-4xl">
            Nos Services
          </h2>
          <span className="from-primary/40 to-primary/5 absolute start-0 top-9 h-1 w-full rounded-full bg-gradient-to-r"></span>
        </div>
        <div className="flex gap-6 flex-nowrap overflow-hidden ">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div className="card intersect:motion-preset-slide-left intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier  min-w-60 card-border hover:border-primary transition-border h-full shadow-none duration-300">
              <div className="card-body gap-5 break-all text-2xl">{service}</div>
            </div>
          ))}
        </div>
      </div>
      </div>
      </Layout>
     
    </>
  );
};

export default Services;

export const Head = () => <Seo title={"Nos Services"} />;
