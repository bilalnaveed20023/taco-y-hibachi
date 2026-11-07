import { site, links, asset } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div className="foot-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/img/logo.webp")} width={900} height={1079} alt="Taco Y Hibachi logo: a grill chef with a carving fork, established 2025" loading="lazy" />
        </div>
        <div className="foot-cols">
          <div>
            <p className="mono foot-label">Find us</p>
            <p>{site.street}<br />{site.city}, {site.state} {site.zip}</p>
          </div>
          <div>
            <p className="mono foot-label">Hours</p>
            <p>Every day<br />11 AM – 11 PM</p>
          </div>
          <div>
            <p className="mono foot-label">Order</p>
            <p><a href={links.tel}>{site.phone}</a><br /><a href={links.directions} target="_blank" rel="noopener noreferrer">Directions</a></p>
          </div>
        </div>
        <p className="mono foot-fine">© {new Date().getFullYear()} {site.name} · {site.neighborhood}</p>
      </div>
    </footer>
  );
}
