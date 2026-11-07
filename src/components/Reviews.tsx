import { reviews, site, links } from "@/lib/content";
import { Stars } from "./art";
import Reveal from "./Reveal";

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <Reveal className="reviews-head">
          <div>
            <p className="mono eyebrow on-green">Lo dice la gente · straight from Google</p>
            <h2 className="stencil h2 on-green">Don’t take<br />our word.</h2>
          </div>
          <div className="score">
            <b>{site.rating}</b>
            <div>
              <Stars size={18} />
              <p className="mono">{site.reviewCount} reviews on Google</p>
            </div>
          </div>
        </Reveal>
      </div>

      <ul className="slips" aria-label="Customer reviews">
        {reviews.map((r, i) => (
          <li key={r.name} className="slip" style={{ ["--tilt" as string]: `${[-1.2, 0.9, -0.6, 1.1, -0.9][i % 5]}deg` }}>
            <Stars size={13} />
            <blockquote>{r.text}</blockquote>
            <p className="slip-by">
              <b>{r.name}</b>
              {r.badge && <span className="mono">{r.badge}</span>}
            </p>
          </li>
        ))}
      </ul>

      <div className="wrap">
        <Reveal className="reviews-foot">
          <a className="btn btn-yolk" href={links.place} target="_blank" rel="noopener noreferrer">Read all {site.reviewCount} on Google</a>
        </Reveal>
      </div>
    </section>
  );
}
