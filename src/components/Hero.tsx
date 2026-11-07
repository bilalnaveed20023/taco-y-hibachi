import { site, links, asset } from "@/lib/content";
import { Awning, Stars } from "./art";
import OpenStatus from "./OpenStatus";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Awning />
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="mono kicker">{site.neighborhood} · Vernor Hwy</p>
          <h1 className="stencil hero-h1" aria-label="Taco Y Hibachi">
            <span className="l1" aria-hidden="true">
              Taco<span className="ysticker">Y</span>
            </span>
            <span className="l2" aria-hidden="true">Hibachi</span>
          </h1>
          <p className="lede">Steak tacos and flat-top hibachi out of one window. Grab it, then take it to the patio.</p>
          <OpenStatus />
          <div className="ctas">
            <a className="btn btn-yolk" href={links.tel}>Call {site.phone}</a>
            <a className="btn btn-ghost" href={links.directions} target="_blank" rel="noopener noreferrer">Get directions</a>
          </div>
        </div>

        <div className="hero-art">
          <span className="sun" aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero-truck"
            src={asset("/img/truck.webp")}
            width={1800}
            height={980}
            alt="The Taco Y Hibachi food truck with the open service window and the chef logo on the side"
            fetchPriority="high"
          />
          <a className="rating-sticker" href={links.place} target="_blank" rel="noopener noreferrer" aria-label={`${site.rating} stars from ${site.reviewCount} Google reviews`}>
            <b aria-hidden="true">{site.rating}</b>
            <Stars size={11} />
            <span aria-hidden="true">{site.reviewCount} Google reviews</span>
          </a>
        </div>
      </div>
      <div className="counter" aria-hidden="true" />
    </section>
  );
}
