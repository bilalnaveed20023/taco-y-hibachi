import { site, links, asset } from "@/lib/content";
import { Awning, PapelPicado, TileBand } from "./art";
import OpenStatus from "./OpenStatus";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Awning />
      <PapelPicado />
      <div className="hero-grid">
        <div className="hero-logo">
          <div className="arch">
            <h1>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/img/logo.webp")}
                width={900}
                height={1079}
                alt="Taco Y Hibachi. A grill chef with a carving fork, established 2025."
                fetchPriority="high"
              />
            </h1>
          </div>
        </div>

        <div className="hero-copy">
          <p className="mono kicker">Bienvenidos · {site.neighborhood}</p>
          <p className="lede">Steak tacos and flat-top hibachi out of one window. Grab it, then take it to the patio.</p>
          <OpenStatus />
          <div className="ctas">
            <a className="btn btn-yolk" href={links.tel}>Call {site.phone}</a>
            <a className="btn btn-ghost" href={links.directions} target="_blank" rel="noopener noreferrer">Get directions</a>
          </div>
        </div>
      </div>
      <TileBand />
    </section>
  );
}
