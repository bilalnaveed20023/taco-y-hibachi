"use client";

import { useState, type CSSProperties } from "react";
import { sauces } from "@/lib/content";
import { Taco, Lime } from "./art";

export default function SaucePicker() {
  const [id, setId] = useState(sauces[1].id);
  const sauce = sauces.find((s) => s.id === id)!;
  return (
    <div className="picker" style={{ "--sauce": sauce.color } as CSSProperties}>
      <div className="picker-art">
        <Taco className="picker-taco" />
        <Lime className="picker-lime" />
      </div>
      <div className="picker-ui">
        <p className="mono picker-label" id="sauce-label">Pick your sauce</p>
        <div className="picker-opts" role="radiogroup" aria-labelledby="sauce-label">
          {sauces.map((s) => (
            <button
              key={s.id}
              type="button"
              role="radio"
              aria-checked={s.id === id}
              className={`opt ${s.id === id ? "on" : ""}`}
              onClick={() => setId(s.id)}
            >
              <span className="swatch" style={{ background: s.color }} aria-hidden="true" />
              {s.name}
            </button>
          ))}
        </div>
        <p className="picker-line" aria-live="polite">
          <b>{sauce.name}.</b> {sauce.line}
        </p>
      </div>
    </div>
  );
}
