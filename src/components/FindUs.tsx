import { site, links, patioQuote } from "@/lib/content";
import Reveal from "./Reveal";
import OpenStatus from "./OpenStatus";

export default function FindUs() {
  return (
    <section className="find" id="find">
      <div className="wrap find-grid">
        <Reveal className="find-copy">
          <p className="mono eyebrow">Ven a vernos · find the truck</p>
          <h2 className="stencil h2">
            {site.street}
          </h2>
          <p className="find-city mono">{site.city}, {site.state} {site.zip}</p>

          <div className="hours">
            <p className="mono hours-label">Hours</p>
            <p className="hours-big">Every day<br />11 AM – 11 PM</p>
            <OpenStatus className="on-paper" />
            <p className="small dim">It’s a truck, so hours can shift. Call before a long drive.</p>
          </div>

          <figure className="patio">
            <blockquote>“{patioQuote}”</blockquote>
            <figcaption className="mono">From a Google review · Regulars say to look for us at The Regal Eagle</figcaption>
          </figure>

          <div className="ctas">
            <a className="btn btn-ink" href={links.directions} target="_blank" rel="noopener noreferrer">Get directions</a>
            <a className="btn btn-ghost-ink" href={links.tel}>{site.phone}</a>
          </div>
        </Reveal>

        <Reveal className="map-wrap" delay={100}>
          <a className="map-fallback" href={links.directions} target="_blank" rel="noopener noreferrer">Open the map</a>
          <iframe
            className="map"
            title={`Map to ${site.name}, ${site.street}`}
            src={links.embed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
