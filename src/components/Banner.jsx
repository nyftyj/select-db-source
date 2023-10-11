import { memo } from "react";
import LightBulbIcon from "../assets/icons/light-bulb.svg";

const Banner = memo(function Banner({ title, description }) {
  return (
    <article role="contentinfo" aria-label="Pro tip article">
      <section className="banner-container">
        <div>
          <img
            style={{ padding: "0 4px" }}
            src={LightBulbIcon}
            alt="Pro tip light bulb"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "0 4px",
          }}
        >
          <h4 style={{ margin: 0, padding: 0 }}>{title}</h4>
          <p style={{ margin: 0, padding: 0 }}>{description}</p>
        </div>
      </section>
    </article>
  );
});

export default Banner;
