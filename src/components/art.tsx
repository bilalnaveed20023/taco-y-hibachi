// Hand-built SVG art: awning, taco, lime, stars. Flat shapes, heavy ink outline, offset shadow.

const INK = "#1d1713";

export function Awning() {
  return (
    <svg className="awning" aria-hidden="true" width="100%" height="54" preserveAspectRatio="none">
      <defs>
        <pattern id="awn" width="64" height="54" patternUnits="userSpaceOnUse">
          <path d="M0 0H32V30A16 16 0 0 1 0 30Z" fill="#d1361f" />
          <path d="M32 0H64V30A16 16 0 0 1 32 30Z" fill="#f4ead5" />
          <path d="M0 0H32V8H0Z" fill="#000" opacity=".12" />
          <path d="M32 0H64V8H32Z" fill="#000" opacity=".08" />
        </pattern>
        <pattern id="awn-shadow" width="64" height="54" patternUnits="userSpaceOnUse">
          <path d="M0 0H64V36A16 16 0 0 1 32 36A16 16 0 0 1 0 36Z" fill="#000" />
        </pattern>
      </defs>
      <rect width="100%" height="54" fill="url(#awn-shadow)" opacity=".35" transform="translate(0 6)" />
      <rect width="100%" height="54" fill="url(#awn)" />
    </svg>
  );
}

export function Star({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className="star">
      <path d="M12 1.8l3 6.9 7.5.7-5.7 5 1.7 7.3L12 17.9 5.5 21.7l1.7-7.3-5.7-5 7.5-.7z" fill="currentColor" />
    </svg>
  );
}

export function Stars({ size = 14 }: { size?: number }) {
  return (
    <span className="stars" role="img" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={size} />
      ))}
    </span>
  );
}

export function Diamond() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="diamond">
      <path d="M7 0L14 7L7 14L0 7Z" fill="currentColor" />
    </svg>
  );
}

export function Lime({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 160" aria-hidden="true">
      <g transform="translate(6 8)">
        <path d="M10 80a70 70 0 0 1 140 0z" fill={INK} />
      </g>
      <path d="M10 80a70 70 0 0 1 140 0z" fill="#4f7d2c" stroke={INK} strokeWidth="6" strokeLinejoin="round" />
      <path d="M26 80a54 54 0 0 1 108 0z" fill="#d9e58a" stroke={INK} strokeWidth="4" strokeLinejoin="round" />
      <g stroke={INK} strokeWidth="4" strokeLinecap="round">
        <path d="M80 80V30" />
        <path d="M80 80L46 44" />
        <path d="M80 80L114 44" />
        <path d="M80 80L32 62" />
        <path d="M80 80L128 62" />
      </g>
      <path d="M10 80h140" stroke={INK} strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

// The sauce drizzle reads --sauce from the nearest ancestor.
export function Taco({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 440 320" aria-hidden="true">
      {/* offset shadow */}
      <g transform="translate(10 12)" fill={INK}>
        <path d="M30 190A190 44 0 0 1 410 190Z" />
        <path d="M20 190H420A200 140 0 0 1 20 190Z" />
      </g>

      {/* back shell lip */}
      <path d="M30 190A190 44 0 0 1 410 190Z" fill="#d79a3b" stroke={INK} strokeWidth="7" strokeLinejoin="round" />

      <g transform="translate(220 190) scale(1.22) translate(-220 -190)">
      {/* fillings */}
      <g stroke={INK} strokeWidth="6" strokeLinejoin="round">
        {/* meat chunks */}
        <path d="M70 190c-6-34 14-58 44-52 18-26 56-30 74-6 22-20 62-14 74 14 26-6 52 8 56 44z" fill="#6b3a22" />
        <path d="M118 190c-4-18 8-30 24-28 10-12 30-12 38 2 14-6 30 4 30 26z" fill="#8a4c2c" />
        <path d="M258 190c-2-16 10-26 24-24 8-12 28-10 34 4 12-2 22 8 22 20z" fill="#8a4c2c" />
      </g>

      {/* onion */}
      <g fill="#f4ead5" stroke={INK} strokeWidth="4.5" strokeLinejoin="round">
        <path d="M150 134l22-14 10 16-20 12z" />
        <path d="M232 118l24-8 6 18-22 8z" />
        <path d="M312 140l20-12 12 14-18 14z" />
      </g>

      {/* cilantro */}
      <g fill="#3f6b3a" stroke={INK} strokeWidth="4" strokeLinejoin="round">
        <path d="M110 150c8-16 24-18 30-8-6 10-20 16-30 8z" />
        <path d="M200 124c6-18 24-22 32-12-8 12-22 18-32 12z" />
        <path d="M274 130c10-14 26-14 32-4-8 10-22 14-32 4z" />
        <path d="M350 160c6-14 20-16 26-6-8 8-18 12-26 6z" />
      </g>

      {/* sauce drizzle */}
      <path
        d="M96 150c30 22 52-14 82 6s46-26 80-4 52-26 90-2"
        fill="none"
        stroke="var(--sauce, #c2301a)"
        strokeWidth="14"
        strokeLinecap="round"
        style={{ transition: "stroke .35s ease" }}
      />
      <path
        d="M96 150c30 22 52-14 82 6s46-26 80-4 52-26 90-2"
        fill="none"
        stroke={INK}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity=".35"
        transform="translate(0 6)"
      />

      </g>

      {/* front shell */}
      <path d="M20 190H420A200 140 0 0 1 20 190Z" fill="#f0bf5e" stroke={INK} strokeWidth="7" strokeLinejoin="round" />
      <path d="M52 204A170 112 0 0 0 388 204" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" opacity=".35" strokeDasharray="2 14" />
      <path d="M44 210c40 52 120 76 176 76" fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" opacity=".28" />
    </svg>
  );
}

export function Flame({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 80" aria-hidden="true">
      <path d="M30 4c4 18 24 26 24 48a24 24 0 0 1-48 0c0-12 6-18 10-24 2 8 6 10 8 10-2-12 0-24 6-34z" fill="#f3b82d" stroke={INK} strokeWidth="4" strokeLinejoin="round" />
      <path d="M30 40c2 8 12 12 12 22a12 12 0 0 1-24 0c0-6 4-8 6-12 1 4 4 5 5 5-1-6 0-10 1-15z" fill="#d1361f" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}
