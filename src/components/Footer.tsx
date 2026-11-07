import { site, links } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <p className="stencil foot-mark" aria-hidden="true">Taco<br />Y Hibachi</p>
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
