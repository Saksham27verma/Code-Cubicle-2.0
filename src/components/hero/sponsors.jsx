import React from "react";
import { ReactComponent as LaunchLink } from "../../assets/link-launch.svg";
import "./sponsors.css";
import Contact from "./contact";
import Faqs from "./faqs";
import Convener from "./convener";
import Coordinators from "./coordinators";
import Prizes from "../prizes/prizes";
const sponsors = () => {
  return (
    <React.Fragment>
      <div className="parent-sponsors">

        <h1 className="sponsors-title">
          Our Sponsors
          <img src="/images/BulletPoint.svg" alt="arrow-logo" />
        </h1>

        <section class="grid-container">
    <div class="grid grid-5-cols gap-4 grid-items-center">
        <img src="/images/discord.svg" alt="brand1" class="brand-image large-image" />
        <img src="/images/discord.svg" alt="brand2" class="brand-image large-image" />
        <img src="/images/discord.svg" alt="brand3" class="brand-image large-image" />
        <img src="/images/discord.svg" alt="brand4" class="brand-image large-image" />
        <img src="/images/discord.svg" alt="brand5" class="brand-image large-image" />
    </div>

    <div class="grid grid-4-cols gap-4 grid-items-center mt-4 large-mt-8">
        <img src="/images/discord.svg" alt="brand6" class="brand-image medium-image" />
        <img src="/images/discord.svg" alt="brand7" class="brand-image medium-image" />
        <img src="/images/discord.svg" alt="brand8" class="brand-image medium-image" />
        <img src="/images/discord.svg" alt="brand9" class="brand-image medium-image" />
    </div>
</section>


          
        <Prizes />
        <Faqs />
                <Convener />
<Contact />

      </div>
    </React.Fragment>
  );
};

export default sponsors;