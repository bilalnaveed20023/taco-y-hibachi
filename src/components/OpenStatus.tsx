"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

type State = { open: boolean; label: string } | null;

function compute(): State {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: site.tz,
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  const h = Number(parts.find((p) => p.type === "hour")?.value) % 24;
  const open = h >= site.open && h < site.close;
  if (open) return { open, label: "Open now · till 11 PM" };
  return { open, label: h < site.open ? "Closed · opens 11 AM" : "Closed · back at 11 AM" };
}

export default function OpenStatus({ className = "" }: { className?: string }) {
  const [s, setS] = useState<State>(null);
  useEffect(() => {
    setS(compute());
    const id = setInterval(() => setS(compute()), 60_000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className={`status ${s ? (s.open ? "is-open" : "is-closed") : ""} ${className}`}>
      <i aria-hidden="true" />
      {s ? s.label : "Open daily · 11 AM to 11 PM"}
    </span>
  );
}
