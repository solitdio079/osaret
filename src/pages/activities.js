import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
const activities = [
  {
    title:
      "Rencontre annuelle des experts du Sahel sur le terrorisme, en appui aux États sahéliens",
    content: (
      <p className="mb-4">
        Cet événement rassemble chaque année les spécialistes de la région
        sahélienne pour analyser l’évolution de la menace terroriste, échanger
        sur les bonnes pratiques et renforcer la coopération régionale en
        soutien aux États sahéliens.
      </p>
    ),
  },
  {
    title: "Colloque international des experts sur le terrorisme au Sahel",
    content: (
      <p className="mb-4">
        Colloque réunissant des experts internationaux, chercheurs et praticiens
        pour partager des analyses, expériences comparées et recommandations
        stratégiques sur la lutte contre le terrorisme dans la zone sahélienne.
      </p>
    ),
  },
];

const Activities = () => {
  return (
    <>
      <Layout>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-12 lg:px-8 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
          <div className="relative mx-auto mb-12  sm:mb-16 lg:mb-24">
            <h2 className="text-base-content text-center bg-primary text-2xl font-bold md:text-3xl lg:text-4xl">
              Nos Activites
            </h2>
            <span className="from-primary/40 to-primary/5 absolute start-0 top-9 h-1 w-full rounded-full bg-gradient-to-r"></span>
          </div>
          <div className="flex gap-6 flex-nowrap overflow-hidden ">
            <div className="grid gap-6 md:grid-cols-3">
              {activities.map((activity) => (
                <div className="card card-border border-success bg-success/20 rounded-none shadow-none intersect:motion-preset-slide-right intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier">
                <div className="card-body">
                  <h5 className="card-title text-xl flex gap-4">
                  
                    {activity.title}
                  </h5>
                 {activity.content}
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Activities;

export const Head = () => <Seo title={"Nos activites"} />;
