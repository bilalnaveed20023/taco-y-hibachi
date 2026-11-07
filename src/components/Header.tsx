import { site, links, asset } from "@/lib/content";

export default function Header() {
  return (
    <header className="top">
      <a href="#top" className="brand" aria-label={`${site.name}, home`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="brand-chef" src={asset("/img/chef.webp")} width={36} height={36} alt="" />
        <span className="brand-name">Taco Y Hibachi</span>
      </a>
      <nav className="top-nav" aria-label="Sections">
        <a href="#menu">Menu</a>
        <a href="#find">Find us</a>
        <a href="#reviews">Reviews</a>
      </nav>
      <a className="btn btn-yolk btn-sm" href={links.tel}>Call</a>
    </header>
  );
}
