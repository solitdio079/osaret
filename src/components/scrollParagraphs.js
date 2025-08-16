import * as React from "react";
const infos = [
  <span>
    {" "}
    <span className="text-red-500"> La Radicalisation : </span> La
    radicalisation est un processus par lequel un individu ou un groupe
    d’individus rompt avec son environnement social, culturel ou familial pour
    adopter de nouvelles croyances extrêmes, qu'elles soient politiques,
    idéologiques, économiques, culturelles ou religieuses.{" "}
    <span className="text-red-500"> Cabinet - Osaret</span>
  </span>,
  <span>
    {" "}
    <span className="text-red-500"> L’Extrémisme violent : </span> L’extrémisme
    violent désigne l’attitude d’un individu ou d’un groupe d’individus
    cherchant à imposer ses nouvelles croyances radicales à la communauté dont il est
    issu, en recourant à la violence verbale et/ou physique.{" "}
    <span className="text-red-500"> Cabinet - Osaret</span>
  </span>,
  <span>
    {" "}
    <span className="text-red-500"> Le Terrorisme: </span>Le terrorisme se
    manifeste par des actes violents (tueries de masse, destructions, attentats)
    dirigés contre des individus, des groupes, des organisations ou des États,
    dans le but d’instaurer un climat d’insécurité généralisée et de semer la
    peur au sein des communautés.
    <span className="text-red-500"> Cabinet - Osaret</span>
  </span>,
  <span>
    <span className="text-red-500">JNIM : </span>La stratégie actuelle du JNIM
    au Sahel repose sur une approche de guérilla combinant attaques asymétriques
    contre les forces étatiques et actions de propagande pour gagner le soutien
    des populations locales.
    <span className="text-red-500"> Cabinet - Osaret</span>
  </span>,
  <span>
    {" "}
    <span className="text-red-500">JNIM : </span> Le groupe exploite les
    conflits intercommunautaires et l'affaiblissement des États pour étendre son
    influence territoriale tout en maintenant des négociations opportunistes
    avec certains acteurs locaux.{" "}
    <span className="text-red-500"> Cabinet - Osaret</span>
  </span>,
];

const ScrollParagrapths = () => {
  return (
    <div className="flex gap-6 overflow-hidden duration-300 [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]">
      <div className="flex flex-nowrap gap-6 animate-news mx-3">
        {infos.map((info) => (
          <p className="text-white whitespace-nowrap"> {info} </p>
        ))}
      </div>
      <div className="hidden lg:flex flex-nowrap gap-6 animate-news mx-3">
        {infos.map((info) => (
          <p className="text-white whitespace-nowrap"> {info} </p>
        ))}
      </div>
    </div>
  );
};
export default ScrollParagrapths;
