import * as React from "react";
import firstImg from "../images/02.jpeg";
import secondImg from "../images/03.jpeg";
import thirdImg from "../images/04.jpeg";
import fourthImg from "../images/05.jpeg";
const News = () => {
  return (
    <div>
      <div className="relative mx-auto mb-3 w-fit sm:mb-6 lg:mb-6">
        <h2 className="text-base-content text-2xl font-bold md:text-3xl lg:text-4xl">
          Nos nouvelles
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 p-10">
        <div class="card image-full sm:max-w-sm intersect:motion-preset-slide-left intersect:motion-delay-[300ms] intersect:motion-ease-spring-bouncier">
          <figure>
            <img src="https://cdn.flyonui.com/fy-assets/components/card/image-5.png" alt="overlay image" />
          </figure>
          <div class="card-body">
            <h2 class="card-title mb-2.5 text-white">Activity 1</h2>
            <p class="text-white">
              Boost your brand's visibility and engagement through targeted
              marketing strategies.
            </p>
          </div>
        </div>
        <div class="card image-full sm:max-w-sm intersect:motion-preset-slide-left intersect:motion-delay-[500ms] intersect:motion-ease-spring-bouncier">
          <figure>
            <img src="https://cdn.flyonui.com/fy-assets/components/card/image-5.png" alt="overlay image" />
          </figure>
          <div class="card-body">
            <h2 class="card-title mb-2.5 text-white">Activity 2</h2>
            <p class="text-white">
              Boost your brand's visibility and engagement through targeted
              marketing strategies.
            </p>
          </div>
        </div>
        <div class="card image-full sm:max-w-sm  intersect:motion-preset-slide-left intersect:motion-delay-[700ms] intersect:motion-ease-spring-bouncier">
          <figure>
            <img src="https://cdn.flyonui.com/fy-assets/components/card/image-5.png" alt="overlay image" />
          </figure>
          <div class="card-body">
            <h2 class="card-title mb-2.5 text-white">Activity 3</h2>
            <p class="text-white">
              Boost your brand's visibility and engagement through targeted
              marketing strategies.
            </p>
          </div>
        </div>
        <div class="card image-full sm:max-w-sm  intersect:motion-preset-slide-left intersect:motion-delay-[900ms] intersect:motion-ease-spring-bouncier">
          <figure>
            <img src="https://cdn.flyonui.com/fy-assets/components/card/image-5.png" alt="overlay image" />
          </figure>
          <div class="card-body">
            <h2 class="card-title mb-2.5 text-white">Activity 4</h2>
            <p class="text-white">
              Boost your brand's visibility and engagement through targeted
              marketing strategies.
            </p>
          </div>
        </div>
        <div class="card image-full sm:max-w-sm  intersect:motion-preset-slide-left intersect:motion-delay-[900ms] intersect:motion-ease-spring-bouncier">
          <figure>
            <img src="https://cdn.flyonui.com/fy-assets/components/card/image-5.png" alt="overlay image" />
          </figure>
          <div class="card-body">
            <h2 class="card-title mb-2.5 text-white">Activity 5</h2>
            <p class="text-white">
              Boost your brand's visibility and engagement through targeted
              marketing strategies.
            </p>
          </div>
        </div>
        <div class="card image-full sm:max-w-sm  intersect:motion-preset-slide-left intersect:motion-delay-[900ms] intersect:motion-ease-spring-bouncier">
          <figure>
            <img src="https://cdn.flyonui.com/fy-assets/components/card/image-5.png" alt="overlay image" />
          </figure>
          <div class="card-body">
            <h2 class="card-title mb-2.5 text-white">Activity 6</h2>
            <p class="text-white">
              Boost your brand's visibility and engagement through targeted
              marketing strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
