import * as React from "react";
import Layout from "../components/Layout";

import Seo from "../components/Seo";
import firstImg from "../images/contact2.png"

const Contact = () => {
  return (
    <>
    <Layout>
      <div className="bg-base-200 py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
          <div className="relative mx-auto mb-12 w-fit sm:mb-16 lg:mb-24">
            <h2 className="text-base-content text-2xl font-bold md:text-3xl lg:text-4xl">
              Contactez-nous
            </h2>
            <span className="from-primary/40 to-primary/5 absolute start-0 top-9 h-1 w-full rounded-full bg-gradient-to-r"></span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <img
              src={firstImg}
              alt="Contact illustration"
              className="size-full rounded-none intersect:motion-preset-slide-left intersect:motion-delay-[100ms] intersect:motion-ease-spring-bouncier"
            />

            <div>
              <h3 className="text-base-content mb-6 text-2xl font-semibold intersect:motion-preset-slide-right intersect:motion-delay-[200ms] intersect:motion-ease-spring-bouncier">
              Ravi de vous aider !
              </h3>
              <p className="text-base-content/80 mb-10 text-lg font-medium intersect:motion-preset-slide-right intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier">
                Le Cabinet OSARET a son siège à Bamako, près du rond-point
                Général Soumaré, à Sotuba. Il dispose également de
                représentations au Burkina Faso, au Niger, au Bénin, au Togo, au
                Tchad, au Cameroun et au Soudan, assurées par des experts
                nationaux qualifiés.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="card shadow-none intersect:motion-preset-slide-left intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier">
                  <div className="card-body items-center gap-3">
                    <div className="avatar avatar-placeholder">
                      <div className="border-primary/20 text-primary w-9 rounded-full border">
                        <span className="icon-[tabler--clock] text-primary size-6"></span>
                      </div>
                    </div>
                    <h4 className="text-base-content text-lg font-medium">
                    Horaires 
                    </h4>
                    <div className="text-center">
                      <p className="text-base-content/80">Lundit-Vendredi</p>
                      <p className="text-base-content/80">8:00 à 17:00</p>
                    </div>
                  </div>
                </div>

                <div className="card shadow-none intersect:motion-preset-slide-left intersect:motion-delay-[600ms] intersect:motion-ease-spring-bouncier">
                  <div className="card-body items-center gap-3">
                    <div className="avatar avatar-placeholder">
                      <div className="border-primary/20 text-primary w-9 rounded-full border">
                        <span className="icon-[tabler--map-pin] text-primary size-6"></span>
                      </div>
                    </div>
                    <h4 className="text-base-content text-lg font-medium">
                      Adresse
                    </h4>
                    <address className="text-base-content/80 text-center not-italic">
                    Bamako – Mali
                     
                    </address>
                  </div>
                </div>

                <div className="card shadow-none intersect:motion-preset-slide-left intersect:motion-delay-[800ms] intersect:motion-ease-spring-bouncier">
                  <div className="card-body items-center gap-3">
                    <div className="avatar avatar-placeholder">
                      <div className="border-primary/20 text-primary w-9 rounded-full border">
                        <span className="icon-[tabler--briefcase] text-primary size-6"></span>
                      </div>
                    </div>
                    <h4 className="text-base-content text-lg font-medium">
                      Email
                    </h4>
                    <address className="text-base-content/80 text-center not-italic">
                    contact@cabinet-osaret.org
                     
                    </address>
                  </div>
                </div>

                <div className="card shadow-none intersect:motion-preset-slide-left intersect:motion-delay-[1000ms] intersect:motion-ease-spring-bouncier">
                  <div className="card-body items-center gap-3">
                    <div className="avatar avatar-placeholder">
                      <div className="border-primary/20 text-primary w-9 rounded-full border">
                        <span className="icon-[tabler--phone] text-primary size-6"></span>
                      </div>
                    </div>
                    <h4 className="text-base-content text-lg font-medium">
                      Telephone
                    </h4>
                    <div className="text-center">
                      <p className="text-base-content/80">+223 76 90 81 81 </p>
                      <p className="text-base-content/80"> +223 66 66 45 45 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
};

export default Contact;

export const Head = () => <Seo title={"Contact"} />;
