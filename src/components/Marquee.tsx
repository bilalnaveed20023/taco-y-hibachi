import { flavors } from "@/lib/content";
import { Diamond } from "./art";

export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {flavors.map((f) => (
        <li key={f}>
          {f}
          <Diamond />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee" role="presentation">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
