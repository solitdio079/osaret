import * as React from "react";
import newsImg1 from "../images/news1.jpeg"
import newsImg2 from "../images/news2.jpeg"
import newsImg3 from "../images/news3.jpeg"
import newsImg4 from "../images/news4.jpeg"
import newsImg5 from "../images/news5.jpeg"
import newsImg6 from "../images/news6.jpeg"

const News = () => {
  return (
    <div>
      <div className="relative mx-auto mb-3 w-fit sm:mb-6 lg:mb-6">
        <h2 className="text-base-content text-2xl font-bold md:text-3xl lg:text-4xl">
          Nos nouvelles
        </h2>
        <span className="from-primary/90 to-primary/50 absolute start-0 top-9 h-1 w-full rounded-full bg-gradient-to-r"></span>
      </div>
      <div className="grid md:grid-cols-3 gap-6 p-10">
        <div class="card image-full sm:max-w-sm intersect:motion-preset-slide-left intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier">
          <figure>
            <img src={newsImg1} alt="overlay image" />
          </figure>
          <div class="card-body">
           
            <p class="text-white">
            Avec l'ambassadeur du Japon à Ougadougou, lors de l'atelier régional sur le terrorisme, le 06 novembre 2024.
            </p>
          </div>
        </div>
        <div class="card image-full sm:max-w-sm intersect:motion-preset-slide-left intersect:motion-delay-[500ms] intersect:motion-ease-spring-bouncier">
          <figure>
            <img src={newsImg2} alt="overlay image" />
          </figure>
          <div class="card-body">
           
            <p class="text-white">
            Avec les officiers supérieurs de l'école de Maintien de la Paix, lors d'un atelier sur la lutte civilo-militaire dans la lutte contre le terrorisme.
            </p>
          </div>
        </div>
        <div class="card image-full sm:max-w-sm  intersect:motion-preset-slide-left intersect:motion-delay-[700ms] intersect:motion-ease-spring-bouncier">
          <figure>
            <img src={newsImg3} alt="overlay image" />
          </figure>
          <div class="card-body">
            
            <p class="text-white">
            Avec l'ambassadeur de la Libye aux Émirats Arabes Unis, conférencier sur le Terrorisme en Asie, lors d'une rencontre internationale à Nouakchott-Mauritanie.
            </p>
          </div>
        </div>
        <div class="card image-full sm:max-w-sm  intersect:motion-preset-slide-left intersect:motion-delay-[900ms] intersect:motion-ease-spring-bouncier">
          <figure>
            <img src={newsImg4} alt="overlay image" />
          </figure>
          <div class="card-body">
           
            <p class="text-white">
            Lors d'un exposé sur le lien entre les stupefiants et le terrorisme. au centre du Mali.
            </p>
          </div>
        </div>
        <div class="card image-full sm:max-w-sm  intersect:motion-preset-slide-left intersect:motion-delay-[900ms] intersect:motion-ease-spring-bouncier">
          <figure>
            <img src={newsImg5} alt="overlay image" />
          </figure>
          <div class="card-body">
            
            <p class="text-white">
            Avec un islamologue Niger' Président du centre de dialogue interreligieux
            </p>
          </div>
        </div>
        <div class="card image-full  intersect:motion-preset-slide-left intersect:motion-delay-[900ms] intersect:motion-ease-spring-bouncier">
          <figure className="w-fit">
            <img src={newsImg6} className="w-full" alt="overlay image" />
          </figure>
          <div class="card-body">
            
            <p class="text-white">
            Avec le Représentant régional de l'ONUDC lors d'un atelier sur l'opérationnalisaion de la la SNPREV du Niger à Niamey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
