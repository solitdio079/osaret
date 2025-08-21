import * as React from "react";
import Layout from "../components/Layout";
import About from "../components/about";
import Seo from "../components/Seo";

const Projects = () => {
   return (
    <Layout>
         <div className="relative mx-auto mb-12 px-8 sm:mb-16 lg:mb-12">
          <h2 className="text-base-content bg-primary text-center text-2xl font-bold md:text-3xl lg:text-4xl">
            Nos Projets
          </h2>
        
        </div>
       <div className="grid gap-6 md:grid-cols-3  p-5">
            <div className="card card-border border-success bg-success/20 rounded-none shadow-none intersect:motion-preset-slide-right intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier">
              <div className="card-body">
                <h5 className="card-title text-xl flex gap-4">
                 
                  Projet d’étude intercontinentale sur le terrorisme : de l’Asie au Sahel
                </h5>
                <p className="mb-4">
                Étude comparative des dynamiques, causes et réponses face au terrorisme entre l’Asie et le Sahel
                </p>
              </div>
            </div>
            <div className="card card-border border-info bg-info/20 rounded-none  shadow-none intersect:motion-preset-slide-right intersect:motion-delay-[600ms] intersect:motion-ease-spring-bouncier">
              <div className="card-body">
                <h5 className="card-title text-xl flex gap-4">
                  
                  Projet de recherche sur la radicalisation en milieu carcéral
                </h5>
                <p className="mb-4">
                Analyse des facteurs, mécanismes et impacts de la radicalisation dans les prisons
                </p>
              </div>
            </div>
            <div className="card card-border border-warning bg-warning/20  rounded-none shadow-none intersect:motion-preset-slide-right intersect:motion-delay-[800ms] intersect:motion-ease-spring-bouncier">
              <div className="card-body">
                <h5 className="card-title text-xl flex gap-4 items-center">
                  {" "}
                 
                  Étude régionale sur la radicalisation en milieu carcéral dans le Sahel
                </h5>
                <p className="mb-4">
                Cas du Mali, du Niger, du Burkina Faso et du Tchad – approches et recommandations
                </p>
              </div>
            </div>
            <div className="card card-border border-accent bg-accent/20  rounded-none shadow-none intersect:motion-preset-slide-right intersect:motion-delay-[800ms] intersect:motion-ease-spring-bouncier">
              <div className="card-body">
                <h5 className="card-title text-xl flex gap-4 items-center">
                  {" "}
                 
                  Étude sur la situation des déplacés internes et externes au Sahel
                </h5>
                <p className="mb-4">
                Dynamiques migratoires, vulnérabilités, besoins humanitaires et perspectives de retour durable
                </p>
              </div>
            </div>
          </div>
    </Layout>
   )
}

export default Projects;

export const Head = () => <Seo title={"Nos Projets"} />;