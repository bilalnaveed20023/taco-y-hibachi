import { menu, site, links } from "@/lib/content";
import Reveal from "./Reveal";

export default function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="wrap">
        <Reveal>
          <p className="mono eyebrow on-red">El menú · what’s on the flat-top</p>
          <h2 className="stencil h2 on-red">The window menu</h2>
        </Reveal>

        <div className="tickets">
          {menu.map((s, i) => (
            <Reveal key={s.no} className="ticket-wrap" delay={(i % 3) * 90}>
              <article className="ticket">
                <header className="ticket-head">
                  <span className="mono ticket-no">No. {s.no}</span>
                  <h3 className="stencil ticket-title">{s.title}</h3>
                  <div className="ticket-sub">
                    <p className="mono ticket-kicker">{s.kicker}</p>
                    {s.badge && <span className="ticket-badge" aria-label={`${s.badge} each`}>{s.badge}</span>}
                  </div>
                </header>
                <ul className="ticket-list">
                  {s.items.map((it) => (
                    <li key={it.name}>
                      <div className="item-row">
                        <span className="item-name">{it.name}</span>
                        {it.price && <span className="item-price">{it.price}</span>}
                      </div>
                      {it.note && <p className="mono item-note">{it.note}</p>}
                    </li>
                  ))}
                </ul>
                {s.extras && (
                  <ul className="ticket-extras">
                    {s.extras.map((e) => (
                      <li key={e.label} className="mono">
                        <span>{e.label}</span>
                        {e.price && <b>{e.price}</b>}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}

          <Reveal className="menu-foot" delay={90}>
            <p>Prices as posted on the truck. Specials change, so call ahead and skip the line.</p>
            <a className="btn btn-yolk" href={links.tel}>Call {site.phone}</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
